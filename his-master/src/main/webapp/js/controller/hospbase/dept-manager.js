/**
 * Created by heren on 2017-03-16.
 */


var deptManagerCtrl = hisApp.controller('deptManagerCtrl',['$scope','$http','localStorageService','$state','$uibModal',function($scope,$http,localStorageService,$state,$uibModal){


    $scope.depts=[] ;//该医院的科室信息
    $scope.deptData=[] ;
    $scope.currentDept=undefined;


    $scope.loginUser=localStorageService.get("currentUser") ;
    if(!$scope.loginUser.hospitalId){
        parent.layer.alert("系统提示:获取登陆信息失败",{icon:2}) ;
        $state.go("login");
    }

    //设置当前科室
    $scope.setCurrentDept = function(item){
        $scope.currentDept = item ;
    }

    $scope.currentHospital = undefined ;

    $scope.loadCurrentHospital=function(){
        $http.get("/api/hospital/get-by-id?id="+$scope.loginUser.hospitalId).success(function(data){
            $scope.currentHospital = data ;
            $scope.loadDepts();
        });
    }
    $scope.loadCurrentHospital() ;
    $scope.loadDepts = function(){
        $http.get("/api/dept/get-by-hosp?hospId="+$scope.currentHospital.id).success(function(data){
            $scope.depts=[] ;
            $scope.buildTree();
        })
    }

    //创建树
    $scope.buildTree=function(){
        $scope.deptData=[];
        for(var i =0;i<$scope.depts.length;i++){
            var flag=false ;
            var obj={} ;
            obj.id=$scope.depts[i].id ;
            obj.deptName=$scope.depts[i].deptName ;
            obj.deptCode=$scope.depts[i].deptCode ;
            obj.parentId = $scope.depts[i].parentId ;
            obj.children=[] ;
            for(var j = 0;j<$scope.deptData.length;j++){
                if($scope.deptData[j].id==obj.parentId){
                    $scope.deptData[j].children.push(obj) ;
                    flag=true ;
                    break ;
                }
            }
            if(!flag){
                $scope.menuData.push(obj);
            }
        }
    }


    //添加科室
    $scope.$on("addDeptEvent",function(){
        $scope.currentDept={} ;
        $scope.openDeptModal("新增科室");
    })

    //添加子科室
    $scope.$on("addSubDeptEvent",function(){

    });

    //编辑科室

    //删除科室

    //保存机构
    $scope.mergeDept=function(){
        if($scope.currentDept){
            var obj = {} ;
            obj.id=$scope.currentDept.id;
            obj.deptName=$scope.currentDept.deptName;
            obj.deptCode=$scope.currentDept.deptCode;
            obj.parentId=$scope.currentDept.parentId;
            $http.post("/api/dept/merge",obj).success(function(data){
                parent.layer.alert("系统提示:保存成功",{icon:'1'});
            })
        }
    }


    $scope.openDeptModal=function(action){

        var modalInstance = $uibModal.open({
            templateUrl: "dept.html",
            controller: "modalInstanceCtrl",
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

var modalInstanceCtrl = hisApp.controller('modalInstanceCtrl',['$scope','$uibModalInstance','currentDept','action',function($scope,$uibModalInstance,currentDept,action){
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