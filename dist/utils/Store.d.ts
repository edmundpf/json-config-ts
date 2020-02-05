import { StoreArgs } from './types';
/**
 * Store Class
 */
export default class Store {
    log: boolean;
    collection: string;
    name: string;
    encryptedFields: [];
    path: string;
    /**
     * Constructor
     */
    constructor(args: StoreArgs);
    /**
     * Encrypt
     */
    private encrypt;
}
