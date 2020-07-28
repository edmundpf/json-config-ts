[json-config-ts](../README.md) › [Globals](../globals.md) › ["tests/test"](_tests_test_.md)

# External module: "tests/test"

## Index

### Variables

* [assert](_tests_test_.md#const-assert)
* [should](_tests_test_.md#const-should)

### Functions

* [basePathExists](_tests_test_.md#basepathexists)
* [changeMatch](_tests_test_.md#changematch)
* [dataMatchesDefault](_tests_test_.md#datamatchesdefault)
* [defaultMatchesDefault](_tests_test_.md#defaultmatchesdefault)
* [encryptedFieldsMatch](_tests_test_.md#encryptedfieldsmatch)
* [fullPathExists](_tests_test_.md#fullpathexists)
* [getMatch](_tests_test_.md#getmatch)
* [isCleared](_tests_test_.md#iscleared)
* [recursiveDelete](_tests_test_.md#recursivedelete)

### Object literals

* [complexConfig](_tests_test_.md#const-complexconfig)
* [simpleConfig](_tests_test_.md#const-simpleconfig)
* [testMessages](_tests_test_.md#const-testmessages)

## Variables

### `Const` assert

• **assert**: *AssertStatic* = chai.assert

*Defined in [tests/test.ts:14](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L14)*

___

### `Const` should

• **should**: *Should* = chai.should()

*Defined in [tests/test.ts:13](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L13)*

## Functions

###  basePathExists

▸ **basePathExists**(): *void*

*Defined in [tests/test.ts:82](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L82)*

**Returns:** *void*

___

###  changeMatch

▸ **changeMatch**(`config`: any): *void*

*Defined in [tests/test.ts:106](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | any |

**Returns:** *void*

___

###  dataMatchesDefault

▸ **dataMatchesDefault**(`config`: any): *void*

*Defined in [tests/test.ts:94](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | any |

**Returns:** *void*

___

###  defaultMatchesDefault

▸ **defaultMatchesDefault**(`config`: any): *void*

*Defined in [tests/test.ts:98](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | any |

**Returns:** *void*

___

###  encryptedFieldsMatch

▸ **encryptedFieldsMatch**(`config`: any): *void*

*Defined in [tests/test.ts:90](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | any |

**Returns:** *void*

___

###  fullPathExists

▸ **fullPathExists**(): *void*

*Defined in [tests/test.ts:86](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L86)*

**Returns:** *void*

___

###  getMatch

▸ **getMatch**(`key`: string, `value`: any): *void*

*Defined in [tests/test.ts:102](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*

___

###  isCleared

▸ **isCleared**(): *void*

*Defined in [tests/test.ts:110](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L110)*

**Returns:** *void*

___

###  recursiveDelete

▸ **recursiveDelete**(`path`: string): *void*

*Defined in [tests/test.ts:114](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *void*

## Object literals

### `Const` complexConfig

### ▪ **complexConfig**: *object*

*Defined in [tests/test.ts:36](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L36)*

###  collection

• **collection**: *string* = "data"

*Defined in [tests/test.ts:37](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L37)*

###  encryptedFields

• **encryptedFields**: *string[]* = [
		'password',
		'user.accessToken',
		'user.details.SSN',
	]

*Defined in [tests/test.ts:39](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L39)*

###  name

• **name**: *string* = "credentials"

*Defined in [tests/test.ts:38](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L38)*

▪ **changes**: *object*

*Defined in [tests/test.ts:56](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L56)*

* **name**: *string* = "sally"

* **password**: *string* = "password1"

* **user**: *object*

  * **accessToken**: *string* = "token1"

  * **details**: *object*

    * **SSN**: *string* = "69"

    * **address**: *string* = "69 Drury Lane"

    * **age**: *number* = 9000

▪ **defaultData**: *object*

*Defined in [tests/test.ts:44](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L44)*

* **name**: *string* = "bob"

* **password**: *string* = "password"

* **user**: *object*

  * **accessToken**: *string* = "token"

  * **details**: *object*

    * **SSN**: *string* = "420"

    * **address**: *string* = "69 Drury Lane"

    * **age**: *number* = 9000

___

### `Const` simpleConfig

### ▪ **simpleConfig**: *object*

*Defined in [tests/test.ts:16](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L16)*

###  name

• **name**: *string* = "fruits"

*Defined in [tests/test.ts:17](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L17)*

▪ **changes**: *object*

*Defined in [tests/test.ts:26](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L26)*

* **apples**: *number* = 4

* **oranges**: *number* = 3

* **outOfStock**: *object*

  * **bananas**: *number* = 1

  * **pears**: *number* = 2

▪ **defaultData**: *object*

*Defined in [tests/test.ts:18](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L18)*

* **apples**: *number* = 1

* **oranges**: *number* = 2

* **outOfStock**: *object*

  * **bananas**: *number* = 4

  * **pears**: *number* = 3

___

### `Const` testMessages

### ▪ **testMessages**: *object*

*Defined in [tests/test.ts:70](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L70)*

###  basePath

• **basePath**: *string* = "store.basePath exists"

*Defined in [tests/test.ts:72](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L72)*

###  changeMatch

• **changeMatch**: *string* = "store.data has expected changes"

*Defined in [tests/test.ts:78](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L78)*

###  dataEqualsDefault

• **dataEqualsDefault**: *string* = "store.data equals args.defaultData"

*Defined in [tests/test.ts:74](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L74)*

###  defaultEqualsDefault

• **defaultEqualsDefault**: *string* = "store.defaultData equals args.defaultData"

*Defined in [tests/test.ts:75](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L75)*

###  encryptedFields

• **encryptedFields**: *string* = "store.encryptedFields"

*Defined in [tests/test.ts:76](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L76)*

###  fullPath

• **fullPath**: *string* = "store.fullPath exists"

*Defined in [tests/test.ts:73](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L73)*

###  initialGet

• **initialGet**: *string* = "store.get - initial"

*Defined in [tests/test.ts:77](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L77)*

###  isCleared

• **isCleared**: *string* = "store.data is cleared"

*Defined in [tests/test.ts:79](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L79)*

###  isFunction

• **isFunction**: *string* = "Is function"

*Defined in [tests/test.ts:71](https://github.com/edmundpf/json-config-ts/blob/b8d8c4f/src/tests/test.ts#L71)*
