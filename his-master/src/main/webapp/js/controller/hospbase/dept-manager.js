/**
 * Created by heren on 2017-03-16.
 */


var deptManagerCtrl = hisApp.controller('deptManagerCtrl',['$scope','$http','localStorageService','$state','$uibModal','ToolsService',function($scope,$http,localStorageService,$state,$uibModal,ToolsService){


    $scope.depts=[] ;//该医院的科室信息
    $scope.deptData=[] ;
    $scope.currentDept=undefined;

    $scope.dgHeight = 530;

    $scope.loginUser=localStorageService.get("currentUser") ;
    if(!$scope.loginUser.hospitalId){
        parent.layer.alert("系统提示:获取登陆信息失败",{icon:2}) ;
        $state.go("login");
    }

    //设置当前科室
    $scope.setCurrentDept = function(item){
        $scope.currentDept = item ;
        $scope.seletctMenu = item ;
    }

    //默认没有选中当前科室
    $scope.currentHospital = undefined ;

    //加载当前医院
    $scope.loadCurrentHospital=function(){
        $http.get("/api/hospital/get-by-id?id="+$scope.loginUser.hospitalId).success(function(data){
            $scope.currentHospital = data ;
            $scope.loadDepts();
        });
    }
    $scope.loadCurrentHospital() ;

    //加载当前科室
    $scope.loadDepts = function(){
        $http.get("/api/dept/get-by-hosp?hospId="+$scope.currentHospital.id).success(function(data){
            $scope.depts=[] ;
            $scope.depts = data ;
            $scope.buildTree();
        })
    }

    //创建树
    $scope.buildTree=function(){
        $scope.menuData=[];
        $scope.menuData = ToolsService.buildTree($scope.depts);
    }



    //添加科室
    $scope.$on("addDeptEvent",function(){
        $scope.currentDept={} ;
        $scope.openDeptModal("新增科室");
    })

    //添加子科室
    $scope.$on("addSubDeptEvent",function(){
        if(!$scope.currentDept){
            parent.layer.msg("系统提示：请选择要添加子科室的科室",{"icon":2}) ;
            return ;
        }
        if(!$scope.currentDept.id){
            parent.layer.msg("系统提示：请先保存数据，然后在添加子科室",{"icon":2});
            return ;
        }

        var obj = {} ;
        obj.parentId = $scope.currentDept.id ;
        $scope.currentDept = obj  ;
        $scope.openDeptModal("新增子科室");

    });

    //编辑科室

    $scope.$on("editDeptEvent",function(){
        //修改科室信息
        if(!$scope.currentDept){
            parent.layer.msg("系统提示：请选择要修改的科室")
            return ;
        }
        $scope.openDeptModal("修改科室");
    })

    //删除科室

    //修改科室
    $scope.mergeDept=function(){
        if($scope.currentDept){
            var obj = {} ;
            obj.id=$scope.currentDept.id;
            obj.deptName=$scope.currentDept.deptName;
            obj.deptCode=$scope.currentDept.deptCode;
            obj.parentId=$scope.currentDept.parentId;
            obj.hospId=$scope.loginUser.hospitalId ;
            $http.post("/api/dept/merge",obj).success(function(data){
                parent.layer.msg("系统提示:保存成功",{icon:'1'});
                $scope.currentDept=undefined;
                // if(!obj.id){
                //     //新增项目
                //     $scope.seletctMenu.children.push(obj);
                // }
                //没办法，指令没有监控数据的变化。不想改，就暂时使用这种方式吧
                $scope.loadDepts();
            })
        }
    }

    $scope.openDeptModal=function(action){
        var modalInstance = $uibModal.open({
            templateUrl: "dept.html",
            controller: "deptModalInstance",
            backdrop: false,
            size: "modal-sm",
            resolve:{
                action:function(){
                    return action ;
                },
                currentDept:function(){
                    return $scope.currentDept;
                }
            }
        });

        modalInstance.result.then(function(currentDept){
            $scope.currentDept = currentDept ;
            $scope.mergeDept();
        })
    }




}]);

var deptModalInstance = hisApp.controller('deptModalInstance',['$scope','$uibModalInstance','currentDept',"action",function($scope,$uibModalInstance,currentDept,action){
    $scope.currentDept = currentDept ;
    $scope.action=action ;

    $scope.doOk=function(){
        if(!$scope.currentDept.id&&!$scope.currentDept.deptName&&!$scope.currentDept.deptCode){
            parent.layer.alert("系统提示：新增科室信息不能为空",{icon:'2'});
            return ;
        }
        $uibModalInstance.close($scope.currentDept);
    }

    $scope.cancel=function(){
        $uibModalInstance.dismiss();
    }

}]);