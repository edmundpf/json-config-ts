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
* [encryptedFields](_utils_store_.store.md#encryptedfields)
* [fullPath](_utils_store_.store.md#fullpath)
* [name](_utils_store_.store.md#name)

### Methods

* [clear](_utils_store_.store.md#clear)
* [get](_utils_store_.store.md#get)
* [init](_utils_store_.store.md#private-init)
* [load](_utils_store_.store.md#private-load)
* [set](_utils_store_.store.md#set)
* [update](_utils_store_.store.md#update)
* [write](_utils_store_.store.md#write)

## Constructors

###  constructor

\+ **new Store**(`args`: [StoreArgs](../interfaces/_utils_types_.storeargs.md)): *[Store](_utils_store_.store.md)*

*Defined in [utils/Store.ts:27](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L27)*

Constructor

**Parameters:**

Name | Type |
------ | ------ |
`args` | [StoreArgs](../interfaces/_utils_types_.storeargs.md) |

**Returns:** *[Store](_utils_store_.store.md)*

## Properties

###  basePath

• **basePath**: *string*

*Defined in [utils/Store.ts:23](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L23)*

___

###  collection

• **collection**: *string*

*Defined in [utils/Store.ts:22](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L22)*

___

###  data

• **data**: *any*

*Defined in [utils/Store.ts:25](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L25)*

___

###  defaultData

• **defaultData**: *any*

*Defined in [utils/Store.ts:26](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L26)*

___

###  encryptedFields

• **encryptedFields**: *Array‹string›*

*Defined in [utils/Store.ts:27](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L27)*

___

###  fullPath

• **fullPath**: *string*

*Defined in [utils/Store.ts:24](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L24)*

___

###  name

• **name**: *string*

*Defined in [utils/Store.ts:21](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L21)*

## Methods

###  clear

▸ **clear**(): *boolean*

*Defined in [utils/Store.ts:191](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L191)*

Clear file

**Returns:** *boolean*

___

###  get

▸ **get**(`key`: string): *any*

*Defined in [utils/Store.ts:100](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L100)*

Get field

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *any*

___

### `Private` init

▸ **init**(): *boolean*

*Defined in [utils/Store.ts:61](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L61)*

Init

**Returns:** *boolean*

___

### `Private` load

▸ **load**(): *boolean*

*Defined in [utils/Store.ts:79](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L79)*

Load data

**Returns:** *boolean*

___

###  set

▸ **set**(`key`: string, `val`: any): *boolean*

*Defined in [utils/Store.ts:128](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L128)*

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

*Defined in [utils/Store.ts:141](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L141)*

Update multiple fields

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *boolean*

___

###  write

▸ **write**(`data`: any): *boolean*

*Defined in [utils/Store.ts:166](https://github.com/edmundpf/json-config-ts/blob/e425dc3/src/utils/Store.ts#L166)*

Write: overwrite file

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *boolean*
