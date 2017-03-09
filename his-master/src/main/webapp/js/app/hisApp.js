/**
 * Created by heren on 2017/3/9.
 */

var hisApp = angular.module("hisApp",['ui.router','LocalStorageModule']) ;

hisApp.config(["localStorageServiceProvider",function(localStorageServiceProvider){
    //https://github.com/Tieqiang/angular-local-storage
    //localStorage by default . when browser closed the data is remain.
    localStorageServiceProvider.setPrefix("hisApp").setStorageType('sessionStorage').setNotify(true,true);
}])
