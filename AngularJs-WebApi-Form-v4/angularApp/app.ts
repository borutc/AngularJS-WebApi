import { module, element, bootstrap } from 'angular';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import Dexie from 'dexie';
import { DateService } from './register/date.service';
import { ManageDBService } from './register/manageDB.service';
import { ToastService } from './register/toast.service';
import { BackgroundService } from './background.service';
import { DataService } from './register/data.service';
import './app.less';

export let app = module('app', [
    'ui.router',
    'ngMessages',
    'ngMaterial',
    'ngAria',
    'ngAnimate'
])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        ($stateProvider: ng.ui.IStateProvider,
         $urlRouterProvider: ng.ui.IUrlRouterProvider,
         $locationProvider: ng.ILocationProvider) => {

        $stateProvider
            .state({
            name: 'app',
            url: '/app',
            component: 'app'
            })
            .state({
                name: 'app.register',
                url: '/register',
                component: 'register'
            });
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/app');
        //

    }])
    .component('app', new AppComponent())
    .component('register', new RegisterComponent())
    .service('DateService', DateService)
    .service('ManageDBService', ManageDBService)
    .service('ToastService', ToastService)
    .service('BackgroundService', BackgroundService)
    .service('DataService', DataService)
    .constant('dexie', `window.Dexie`);

element(document).ready( () => {
    bootstrap(document, ['app']);
});
