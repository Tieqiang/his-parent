/**
 * Created by heren on 2017/3/9.
 */

//本地路由、ui-grid 、jqwidgets 插件
var hisApp = angular.module("hisApp", ['ui.router', 'LocalStorageModule', 'ui.bootstrap', 'ui.wisoft', 'ui.grid', 'ui.grid.edit',
    , 'ui.grid.autoResize', 'ui.grid.selection','ui.grid.treeView','jqwidgets']);

//配置本地存储
hisApp.config(["localStorageServiceProvider", function (localStorageServiceProvider) {
    //https://github.com/Tieqiang/angular-local-storage
    //localStorage by default . when browser closed the data is remain.
    localStorageServiceProvider.setPrefix("hisApp").setStorageType('sessionStorage').setNotify(true, true);
}])

//配置服务拦截
hisApp.factory('httpInterceptor', ['$q', '$injector','localStorageService','$rootScope', function ($q, $injector,localStorageService,$scope) {
    var httpInterceptor = {
        'responseError': function (response) {
            layer.alert(response.toString(), {
                skin: 'layui-layer-molv',
                shift: 4
            })
            return $q.reject(response);
        },
        'response': function (response) {
            return response;
        },
        'request': function (config) {
            if(config.url=="template/common/login.html"||config.url=="/api/hospital/list-by-status?status=1"){

            }else{
                $scope.loginUser=localStorageService.get("currentUser") ;
                if(!$scope.loginUser.hospitalId){
                    parent.layer.msg("系统提示:获取登陆信息失败") ;
                    location.href="/index.html#/login"
                }
            }
            return config;
        },
        'requestError': function (config) {
            return $q.reject(config);
        }
    }
    return httpInterceptor;
}]).config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
}]);

