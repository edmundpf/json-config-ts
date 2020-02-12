# json-config-ts
[![Build Status](https://travis-ci.org/edmundpf/json-config-ts.svg?branch=master)](https://travis-ci.org/edmundpf/json-config-ts)
[![npm version](https://badge.fury.io/js/json-config-ts.svg)](https://badge.fury.io/js/json-config-ts)
> Easy-to-use config storage via JSON with optional base-64 encryption for sensitive data

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

## Specs
* Config store in ```HOMEDIR/.json_config/COLLECTION/NAME.json```
	* Collection is optional

## Params
* **String** ```name```: config name
* **String** ```collection```: collection name (optional folder for json file)
* **Object** ```defaultData```: default data if json file does not exist
* **Array[string]** ```encryptedFields```: fields to be encrypted (in field.name form for nested keys)

## Methods
* **data**
	* returns unencrypted object
* **get(key)**
	* gets value from path
* **set(key, value)**
	* set value for path
* **update(data)**
	* update config with object (preserves object structure and updates nested objects/properties)
* **write(data)**
	* overwrites config with object
* **clear()**
	* clears config and writes empty object

## Documentation
* [Package Docs](docs/globals.md)
