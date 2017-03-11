/**
 * Created by heren on 2017/3/10.
 */

var moduleManageCtrl = hisApp.controller("moduleManageCtrl",['$scope','$http','$state','$uibModal',function($scope,$http,$state,$uibModal){
    //现在所有的模块
    $scope.modules=[] ;

    $scope.currentModule={} ;
    //获取所有的列表
    $http.get("api/module/list-all").success(function(data){
        $scope.modules = data ;
        console.log($scope.modules);
    }) ;

    //设置模块的状态
    $scope.changeState = function(module){
        if(module.state==="1"){
            module.state="0";
        }else{
            module.state='1';
        }

        $http.post("/api/module/merge",module).success(function(data){
            parent.layer.alert("设置成功！",{icon:'1'})
        })
    }

    //设置图标
    $scope.changeModuleIcon=function(module){

    }

    //保存图标
    $scope.mergeModule=function(){
        if(!$scope.currentModule.moduleName){
            parent.layer.alert("模块名称不能为空",{icon:'2'});
            return ;
        }
        $scope.currentModule.state="1";
        $http.post("/api/module/merge",$scope.currentModule).success(function(data){
            parent.layer.alert("修改成功！",{icon:'1'})
        })
    }

    $scope.closeModule = function(){

    }

    //新增模块
    $scope.addNewModule=function(){
        $uibModal.open({
            templateUrl:'addNewModule.html',
            controller:"moduleManageCtrl"
        });
    }
}]);

var modalInstanceCtrl = hisApp.controller('modalInstanceCtrl',[''])