import { homedir } from 'os'
import { resolve } from 'path'
import { StoreArgs } from './types'
import { errorMessages } from './values'
import {
	existsSync,
	mkdirSync,
	writeFileSync,
	readFileSync,
} from 'fs'
import Cryptr from 'cryptr'
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
	private formattedData: any

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
		this.defaultData = storeArgs.defaultData
		this.basePath = resolve(`${homedir()}/${this.collection}`)
		this.fullPath = resolve(`${this.basePath}${this.collection != '' ? '/' : ''}${this.name}`)
		this.init()
		crypt = new Cryptr(this.name)
	}

	/**
	 * Init
	 */

	private init() {
		if (!existsSync(this.basePath)) {
			mkdirSync(this.basePath)
		}
		if (!existsSync(this.fullPath)) {
			this.data = this.defaultData
			this.write(this.data)
		}
		else {
			this.load()
		}
	}

	/**
	 * Load
	 */

	private load() {
		this.data = JSON.parse(
			readFileSync(
				this.fullPath,
				'utf8'
			)
		)
	}

	/**
	 * Write
	 */

	write(data: any) {
		if (Object(data) !== data) {
			throw new Error(errorMessages.objectError)
		}
		writeFileSync(
			this.fullPath,
			JSON.stringify(
				data,
				null,
				2
			)
		)
	}

	/**
	 * Get
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


}