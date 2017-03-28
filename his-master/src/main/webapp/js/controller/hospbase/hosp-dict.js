/**
 * Created by Administrator on 2017/3/23.
 */

var hospDictCtrl = hisApp.controller("hospDictCtrl",function($scope,$uibModal,$http,localStorageService,$state){

    //判断用户是否登陆，如果用户已经登录则允许继续访问，否则跳转至登陆页面
    $scope.loginUser=localStorageService.get("currentUser") ;
    if(!$scope.loginUser.hospitalId){
        parent.layer.msg("系统提示:获取登陆信息失败",{icon:2}) ;
        $state.go("login");
    }



    $scope.hospDictData=[] ;//字典数据
    $scope.hospTypeData=[] ;//字典类型数据
    //字典类型列配置
    $scope.dictTypeColumns=[{
        headerCellClass:'headerCellClass',
        cellClass:'cellClass',
        field:"dictTypeName",
        displayName:'字典名称'
    },{
        headerCellClass:'headerCellClass',
        cellClass:'cellClass',
        field:"dictTypeDesc",
        displayName:'字典说明'
    }] ;

    //字典内容配置
    $scope.hospDictColumns = [
        {
            headerCellClass:'headerCellClass',
            cellClass:'cellClass',
            field:'dictName',
            displayName:'显示值'
        },
        {
            headerCellClass:'headerCellClass',
            cellClass:'cellClass',
            field:'dictValue',
            displayName:'实际值'
        },
        {
            headerCellClass:'headerCellClass',
            cellClass:'cellClass',
            field:'inputCode',
            displayName:'拼音码'
        }
    ] ;
    //字典类型表格配置
    $scope.dictTypeGridOptions={
        enableRowSelection:true,
        enableRowHeaderSelection:false,
        modifierKeysToMultiSelect:false,
        noUnselect:false,
        enableSorting:true,
        enableColumnMenus:false,
        multiSelect:false,
        columnDefs:$scope.dictTypeColumns,
        data:$scope.hospTypeData
    } ;

    $scope.dictTypeGridOptions.onRegisterApi = function(gridApi){
        $scope.dictTypeGridApi = gridApi ;
        //字典类型选择事件
        gridApi.selection.on.rowSelectionChanged($scope,function(row){
            $scope.currentDictType = row.entity ;
            if(row.entity.id){
                $scope.loadDict(row.entity.id);
            }
        })
    }

    //字典基础表格配置
    $scope.hospDictGridOptions = {
        enableRowSelection:true,
        enableRowHeaderSelection:false,
        modifierKeysToMultiSelect:false,
        noUnselect:false,
        enableSorting:true,
        enableColumnMenus:false,
        multiSelect:false,
        columnDefs:$scope.hospDictColumns,
        data:$scope.hospDictData
    } ;

    //注册操作接口
    $scope.hospDictGridOptions.onRegisterApi = function(gridApi){
        $scope.hospDictGridApi = gridApi ;
        //注册表格选中事件
        gridApi.selection.on.rowSelectionChanged($scope,function(row){
            $scope.currentHospDict = row.entity ;
        }) ;
    }
    //加载所有的字典类型
    $scope.loadDictType=function(){
        $http.get("api/dict/hosp-type-all?hospitalId="+$scope.loginUser.hospitalId).success(function(data){
            $scope.hospTypeData = data ;
            $scope.dictTypeGridOptions.data = $scope.hospTypeData;
            if($scope.hospTypeData.length){
                $scope.dictTypeGridApi.selection.selectRow($scope.hospTypeData[0]);
            }
        })
    }


    //加载某一个字典的内容
    $scope.loadDict=function(typeId){
        $http.get("api/dict/list-hosp-dict-by-type?typeId="+typeId).success(function(data){
            $scope.hospDictData = data ;
            $scope.hospDictGridOptions.data = $scope.hospDictData ;
        })
    }

    //加载字典
    $scope.loadDictType();

    //打开字典类型编辑窗
    $scope.openDictTypeModal=function(action,currentTypeDict){
        var modalInstance =$uibModal.open({
            templateUrl:'typeModal.html',
            controller:"typeModalInstanceCtrl",
            controllerAs:"$ctrl",
            backdrop:false,
            size:"modal-sm",
            resolve:{
                "action":function(){
                    return action;
                },
                "currentType":function(){
                    return currentTypeDict ;
                }

            }

        })
        modalInstance.result.then(function(result){
            if(result){
                $scope.currentDictType = result ;
                $scope.currentDictType.hospitalId=$scope.loginUser.hospitalId ;
                $scope.mergeDictType() ;
            }
        });
    }

    //保存字典类型的变更
    $scope.mergeDictType = function () {
        $http.post("api/dict/hosp-dict-type-merge",$scope.currentDictType).success(function(data){
            parent.layer.msg("系统提示：修改字典成功",{icon:1}) ;
            $scope.loadDictType() ;
            $scope.dictTypeGridApi.selection.selectRow($scope.currentDictType) ;
        }) ;
    };

    $scope.openHospDictModal = function(action,hospDict){
        var modalInstance = $uibModal.open({
            templateUrl:"hospdict.html",
            controller:"hospDictModalInstanceCtrl",
            backdrop:false,
            size:'modal-sm',
            resolve:{
                action:function(){
                    return action ;
                },
                hospDict:function(){
                    return hospDict ;
                }
            }
        }) ;

        modalInstance.result.then(function(result){
            if(result){
                $scope.currentHospDict = result ;
                $scope.currentHospDict.typeId = $scope.currentDictType.id ;
                $scope.meregeHospDict() ;
            }
        })
    }

    //保存字典类型的变更
    $scope.meregeHospDict = function () {
        $http.post("api/dict/hosp-dict-merge",$scope.currentHospDict).success(function(data){
            parent.layer.msg("系统提示：修改字典成功",{icon:1}) ;
            $scope.loadDict($scope.currentDictType.id);
        }) ;
    };

    //添加字典
    $scope.addDictType = function(){
        $scope.currentDictType = {} ;
        $scope.openDictTypeModal("新增",$scope.currentDictType) ;
    }

    //添加键值
    $scope.addHospDict = function(){
        if(!$scope.currentDictType){
            parent.layer.msg("请选择字典类型",{icon:2}) ;
            return ;
        }

        if(!$scope.currentDictType.id){
            parent.layer.msg("选择字典类型尚未保存，不能够添加键值",{icon:2}) ;
            return ;
        }

        $scope.currentHospDict ={} ;
        $scope.openHospDictModal("新增键值",$scope.currentHospDict);

    }

    //删除字典
    $scope.deleteDictType = function(){
        if(!$scope.currentDictType){
            parent.layer.msg("系统提示：请选择要删除的项目",{icon:2}) ;
            return ;
        }
        if($scope.currentDictType.id){
            parent.layer.confirm("删除字典，将会把字典和对应的键值数据全部删除，是否继续？",{'icon':3},function(){
                layer.closeAll();
                $http.post("api/dict/hosp-dict-type-del?id="+$scope.currentDictType.id).success(function(data){
                    parent.layer.msg("系统提示：删除成功",{icon:1});
                    $scope.loadDictType();
                })
            },function(){
            })
        }else{

        }
    }

    //删除键值
    $scope.deleteHospDict = function(){
        if(!$scope.currentHospDict){
            parent.layer.msg("系统提示：请选择要删除的项目",{icon:2}) ;
            return ;
        }
        if($scope.currentHospDict.id){
            parent.layer.confirm("将会把对应的键值数据，是否继续？",{'icon':3},function(){
                layer.closeAll();
                $http.post("api/dict/hosp-dict-del?id="+$scope.currentHospDict.id).success(function(data){
                    parent.layer.msg("系统提示：删除成功",{icon:1});
                    $scope.loadDict($scope.currentDictType.id);
                })
            },function(){
            })
        }else{

        }
    }

    //同步服务器字典
    $scope.synServerBaseDict = function(){
        $http.post("api/dict/syn-base?hospitalId="+$scope.loginUser.hospitalId).success(function(){
            $scope.loadDictType() ;
            parent.layer.msg("系统提示：更新成功！",{"icon":1});
        })
    }

});
//字典窗口控制器
var typeModalInstanceCtrl = hisApp.controller("typeModalInstanceCtrl",function(action,currentType,$uibModalInstance,$scope){

    $scope.currentDictType = currentType ;
    $scope.action = action ;

    $scope.doOk= function(){
        if(!$scope.currentDictType.id){
            if(!$scope.currentDictType.dictTypeName){
                parent.layer.msg("系统提示：字典名称不能为空",{"icon":2}) ;
                return ;
            }
        }

        $uibModalInstance.close($scope.currentDictType);
    }

    $scope.doCancel = function(){
        $uibModalInstance.dismiss('cancel');
    }
})
//键值窗口控制器
var hospDictModalInstanceCtrl = hisApp.controller("hospDictModalInstanceCtrl",function(action,hospDict,$uibModalInstance,$scope){

    $scope.currentHospDict = hospDict ;
    $scope.action = action ;

    $scope.doOk= function(){
        if(!$scope.currentHospDict.dictName || !$scope.currentHospDict.dictValue){
            parent.layer.msg("系统提示：键值不能为空",{"icon":2}) ;
            return ;
        }
        $uibModalInstance.close($scope.currentHospDict);
    }

    $scope.doCancel = function(){
        $uibModalInstance.dismiss('cancel');
    }
})