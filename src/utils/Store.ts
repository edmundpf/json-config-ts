import { homedir } from 'os'
import { resolve } from 'path'
import { StoreArgs } from './types'
import { sterilizeKeys } from './utils'
import { storePath, errorMessages } from './values'
import JsonFile from 'edit-json-file'
import Cryptr from 'cryptr'
import {
	existsSync,
	mkdirSync,
	writeFileSync,
} from 'fs'
var jsonFile: any = null
var crypt: any = null

/**
 * Store Class
 */

export default class Store {

	collection: string
	name: string
	data: any
	defaultData: any
	encryptedFields: Array<string>
	basePath: string
	fullPath: string

	/**
	 * Constructor
	 */

	constructor(args: StoreArgs) {
		const storeArgs: any = {
			collection: '',
			name: '',
			defaultData: {},
			encryptedFields: [],
		}
		for (let key in storeArgs) {
			if (args[key] != null) {
				storeArgs[key] = args[key]
			}
		}
		if (storeArgs.name == '') {
			throw new Error(errorMessages.nameError)
		}
		this.collection = storeArgs.collection
		this.name = storeArgs.name
		this.encryptedFields = storeArgs.encryptedFields
		this.defaultData = JSON.parse(JSON.stringify(storeArgs.defaultData))
		this.basePath = resolve(`${homedir()}/${storePath}/${this.collection}`)
		this.fullPath = resolve(`${this.basePath}/${this.collection != '' ? '/' : ''}${this.name}.json`)
		this.init()
		crypt = new Cryptr(this.name)
	}

	/**
	 * Init
	 */

	private init() {
		if (!existsSync(this.basePath)) {
			mkdirSync(
				this.basePath,
				{recursive: true}
			)
		}
		if (!existsSync(this.fullPath)) {
			this.write(this.defaultData)
		}
		this.load()
		return true
	}

	/**
	 * Load data
	 */

	private load() {
		jsonFile = JsonFile(
			this.fullPath,
			{
				autosave: true
			}
		)
		var data: any = jsonFile.get()
		data = sterilizeKeys.bind(this)(
			crypt,
			data,
			'decrypt'
		)
		this.data = data
		return true
	}

	/**
	 * Get field
	 */

	get(key: string) {
		if (key == '') {
			throw new Error(errorMessages.stringError)
		}
		var value: any = null
		if (key.includes('.')) {
			try {
				const paths: Array<string> = key.split('.')
				var curValue: any = this.data[paths[0]]
				for (let index = 1; index < paths.length; index++) {
					curValue = curValue[paths[index]]
				}
				value = curValue
			}
			catch (error) {}
		}
		else {
			if (this.data[key] != null) {
				value = this.data[key]
			}
		}
		return value
	}

	/**
	 * Set field
	 */

	set(key: string, val: any) {
		if (key == '') {
			throw new Error(errorMessages.stringError)
		}
		jsonFile.set(key, this.encryptedFields.includes(key) ? crypt.encrypt(val) : val)
		this.load()
		return true
	}

	/**
	 * Update multiple fields
	 */

	update(data: any) {
		if (Object(data) !== data) {
			throw new Error(errorMessages.objectError)
		}
		for (let key in data) {
			let val: any = data[key]
			jsonFile.set(key, this.encryptedFields.includes(key) ? crypt.encrypt(val) : val)
		}
		this.load()
		return true
	}

	/**
	 * Write: overwrite file
	 */

	write(data: any) {
		if (Object(data) !== data) {
			throw new Error(errorMessages.objectError)
		}
		data = sterilizeKeys.bind(this)(
			crypt,
			JSON.parse(JSON.stringify(data)),
			'encrypt'
		)
		writeFileSync(
			this.fullPath,
			JSON.stringify(
				data,
				null,
				2
			)
		)
		this.load()
		return true
	}

	/**
	 * Clear file
	 */

	clear() {
		return this.write({})
	}

}