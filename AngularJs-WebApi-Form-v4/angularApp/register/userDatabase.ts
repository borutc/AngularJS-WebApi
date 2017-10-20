import Dexie from 'dexie';

export class UserDatabase extends Dexie {
    users: Dexie.Table<IUser, number>;

    constructor() {
        super('MyAppDatabase');
        this.version(1).stores({
            users: '++id, firstName, lastName, address, birthday, created'
        });
    }
}

export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    address: string;
    birthday: Date;
    created?: string;
}
