/**
 * Store Args
 */
export interface StoreArgs {
    [index: string]: string | boolean | Array<string> | undefined;
    log?: boolean;
    collection?: string;
    name?: string;
    encryptedFields?: Array<string>;
}
