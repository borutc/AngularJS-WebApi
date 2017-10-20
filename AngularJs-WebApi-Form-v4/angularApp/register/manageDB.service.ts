import { IUser, UserDatabase } from './userDatabase';

export class ManageDBService {

    userDatabase: any = new UserDatabase();

    constructor() {}

    public addToDatabase(user: IUser, created: string): void {
        this.userDatabase.users.add({
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            birthday: user.birthday,
            created: created
        });
    }

    public retrieveFromDatabase(firstname: string, lastname: string, address: string): Promise<IUser> {
       let user = this.userDatabase.users.where({
            firstName: firstname,
            lastName: lastname,
            address: address
        }).first()
        .catch(error => {
            console.error(error.stack || error);
        });
       return user;
    }
}
