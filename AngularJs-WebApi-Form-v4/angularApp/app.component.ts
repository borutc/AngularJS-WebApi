
import { BackgroundService } from './background.service';

class AppController implements ng.IController {
      static $inject: string[] = ['$state', 'BackgroundService'];
      private bgColor: string = '';

    constructor(private $state: ng.ui.IStateService, private backgroundService: BackgroundService) {
        $state.go('app.register');
    }

    $onInit(): any {
        this.backgroundService.background.subscribe(
            (color: string) => {
                this.bgColor = color;
            }
        );
    }
}

export class AppComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    templateUrl: string;
    constructor() {
       this.controller = AppController;
       this.templateUrl = require('./app.component.html');
    }
}
