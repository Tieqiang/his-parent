/**
 * Created by heren on 2017/3/9.
 */

var loginCtrl = hisApp.controller("loginCtrl",['$scope','$http','$stateParams','$state',
    'localStorageService',function($scope,$http,$stateParams,$state,localStorageService){
    $scope.login=function(){
        //登陆成功后，存储登陆信息
        localStorageService.set("currentUser",'zhangsan');
        $state.go("login.systemList");
    }
}])