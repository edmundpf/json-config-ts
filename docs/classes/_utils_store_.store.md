[json-config-ts](../README.md) › [Globals](../globals.md) › ["utils/Store"](../modules/_utils_store_.md) › [Store](_utils_store_.store.md)

# Class: Store

Store Class

## Hierarchy

* **Store**

## Index

### Constructors

* [constructor](_utils_store_.store.md#constructor)

### Properties

* [basePath](_utils_store_.store.md#basepath)
* [collection](_utils_store_.store.md#collection)
* [data](_utils_store_.store.md#data)
* [defaultData](_utils_store_.store.md#defaultdata)
* [directory](_utils_store_.store.md#optional-directory)
* [encryptedFields](_utils_store_.store.md#encryptedfields)
* [fullPath](_utils_store_.store.md#fullpath)
* [jsonFile](_utils_store_.store.md#optional-jsonfile)
* [name](_utils_store_.store.md#name)

### Methods

* [clear](_utils_store_.store.md#clear)
* [get](_utils_store_.store.md#get)
* [init](_utils_store_.store.md#private-init)
* [load](_utils_store_.store.md#load)
* [set](_utils_store_.store.md#set)
* [update](_utils_store_.store.md#update)
* [write](_utils_store_.store.md#write)

## Constructors

###  constructor

\+ **new Store**(`args`: [StoreArgs](../interfaces/_utils_types_.storeargs.md)): *[Store](_utils_store_.store.md)*

*Defined in [utils/Store.ts:28](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L28)*

Constructor

**Parameters:**

Name | Type |
------ | ------ |
`args` | [StoreArgs](../interfaces/_utils_types_.storeargs.md) |

**Returns:** *[Store](_utils_store_.store.md)*

## Properties

###  basePath

• **basePath**: *string*

*Defined in [utils/Store.ts:23](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L23)*

___

###  collection

• **collection**: *string*

*Defined in [utils/Store.ts:21](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L21)*

___

###  data

• **data**: *any*

*Defined in [utils/Store.ts:25](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L25)*

___

###  defaultData

• **defaultData**: *any*

*Defined in [utils/Store.ts:26](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L26)*

___

### `Optional` directory

• **directory**? : *undefined | string*

*Defined in [utils/Store.ts:22](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L22)*

___

###  encryptedFields

• **encryptedFields**: *Array‹string›*

*Defined in [utils/Store.ts:27](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L27)*

___

###  fullPath

• **fullPath**: *string*

*Defined in [utils/Store.ts:24](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L24)*

___

### `Optional` jsonFile

• **jsonFile**? : *any*

*Defined in [utils/Store.ts:28](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L28)*

___

###  name

• **name**: *string*

*Defined in [utils/Store.ts:20](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L20)*

## Methods

###  clear

▸ **clear**(): *boolean*

*Defined in [utils/Store.ts:197](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L197)*

Clear file

**Returns:** *boolean*

___

###  get

▸ **get**(`key`: string): *any*

*Defined in [utils/Store.ts:106](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L106)*

Get field

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *any*

___

### `Private` init

▸ **init**(): *boolean*

*Defined in [utils/Store.ts:65](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L65)*

Init

**Returns:** *boolean*

___

###  load

▸ **load**(): *boolean*

*Defined in [utils/Store.ts:83](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L83)*

Load data

**Returns:** *boolean*

___

###  set

▸ **set**(`key`: string, `val`: any): *boolean*

*Defined in [utils/Store.ts:134](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L134)*

Set field

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`val` | any |

**Returns:** *boolean*

___

###  update

▸ **update**(`data`: any): *boolean*

*Defined in [utils/Store.ts:147](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L147)*

Update multiple fields

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *boolean*

___

###  write

▸ **write**(`data`: any): *boolean*

*Defined in [utils/Store.ts:172](https://github.com/edmundpf/json-config-ts/blob/dccc405/src/utils/Store.ts#L172)*

Write: overwrite file

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *boolean*
