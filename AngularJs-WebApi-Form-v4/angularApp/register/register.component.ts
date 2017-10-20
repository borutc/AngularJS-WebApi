import { DateService, DayOfWeek } from './date.service';
import { ToastService } from './toast.service';
import { ManageDBService } from './manageDB.service';
import { BackgroundService } from '../background.service';
import { IUser } from './userDatabase';
import { DataService } from './data.service';

class RegisterController implements ng.IController {
    static $inject: string[] = ['DateService', 'ToastService', 'ManageDBService', 'BackgroundService', 'DataService', '$state'];
    private userForm: ng.IFormController;
    private message: string;
    private form: IUser;
    private created: string = new Date().toDateString();

    constructor(
        private dateService: DateService,
        private toastService: ToastService,
        private manageDBService: ManageDBService,
        private backgroundService: BackgroundService,
        private dataService: DataService,
        private $state: ng.ui.IStateService
    ) { }

    submit(): void {

        if (this.dateService.calculateYear(this.form.birthday) >= 21) {

            if(this.dateService.isDayOfWeek(new Date(this.form.birthday), DayOfWeek.Friday)) {
                this.backgroundService.background.next('green');
            } else {
                this.backgroundService.background.next('');
            }

            this.manageDBService.addToDatabase(this.form, this.created);

            this.manageDBService.retrieveFromDatabase(
                this.form.firstName,
                this.form.lastName,
                this.form.address
            ).then((data: IUser) => {
                this.message = 'Hello, ' + data.lastName + ' ' + data.firstName + ' !';
                this.toastService.showToast(this.message, 5000);
                });

            this.form.created = this.created;
            this.dataService.insertUser(this.form);

        } else {
            this.toastService.showToast('Users age < 21. Data not saved into the database.', 5000);
        }
        //reset form
        this.form = null;
        this.userForm.$setUntouched();
        this.userForm.$setPristine();

    }
}

export class RegisterComponent implements ng.IComponentOptions {
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = RegisterController;
        this.templateUrl = require('./register.html');
    }
}
