/**
 * Created by heren on 2017/3/9.
 */

var systemListCtrl=hisApp.controller("systemListCtrl",['$scope','$http','$state','localStorageService',function($scope,$http,$state,localStorageService){

    $scope.modules =[] ;

    //获取
    $http.get("/api/module/list-all").success(function(data){
        console.log(data);
        $scope.modules = data ;
    });

    //点击模块进入系统
    $scope.enterModule=function(module){
        localStorageService.set("module",module);
        $state.go("index.moduleSystem")
    }


}])