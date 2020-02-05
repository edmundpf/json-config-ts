import Store from '../'
import chai from 'chai'
import { homedir } from 'os'
import { resolve, join } from 'path'
import { storePath } from '../utils/values'
import {
	existsSync,
	statSync,
	unlinkSync,
	readdirSync,
	rmdirSync,
} from 'fs'
const should = chai.should()
const assert = chai.assert

const simpleConfig: any = {
	name: 'fruits',
	defaultData: {
		apples: 1,
		oranges: 2,
		outOfStock: {
			pears: 3,
			bananas: 4
		}
	},
	changes: {
		apples: 4,
		oranges: 3,
		outOfStock: {
			pears: 2,
			bananas: 1
		}
	}
}

const complexConfig: any = {
	collection: 'data',
	name: 'credentials',
	encryptedFields: [
		'password',
		'user.accessToken',
		'user.details.SSN',
	],
	defaultData: {
		name: 'bob',
		password: 'password',
		user: {
			accessToken: 'token',
			details: {
				address: '69 Drury Lane',
				SSN: '420',
				age: 9000,
			}
		}
	},
	changes: {
		name: 'sally',
		password: 'password1',
		user: {
			accessToken: 'token1',
			details: {
				SSN: '69'
			}
		}
	}
}

const testMessages: any = {
	isFunction: 'Is function',
	basePath: 'store.basePath exists',
	fullPath: 'store.fullPath exists',
	dataEqualsDefault: 'store.data equals args.defaultData',
	defaultEqualsDefault: 'store.defaultData equals args.defaultData',
	encryptedFields: 'store.encryptedFields',
	initialGet: 'store.get - initial',
	changeMatch: 'store.data has expected changes',
	isCleared: 'store.data is cleared',
}

function basePathExists() {
	return assert.equal(existsSync(this.store.basePath), true)
}

function fullPathExists() {
	return assert.equal(existsSync(this.store.fullPath), true)
}

function encryptedFieldsMatch(config: any) {
	return assert.equal(JSON.stringify(this.store.encryptedFields), JSON.stringify(config.encryptedFields || []))
}

function dataMatchesDefault(config: any) {
	return assert.equal(JSON.stringify(this.store.data), JSON.stringify(config.defaultData))
}

function defaultMatchesDefault(config: any) {
	return assert.equal(JSON.stringify(this.store.defaultData), JSON.stringify(config.defaultData))
}

function getMatch(key: string, value: any) {
	return assert.equal(this.store.get(key), value)
}

function changeMatch(config: any) {
	return assert.equal(JSON.stringify(this.store.data), JSON.stringify(config.changes))
}

function isCleared() {
	return assert.equal(JSON.stringify(this.store.data), JSON.stringify({}))
}

function recursiveDelete(path: string) {
	const stats: any = statSync(path)
	if (stats.isFile()) {
		unlinkSync(path)
	}
	else {
		const files: Array<string> = readdirSync(path)
		for (let file of files) {
			recursiveDelete(join(path, file))
		}
		rmdirSync(path)
	}
}

/**
 * Store Class
 */

describe('Store Class', () => {
	it(testMessages.isFunction, () => {
		Store.should.be.a('function')
	})
})

/**
 * Simple Config w/ default
 */

describe('Simple Config w/ Default', () => {
	before(() => {
		this.store = new Store({
			name: simpleConfig.name,
			defaultData: simpleConfig.defaultData,
		})
	})
	it(testMessages.basePath, basePathExists.bind(this))
	it(testMessages.fullPath, fullPathExists.bind(this))
	it(testMessages.dataEqualsDefault, dataMatchesDefault.bind(this, simpleConfig))
	it(testMessages.defaultEqualsDefault, defaultMatchesDefault.bind(this, simpleConfig))
	it(testMessages.encryptedFields, encryptedFieldsMatch.bind(this, simpleConfig))
	it(testMessages.initialGet, getMatch.bind(this, 'apples', 1))
	describe('Changes', () => {
		before(() => {
			this.store.set('apples', 4)
			this.store.set('oranges', 3)
			this.store.update({
				outOfStock: {
					pears: 2,
					bananas: 1
				}
			})
		})
		it(testMessages.changeMatch, changeMatch.bind(this,simpleConfig))
	})
	describe('Overwrite', () => {
		before(() => {
			this.store.write(simpleConfig.defaultData)
		})
		it(testMessages.dataEqualsDefault, dataMatchesDefault.bind(this, simpleConfig))
	})
	describe('Clear', () => {
		before(() => {
			this.store.clear()
		})
		it(testMessages.isCleared, isCleared.bind(this))
	})
})

/**
 * Complex Config w/ default
 */

describe('Complex Config w/ Default', () => {
	before(() => {
		this.store = new Store({
			name: complexConfig.name,
			collection: complexConfig.collection,
			defaultData: complexConfig.defaultData,
			encryptedFields: complexConfig.encryptedFields,
		})
	})
	it(testMessages.basePath, basePathExists.bind(this))
	it(testMessages.fullPath, fullPathExists.bind(this))
	it(testMessages.dataEqualsDefault, dataMatchesDefault.bind(this, complexConfig))
	it(testMessages.defaultEqualsDefault, defaultMatchesDefault.bind(this, complexConfig))
	it(testMessages.encryptedFields, encryptedFieldsMatch.bind(this, complexConfig))
	it(testMessages.initialGet, getMatch.bind(this, 'name', 'bob'))
})

/**
 * Cleanup
 */

after(() => {
	recursiveDelete(resolve(`${homedir()}/${storePath}`))
})