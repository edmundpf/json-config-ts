import { StoreArgs } from './types';
/**
 * Store Class
 */
export default class Store {
    name: string;
    collection: string;
    directory?: string;
    basePath: string;
    fullPath: string;
    data: any;
    defaultData: any;
    encryptedFields: Array<string>;
    jsonFile?: any;
    /**
     * Constructor
     */
    constructor(args: StoreArgs);
    /**
     * Init
     */
    private init;
    /**
     * Load data
     */
    load(): boolean;
    /**
     * Get field
     */
    get(key: string): any;
    /**
     * Set field
     */
    set(key: string, val: any): boolean;
    /**
     * Update multiple fields
     */
    update(data: any): boolean;
    /**
     * Write: overwrite file
     */
    write(data: any): boolean;
    /**
     * Clear file
     */
    clear(): boolean;
}
