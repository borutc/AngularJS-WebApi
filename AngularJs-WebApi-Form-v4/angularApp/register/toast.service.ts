export class ToastService {
    static $inject: string[] = ['$mdToast'];

    constructor(private $mdToast: ng.material.IToastService) { }

    public showToast(message: string, time: number): void {
        this.$mdToast.show(
            this.$mdToast.simple()
                .textContent(message)
                .position('top left')
                .hideDelay(time)
        );
    }
}
