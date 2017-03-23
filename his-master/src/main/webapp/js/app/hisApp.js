/**
 * Created by heren on 2017/3/9.
 */

var hisApp = angular.module("hisApp", ['ui.router', 'LocalStorageModule', 'ui.bootstrap', 'ui.wisoft', 'ui.grid', 'ui.grid.edit',
    , 'ui.grid.autoResize', 'ui.grid.selection']);

hisApp.config(["localStorageServiceProvider", function (localStorageServiceProvider) {
    //https://github.com/Tieqiang/angular-local-storage
    //localStorage by default . when browser closed the data is remain.
    localStorageServiceProvider.setPrefix("hisApp").setStorageType('sessionStorage').setNotify(true, true);
}])


hisApp.factory('httpInterceptor', ['$q', '$injector', function ($q, $injector) {
    var httpInterceptor = {
        'responseError': function (response) {
            layer.alert(response.toString(), {
                skin: 'layui-layer-molv',
                shift: 4
            })
            return $q.reject(response);
        },
        'response': function (response) {
            console.log("response")
            return response;
        },
        'request': function (config) {
            console.log("config")
            return config;
        },
        'requestError': function (config) {
            console.log("requestError")
            return $q.reject(config);
        }
    }
    return httpInterceptor;
}]).config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
}]);