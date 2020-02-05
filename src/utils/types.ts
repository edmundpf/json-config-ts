/**
 * Store Args
 */

export interface StoreArgs {
	[index: string]: string | boolean | Array<string> | any | undefined,
	collection?: string,
	name?: string,
	defaultData?: any,
	encryptedFields?: Array<string>,
}