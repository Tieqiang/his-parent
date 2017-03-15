/**
 * Created by heren on 2017-03-15.
 */

var hospitalInfoCtrl = hisApp.controller('hospitalInfoCtrl',['$scope','$http','$state','localStorageService',function($scope,$http,$state,localStorageService){
    $scope.loginUser = localStorageService.get("currentUser");
    if(!$scope.loginUser.hospitalId){
        parent.layer.alert("系统提示:获取登陆信息失败",{icon:'2'});
        $state.go("login")
    }

    $scope.currentHospital = {} ;

    $scope.getCurrentHospital = function(){
        $http.get("/api/hospital/get-by-id?id="+$scope.loginUser.hospitalId).success(function(data){
            $scope.currentHospital = data ;
        })
    }

    $scope.getCurrentHospital();

    $scope.mergeHospital=function(){
        var hop =$scope.currentHospital ;
        if(hop.id){
            var data ={} ;
            data.id=hop.id;
            data.hospitalName=hop.hospitalName;
            data.organizationCode = hop.organizationCode ;
            data.zipCode = hop.zipCode ;
            data.address = hop.address ;
            data.contactPerson = hop.contactPerson;
            data.contactPhone = hop.contactPerson;
            data.hospitalStatus = hop.hospitalStatus ;
            $http.post("/api/hospital/merge",data).success(function(data){
                parent.layer.alert("系统提示：保存成功",{icon:'1'});
            })
        }

    }


}]);