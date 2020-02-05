# json-config-ts
> Easy-to-use config storage via JSON with optional aes-256-gcm encryption for sensitive data

## Install
``` bash
$ npm i -S json-config-ts
```

## Usage
``` javascript
const Store = require('json-config-ts')
const store = new Store({
	collection: 'foods',
	name: 'fruits',
	encryptedFields: ['creds.password'],
	defaultData: {
		apples: 2,
		oranges: 5,
		creds: {
			username: 'admin',
			password: 'password'
		}
	}
})
```

## Documentation
* [Package Docs](docs/globals.md)
