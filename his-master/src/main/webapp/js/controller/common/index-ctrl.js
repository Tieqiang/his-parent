/**
 * Created by heren on 2017/3/9.
 */

var indexCtrl = hisApp.controller('indexCtrl', ['$scope', '$rootScope','localStorageService', function ($scope, $rootScope,localStorageService) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options){
        if(!localStorageService.get("currentUser")){
        }
    })
}])