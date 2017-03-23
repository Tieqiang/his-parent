/**
 * Created by heren on 2017/3/10.
 */

var moduleManageCtrl = hisApp.controller("moduleManageCtrl",['$scope','$http','$state','$uibModal',function($scope,$http,$state,$uibModal){
    //现在所有的模块
    $scope.modules=[] ;

    $scope.currentModule={} ;
    $scope.loadModules = function(){
        //获取所有的列表
        $http.get("api/module/list-all").success(function(data){
            $scope.modules = data ;
            console.log($scope.modules);
        }) ;
    } ;

    $scope.loadModules() ;

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
            $scope.loadModules() ;
        })
    }


    //新增模块
    $scope.addNewModule=function(){
        $scope.currentModule = {} ;
        var modalInstance=$uibModal.open({
            templateUrl:'addNewModule.html',
            controller:"moduleManagerModalInstanceCtrl",
            controllerAs:"$ctrl",
            backdrop:false,
            size:"modal-sm",
            resolve:{
                currentModule:function(){
                    return $scope.currentModule ;
                },
                action:function(){
                    return "新增"
                }
            }
        });

        modalInstance.opened.then(function(){
            //窗口打开时间
        });

        //处理窗口的结果
        modalInstance.result.then(function(result){
            if("cancel"==result){
                return ;
            }else{
                $scope.currentModule = result.$value ;
                $scope.mergeModule() ;
            }
        })

    }


    //编辑模块

    $scope.editModule=function(module){
        $scope.currentModule = module ;
        var modalInstance=$uibModal.open({
            templateUrl:'addNewModule.html',
            controller:"moduleManagerModalInstanceCtrl",
            controllerAs:"$ctrl",
            backdrop:false,
            size:"modal-sm",
            resolve:{
                currentModule:function(){
                    return $scope.currentModule ;
                },
                action:function(){
                    return "编辑"
                }
            }
        });
        //处理窗口的结果
        modalInstance.result.then(function(result){
            if("cancel"==result){
                return ;
            }else{
                $scope.currentModule = result.$value ;
                $scope.mergeModule() ;
            }
        })
    }
}]);

var moduleManagerModalInstanceCtrl = hisApp.controller('moduleManagerModalInstanceCtrl',['$scope','$uibModalInstance','currentModule','action',function($scope,$uibModalInstance,currentModule,action){

    $scope.currentModule = currentModule ;
    $scope.action=action ;

    $scope.closeModule = function(){
        console.log(currentModule);
        $uibModalInstance.dismiss({$value:"cancel"});
    }


    $scope.onOk=function(){
        if(!$scope.currentModule.moduleName){
            parent.layer.alert("模块名称不能为空!",{icon:'2'}) ;
            return ;
        }else{
            $uibModalInstance.close({$value:$scope.currentModule});
        }
    }

}])