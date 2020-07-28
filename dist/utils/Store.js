"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const path_1 = require("path");
const utils_1 = require("./utils");
const values_1 = require("./values");
const js_base64_1 = require("js-base64");
const edit_json_file_1 = __importDefault(require("edit-json-file"));
const fs_1 = require("fs");
/**
 * Store Class
 */
class Store {
    /**
     * Constructor
     */
    constructor(args) {
        const storeArgs = {
            collection: '',
            name: '',
            directory: undefined,
            defaultData: {},
            encryptedFields: [],
        };
        for (let key in storeArgs) {
            if (args[key] != null) {
                storeArgs[key] = args[key];
            }
        }
        if (storeArgs.name == '') {
            throw new Error(values_1.errorMessages.nameError);
        }
        this.collection = storeArgs.collection;
        this.name = storeArgs.name;
        this.directory = storeArgs.directory;
        this.encryptedFields = storeArgs.encryptedFields;
        this.defaultData = JSON.parse(JSON.stringify(storeArgs.defaultData));
        const storeDir = this.directory ? this.directory : os_1.homedir();
        this.basePath = path_1.resolve(`${storeDir}/${values_1.storePath}/${this.collection}`);
        this.fullPath = path_1.resolve(`${this.basePath}/${this.collection != '' ? '/' : ''}${this.name}.json`);
        this.init();
    }
    /**
     * Init
     */
    init() {
        if (!fs_1.existsSync(this.basePath)) {
            fs_1.mkdirSync(this.basePath, { recursive: true });
        }
        if (!fs_1.existsSync(this.fullPath)) {
            this.write(this.defaultData);
        }
        this.load();
        return true;
    }
    /**
     * Load data
     */
    load() {
        this.jsonFile = edit_json_file_1.default(this.fullPath, {
            autosave: true
        });
        var data = this.jsonFile.read();
        data = utils_1.sterilizeKeys.bind(this)(js_base64_1.Base64, data, 'decrypt');
        this.data = data;
        return true;
    }
    /**
     * Get field
     */
    get(key) {
        if (key == '') {
            throw new Error(values_1.errorMessages.stringError);
        }
        var value = null;
        if (key.includes('.')) {
            try {
                const paths = key.split('.');
                var curValue = this.data[paths[0]];
                for (let index = 1; index < paths.length; index++) {
                    curValue = curValue[paths[index]];
                }
                value = curValue;
            }
            catch (error) { }
        }
        else {
            if (this.data[key] != null) {
                value = this.data[key];
            }
        }
        return value;
    }
    /**
     * Set field
     */
    set(key, val) {
        if (key == '') {
            throw new Error(values_1.errorMessages.stringError);
        }
        this.jsonFile.set(key, this.encryptedFields.includes(key) ? js_base64_1.Base64.encode(val) : val);
        this.load();
        return true;
    }
    /**
     * Update multiple fields
     */
    update(data) {
        if (Object(data) !== data) {
            throw new Error(values_1.errorMessages.objectError);
        }
        const curData = JSON.parse(JSON.stringify(this.data));
        const recursiveUpdate = (curData, data) => {
            for (let key in data) {
                if (Object(data[key]) !== data[key]) {
                    curData[key] = data[key];
                }
                else {
                    recursiveUpdate(curData[key], data[key]);
                }
            }
        };
        recursiveUpdate(curData, data);
        this.write(curData);
        this.load();
        return true;
    }
    /**
     * Write: overwrite file
     */
    write(data) {
        if (Object(data) !== data) {
            throw new Error(values_1.errorMessages.objectError);
        }
        data = utils_1.sterilizeKeys.bind(this)(js_base64_1.Base64, JSON.parse(JSON.stringify(data)), 'encrypt');
        fs_1.writeFileSync(this.fullPath, JSON.stringify(data, null, 2));
        this.load();
        return true;
    }
    /**
     * Clear file
     */
    clear() {
        return this.write({});
    }
}
exports.default = Store;
