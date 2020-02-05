"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const path_1 = require("path");
/**
 * Store Class
 */
class Store {
    /**
     * Constructor
     */
    constructor(args) {
        const storeArgs = {
            log: true,
            collection: '',
            name: '',
            encryptedFields: []
        };
        for (let key in storeArgs) {
            if (args[key] != null) {
                storeArgs[key] = args[key];
            }
        }
        if (storeArgs.name == '') {
            throw new Error('Store name must be a non-empty string');
        }
        this.log = storeArgs.log;
        this.collection = storeArgs.collection;
        this.name = storeArgs.name;
        this.encryptedFields = storeArgs.encryptedFields;
        this.path = path_1.resolve(`${os_1.homedir()}/${this.collection}${this.collection != '' ? '/' : ''}${this.name}`);
    }
    /**
     * Encrypt
     */
    encrypt(value) {
        if (typeof value != 'string') {
            throw new TypeError('Value must be a non-empty string');
        }
        const initVector = new Buffer('');
    }
}
exports.default = Store;
