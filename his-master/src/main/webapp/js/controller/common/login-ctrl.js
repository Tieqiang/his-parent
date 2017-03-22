/**
 * Created by heren on 2017/3/9.
 */

var loginCtrl = hisApp.controller("loginCtrl",['$scope','$http','$stateParams','$state', 'localStorageService',function($scope,$http,$stateParams,$state,localStorageService){
    $scope.login=function(){
        //登陆成功后，存储登陆信息
        localStorageService.set("currentUser",$scope.loginUser);
        $state.go("login.systemList");
    }


    $scope.loginUser={} ;
    $scope.myHospitals = [] ;

    $scope.getHospitalByUserName = function(userName){
        //此处要根据新的接口修改
        $http.get("/api/hospital/list-by-status?status=1").success(function(data){
            $scope.myHospitals = data ;
        })
    }

    $scope.$watch('loginUser.userName',function(newValue){

        $scope.getHospitalByUserName(newValue) ;

    })


}])