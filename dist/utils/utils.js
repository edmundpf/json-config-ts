"use strict";
/**
 * Sterilize Keys
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sterilizeKeys = void 0;
function sterilizeKeys(Base64 = null, data = {}, mode = 'encrypt') {
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
                        if (value[paths[index]] != null) {
                            value[paths[index]] = mode == 'encrypt' ? Base64.encode(value[paths[index]]) : Base64.decode(value[paths[index]]);
                        }
                    }
                }
            }
            catch (error) { }
        }
        else {
            if (data[key] != null) {
                data[key] = mode == 'encrypt' ? Base64.encode(data[key]) : Base64.decode(data[key]);
            }
        }
    }
    return data;
}
exports.sterilizeKeys = sterilizeKeys;
