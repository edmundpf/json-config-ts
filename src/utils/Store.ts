import { homedir } from 'os'
import { resolve } from 'path'
import { StoreArgs } from './types'
import { sterilizeKeys } from './utils'
import { storePath, errorMessages } from './values'
import { Base64 } from 'js-base64'
import JsonFile from 'edit-json-file'
import {
	existsSync,
	mkdirSync,
	writeFileSync,
} from 'fs'

/**
 * Store Class
 */

export default class Store {

	name: string
	collection: string
	directory?: string
	basePath: string
	fullPath: string
	data: any
	defaultData: any
	encryptedFields: Array<string>
	jsonFile?: any

	/**
	 * Constructor
	 */

	constructor(args: StoreArgs) {
		const storeArgs: any = {
			collection: '',
			name: '',
			directory: undefined,
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
		this.directory = storeArgs.directory
		this.encryptedFields = storeArgs.encryptedFields
		this.defaultData = JSON.parse(JSON.stringify(storeArgs.defaultData))
		const storeDir = this.directory ? this.directory : homedir()
		this.basePath = resolve(`${storeDir}/${storePath}/${this.collection}`)
		this.fullPath = resolve(`${this.basePath}/${this.collection != '' ? '/' : ''}${this.name}.json`)
		this.init()
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
		this.jsonFile = JsonFile(
			this.fullPath,
			{
				autosave: true
			}
		)
		var data: any = this.jsonFile.read()
		data = sterilizeKeys.bind(this)(
			Base64,
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
		this.jsonFile.set(key, this.encryptedFields.includes(key) ? Base64.encode(val) : val)
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
		const curData: any = JSON.parse(JSON.stringify(this.data))
		const recursiveUpdate: Function = (curData, data) => {
			for (let key in data) {
				if (Object(data[key]) !== data[key]) {
					curData[key] = data[key]
				}
				else {
					recursiveUpdate(curData[key], data[key])
				}
			}
		}
		recursiveUpdate(curData, data)
		this.write(curData)
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
			Base64,
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