/**
 * Created by heren on 2017-03-15.
 */

var sysHospitalCtrl = hisApp.controller('sysHospitalCtrl',['$scope','$http','$uibModal',function($scope,$http,$uibModal){
    $scope.currentHospital={} ;

    $scope.hospitals = [] ;//所有医院
    //设置当前医院
    $scope.setCurrentHospital = function(item){
        $scope.currentHospital =item ;
    }
    //加载医院
    $scope.loadHospitals = function(){
        $http.get("/api/hospital/list-all").success(function(data){
            $scope.hospitals = data ;
        });
    }
    $scope.loadHospitals();
    //打开编辑框
    $scope.openHospitalModule=function(action){
        var modalInstance = $uibModal.open({
            templateUrl:"editHospital.html",
            controller:"modalInstanceCtrl",
            backdrop:false,
            size:"modal-sm",
            resolve:{
                action:function(){
                    return action;
                },
                currentHospital:function(){
                    return $scope.currentHospital;
                }
            }
        }) ;
        modalInstance.result.then(function(data){
            if(data){
                $scope.mergeHospital(data);
            }else{
                parent.layer.alert("系统提示：填写数据有问题，不能进行保存！",{icon:'2'});
            }
        })
    }
    $scope.mergeHospital=function(hop){
        if(hop){
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
                $scope.loadHospitals();
            })
        }

    }
    //添加医院
    $scope.$on("addHospitalEvent",function(){
        $scope.currentHospital = {} ;
        $scope.openHospitalModule("添加医院")
    })
    //编辑医院
    $scope.$on("editHospitalEvent",function(){
        $scope.openHospitalModule("编辑医院")
    })
}]);

var modalInstanceCtrl = hisApp.controller("modalInstanceCtrl",['$scope','action','currentHospital','$uibModalInstance',function($scope,action,currentHospital,$uibModalInstance){
    $scope.currentHospital = currentHospital ;
    $scope.action = action ;

    $scope.doOk=function(){
        if(!$scope.currentHospital.id&&!$scope.currentHospital.hospitalName){
            parent.layer.alert("系统提示，新添加医院名称不能为空")
            return ;
        }
        $uibModalInstance.close($scope.currentHospital);
    }
    $scope.cancel=function(){
        $uibModalInstance.dismiss();
    }
}])