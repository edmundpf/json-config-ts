import { StoreArgs } from './types'
import { homedir } from 'os'
import { resolve } from 'path'
import crypto from 'crypto'

/**
 * Store Class
 */

export default class Store {

	log: boolean
	collection: string
	name: string
	encryptedFields: []
	path: string

	/**
	 * Constructor
	 */

	constructor(args: StoreArgs) {
		const storeArgs: any = {
			log: true,
			collection: '',
			name: '',
			encryptedFields: []
		}
		for (let key in storeArgs) {
			if (args[key] != null) {
				storeArgs[key] = args[key]
			}
		}
		if (storeArgs.name == '') {
			throw new Error('Store name must be a non-empty string')
		}
		this.log = storeArgs.log
		this.collection = storeArgs.collection
		this.name = storeArgs.name
		this.encryptedFields = storeArgs.encryptedFields
		this.path = resolve(`${homedir()}/${this.collection}${this.collection != '' ? '/' : ''}${this.name}`)
	}

	/**
	 * Encrypt
	 */

	private encrypt(value: string) {
		if (typeof value != 'string') {
			throw new TypeError('Value must be a non-empty string')
		}
		const initVector = new Buffer('')


	}

}