/**
 * Created by Administrator on 2017/3/30.
 */

var staffManagerCtrl = hisApp.controller("staffManagerCtrl",["$scope",'$http','localStorageService','ToolsService',function($scope,$http,localStorageService,ToolsService){

    $scope.deptDicts = [] ;//科室列表
    $scope.staffs = [] ;//该机构的员工

    //所属医院的ID
    $scope.hospitalId=$scope.loginUser.hospitalId ;
    //单元格配置
    $scope.columnDefs=[{
        field:'staffName',
        displayName:'姓名'
    },{
        field:'title',
        displayName:"职称"
    },{
        field:'deptId',
        displayName:'所属科室'
    }] ;
    //获取表格的基本配置
    $scope.staffGridOptions = ToolsService.getNormalGridOptions();
    $scope.staffGridOptions.columnDefs=$scope.columnDefs ;
    $scope.staffGridOptions.onRegisterApi=function(gridApi){
        $scope.gridApi = gridApi ;

        //注册表格选中事件
        gridApi.selection.on.rowSelectionChanged($scope,function(row){
            $scope.currentStaff = row.entity ;
        }) ;
    }

    $scope.loadStaffByHospital = function(){
        $http.get("api/staff/list-by-hospital-id?hospitalId="+$scope.hospitalId).success(function(data){
            $scope.staffGridOptions.data = data ;
            $scope.staffs = data ;
        }) ;
    }

    $scope.loadStaffByHospital() ;


    //加载医院信息
    $scope.loadDepts = function(){
        $http.get("api/dept/get-by-hosp?hospId="+$scope.hospitalId).success(function(data){
            $scope.deptDicts =data ;
        })
    }

    $scope.loadDepts() ;

    //监控科室的改变

    $scope.$watch("selectDept",function(newValue,oldValue){

        if(!newValue){
            if(!$scope.inputStaffName){
                $scope.staffGridOptions.data = $scope.staffs ;
            }else{
                var tempData = [] ;
                for(var i = 0 ;i<$scope.staffs.length;i++){
                    if($scope.staffs[i].staffName.indexOf($scope.inputStaffName)){
                        tempData.push($scope.staffs[i]) ;
                    }
                }
                $scope.staffGridOptions.data = tempData ;
            }


        }else{
            if(!$scope.inputStaffName){
                var tempData=[] ;
                for(var i = 0;i<$scope.staffs.length;i++){
                    if($scope.staffs[i].deptId==newValue){
                        tempData.push($scope.staffs[i]) ;
                    }
                }

                $scope.staffGridOptions.data = tempData ;
            }else{
                var tempData = [] ;
                for(var i = 0 ;i<$scope.staffs.length;i++){
                    if($scope.staffs[i].staffName.indexOf($scope.inputStaffName)&&$scope.staffs[i].deptId ==newValue){
                        tempData.push($scope.staffs[i]) ;
                    }
                }
                $scope.staffGridOptions.data = tempData ;
            }
        }


    }) ;

    //监控人员的改变
    $scope.$watch("inputStaffName",function(newValue,oldValue){
        if(!newValue){
            if(!$scope.selectDept){
                $scope.staffGridOptions.data = $scope.staffs ;
            }else{
                var tempData = [] ;
                for(var i =0;i<$scope.staffs.length;i++){
                    if($scope.staffs[i].deptId == $scope.selectDept){
                        tempData.push($scope.staffs[i]) ;
                    }
                }
                $scope.staffGridOptions.data = tempData ;
            }
        }else{
            if(!$scope.selectDept){
                var tempData =[] ;
                for(var i = 0 ;i<$scope.staffs.length;i++){
                    if($scope.staffs[i].staffName.indexOf(newValue)>=0){
                        tempData.push($scope.staffs[i]) ;
                    }
                }
                $scope.staffGridOptions.data = tempData ;
            }else{
                var tempData = [] ;
                for(var i =0;i<$scope.staffs.length;i++){
                    if($scope.staffs[i].deptId == $scope.selectDept&&$scope.staffs[i].staffName.indexOf(newValue)>=0){
                        tempData.push($scope.staffs[i]) ;
                    }
                }
                $scope.staffGridOptions.data = tempData ;
            }
        }
    })


    //保存用户
    $scope.saveStaff = function(){
        if(!$scope.currentStaff){
            parent.layer.msg("保存内容为空！")
            return ;
        }
        if(!$scope.currentStaff.loginName){
            parent.layer.msg("登陆名不能为空")
            return ;
        }

        $scope.currentStaff.hospitalId=$scope.loginUser.hospitalId ;
        $http.post("api/staff/merge",$scope.currentStaff).success(function(){
            parent.layer.msg("保存成功");
            $scope.loadStaffByHospital();
        })

    }

    $scope.deleteStaff = function(){
        if(!$scope.currentStaff.id){
            parent.layer.msg("错误的用户信息，不能进行删除，请确认！")
            return ;
        }

        $scope.currentStaff.status = 0 ;
        $http.post("api/staff/merge",$scope.currentStaff).success(function(){
            parent.layer.msg("系统提示：删除用户成功");
            $scope.currentStaff = {} ;
            $scope.loadStaffByHospital() ;
        })
    }



}]);
