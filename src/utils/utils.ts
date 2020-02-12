/**
 * Sterilize Keys
 */

export function sterilizeKeys(Base64: any = null, data: any = {}, mode: string = 'encrypt') {
	for (let key of this.encryptedFields) {
		if (key.includes('.')) {
			try {
				const paths: Array<string> = key.split('.')
				var value: any = data[paths[0]]
				for (let index = 1; index < paths.length; index++) {
					if (index != paths.length - 1) {
						value = value[paths[index]]
					}
					else {
						if (value[paths[index]] != null) {
							value[paths[index]] = mode == 'encrypt' ? Base64.encode(value[paths[index]]) : Base64.decode(value[paths[index]])
						}
					}
				}
			}
			catch (error) {}
		}
		else {
			if (data[key] != null) {
				data[key] = mode == 'encrypt' ? Base64.encode(data[key]) : Base64.decode(data[key])
			}
		}
	}
	return data
}