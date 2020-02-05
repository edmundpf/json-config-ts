"use strict";
/**
 * Sterilize Keys
 */
Object.defineProperty(exports, "__esModule", { value: true });
function sterilizeKeys(crypt = null, data = {}, mode = 'encrypt') {
    for (let key of this.encryptedFields) {
        if (key.includes('.')) {
            try {
                const paths = key.split('.');
                var value = data[paths[0]];
                for (let index = 1; index < paths.length; index++) {
                    if (index != paths.length - 1) {
                        value = value[paths[index]];
                    }
                    else {
                        value[paths[index]] = mode == 'encrypt' ? crypt.encrypt(value[paths[index]]) : crypt.decrypt(value[paths[index]]);
                    }
                }
            }
            catch (error) { }
        }
        else {
            data[key] = mode == 'encrypt' ? crypt.encrypt(data[key]) : crypt.decrypt(data[key]);
        }
    }
    return data;
}
exports.sterilizeKeys = sterilizeKeys;
