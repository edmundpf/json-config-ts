/**
 * Store Args
 */
export interface StoreArgs {
    [index: string]: string | boolean | Array<string> | any | undefined;
    name: string;
    collection?: string;
    directory?: string;
    defaultData?: any;
    encryptedFields?: Array<string>;
}
