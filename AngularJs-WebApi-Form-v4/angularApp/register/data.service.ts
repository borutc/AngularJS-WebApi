import { IUser } from './userDatabase';

export class DataService {
    static $inject: string[] = ['$http'];
    private urlBase: string = '/api/values';
    constructor(private $http: ng.IHttpService) { }

    public insertUser(user: IUser): any {
        return this.$http.post(this.urlBase, user);
    }

}
