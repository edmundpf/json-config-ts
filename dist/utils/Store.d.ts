import { StoreArgs } from './types';
/**
 * Store Class
 */
export default class Store {
    name: string;
    collection: string;
    basePath: string;
    fullPath: string;
    data: any;
    defaultData: any;
    encryptedFields: Array<string>;
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
    private load;
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
