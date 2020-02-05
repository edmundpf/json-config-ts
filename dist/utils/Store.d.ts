import { StoreArgs } from './types';
/**
 * Store Class
 */
export default class Store {
    collection: string;
    name: string;
    data: any;
    defaultData: any;
    encryptedFields: Array<string>;
    basePath: string;
    fullPath: string;
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
