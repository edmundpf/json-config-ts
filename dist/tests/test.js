"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require("../"));
const chai_1 = __importDefault(require("chai"));
const os_1 = require("os");
const path_1 = require("path");
const values_1 = require("../utils/values");
const fs_1 = require("fs");
const should = chai_1.default.should();
const assert = chai_1.default.assert;
const simpleConfig = {
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
};
const complexConfig = {
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
                address: '69 Drury Lane',
                SSN: '69',
                age: 9000,
            }
        }
    }
};
const testMessages = {
    isFunction: 'Is function',
    basePath: 'store.basePath exists',
    fullPath: 'store.fullPath exists',
    dataEqualsDefault: 'store.data equals args.defaultData',
    defaultEqualsDefault: 'store.defaultData equals args.defaultData',
    encryptedFields: 'store.encryptedFields',
    initialGet: 'store.get - initial',
    changeMatch: 'store.data has expected changes',
    isCleared: 'store.data is cleared',
};
function basePathExists() {
    return assert.equal(fs_1.existsSync(this.store.basePath), true);
}
function fullPathExists() {
    return assert.equal(fs_1.existsSync(this.store.fullPath), true);
}
function encryptedFieldsMatch(config) {
    return assert.equal(JSON.stringify(this.store.encryptedFields), JSON.stringify(config.encryptedFields || []));
}
function dataMatchesDefault(config) {
    return assert.equal(JSON.stringify(this.store.data), JSON.stringify(config.defaultData));
}
function defaultMatchesDefault(config) {
    return assert.equal(JSON.stringify(this.store.defaultData), JSON.stringify(config.defaultData));
}
function getMatch(key, value) {
    return assert.equal(this.store.get(key), value);
}
function changeMatch(config) {
    return assert.equal(JSON.stringify(this.store.data), JSON.stringify(config.changes));
}
function isCleared() {
    return assert.equal(JSON.stringify(this.store.data), JSON.stringify({}));
}
function recursiveDelete(path) {
    const stats = fs_1.statSync(path);
    if (stats.isFile()) {
        fs_1.unlinkSync(path);
    }
    else {
        const files = fs_1.readdirSync(path);
        for (let file of files) {
            recursiveDelete(path_1.join(path, file));
        }
        fs_1.rmdirSync(path);
    }
}
/**
 * Store Class
 */
describe('Store Class', () => {
    it(testMessages.isFunction, () => {
        __1.default.should.be.a('function');
    });
});
/**
 * Simple Config w/ default
 */
describe('Simple Config w/ Default', () => {
    before(() => {
        this.store = new __1.default({
            name: simpleConfig.name,
            defaultData: simpleConfig.defaultData,
        });
    });
    it(testMessages.basePath, basePathExists.bind(this));
    it(testMessages.fullPath, fullPathExists.bind(this));
    it(testMessages.dataEqualsDefault, dataMatchesDefault.bind(this, simpleConfig));
    it(testMessages.defaultEqualsDefault, defaultMatchesDefault.bind(this, simpleConfig));
    it(testMessages.encryptedFields, encryptedFieldsMatch.bind(this, simpleConfig));
    it(testMessages.initialGet, getMatch.bind(this, 'apples', 1));
    it(testMessages.initialGet, getMatch.bind(this, 'outOfStock.pears', 3));
    describe('Changes', () => {
        before(() => {
            this.store.set('apples', 4);
            this.store.set('oranges', 3);
            this.store.set('outOfStock.pears', 2);
            this.store.update({
                outOfStock: {
                    bananas: 1
                }
            });
        });
        it(testMessages.changeMatch, changeMatch.bind(this, simpleConfig));
    });
    describe('Overwrite', () => {
        before(() => {
            this.store.write(simpleConfig.defaultData);
        });
        it(testMessages.dataEqualsDefault, dataMatchesDefault.bind(this, simpleConfig));
    });
    describe('Clear', () => {
        before(() => {
            this.store.clear();
        });
        it(testMessages.isCleared, isCleared.bind(this));
    });
});
/**
 * Complex Config w/ default
 */
describe('Complex Config w/ Default', () => {
    before(() => {
        this.store = new __1.default({
            name: complexConfig.name,
            collection: complexConfig.collection,
            defaultData: complexConfig.defaultData,
            encryptedFields: complexConfig.encryptedFields,
        });
    });
    it(testMessages.basePath, basePathExists.bind(this));
    it(testMessages.fullPath, fullPathExists.bind(this));
    it(testMessages.dataEqualsDefault, dataMatchesDefault.bind(this, complexConfig));
    it(testMessages.defaultEqualsDefault, defaultMatchesDefault.bind(this, complexConfig));
    it(testMessages.encryptedFields, encryptedFieldsMatch.bind(this, complexConfig));
    it(testMessages.initialGet, getMatch.bind(this, 'name', 'bob'));
    it(testMessages.initialGet, getMatch.bind(this, 'user.details.age', 9000));
    describe('Changes', () => {
        before(() => {
            this.store.set('name', 'sally');
            this.store.set('password', 'password1');
            this.store.set('user.accessToken', 'token1');
            this.store.update({
                user: {
                    details: {
                        SSN: '69',
                    }
                }
            });
        });
        it(testMessages.changeMatch, changeMatch.bind(this, complexConfig));
    });
    describe('Load', () => {
        before(() => {
            this.store.load();
        });
        it(testMessages.dataEqualsDefault, changeMatch.bind(this, complexConfig));
    });
    describe('Overwrite', () => {
        before(() => {
            this.store.write(complexConfig.defaultData);
        });
        it(testMessages.dataEqualsDefault, dataMatchesDefault.bind(this, complexConfig));
    });
    describe('Clear', () => {
        before(() => {
            this.store.clear();
        });
        it(testMessages.isCleared, isCleared.bind(this));
    });
});
/**
 * Cleanup
 */
after(() => {
    recursiveDelete(path_1.resolve(`${os_1.homedir()}/${values_1.storePath}`));
});
