/**
 * 平台基础字典维护
 * Created by Administrator on 2017/3/22.
 */
var baseDictCtrl = hisApp.controller("baseDictCtrl",function($scope,$http,$uibModal){

    $scope.baseDictData=[] ;//字典数据
    $scope.baseTypeData=[] ;//字典类型数据
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
    $scope.baseDictColumns = [
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
        data:$scope.baseTypeData
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
    $scope.baseDictGridOptions = {
        enableRowSelection:true,
        enableRowHeaderSelection:false,
        modifierKeysToMultiSelect:false,
        noUnselect:false,
        enableSorting:true,
        enableColumnMenus:false,
        multiSelect:false,
        columnDefs:$scope.baseDictColumns,
        data:$scope.baseDictData
    } ;

    //注册操作接口
    $scope.baseDictGridOptions.onRegisterApi = function(gridApi){
        $scope.baseDictGridApi = gridApi ;

        //注册表格选中事件
        gridApi.selection.on.rowSelectionChanged($scope,function(row){
            $scope.currentBaseDict = row.entity ;
        }) ;
    }
    //加载所有的字典类型
    $scope.loadDictType=function(){
        $http.get("api/dict/base-type-all").success(function(data){
            $scope.baseTypeData = data ;
            $scope.dictTypeGridOptions.data = $scope.baseTypeData;
            if($scope.baseTypeData.length){
                $scope.dictTypeGridApi.selection.selectRow($scope.baseTypeData[0]);
            }
        })
    }


    //加载某一个字典的内容
    $scope.loadDict=function(typeId){
        $http.get("api/dict/list-base-dict-by-type?typeId="+typeId).success(function(data){
            $scope.baseDictData = data ;
            $scope.baseDictGridOptions.data = $scope.baseDictData ;
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
                $scope.mergeDictType() ;
            }
        });
    }

    //保存字典类型的变更
    $scope.mergeDictType = function () {
        $http.post("api/dict/base-dict-type-merge",$scope.currentDictType).success(function(data){
            parent.layer.alert("系统提示：修改字典成功",{icon:1}) ;
            $scope.loadDictType() ;
            $scope.dictTypeGridApi.selection.selectRow($scope.currentDictType) ;
        }) ;
    };

    $scope.openBaseDictModal = function(action,baseDict){
        var modalInstance = $uibModal.open({
            templateUrl:"basedict.html",
            controller:"baseDictModalInstanceCtrl",
            backdrop:false,
            size:'modal-sm',
            resolve:{
                action:function(){
                    return action ;
                },
                baseDict:function(){
                    return baseDict ;
                }
            }
        }) ;

        modalInstance.result.then(function(result){
            if(result){
                $scope.currentBaseDict = result ;
                $scope.currentBaseDict.typeId = $scope.currentDictType.id ;
                $scope.meregeBaseDict() ;
            }
        })
    }

    //保存字典类型的变更
    $scope.meregeBaseDict = function () {
        $http.post("api/dict/base-dict-merge",$scope.currentBaseDict).success(function(data){
            parent.layer.alert("系统提示：修改字典成功",{icon:1}) ;
            $scope.loadDict($scope.currentDictType.id);
        }) ;
    };

    //添加字典
    $scope.addDictType = function(){
        $scope.currentDictType = {} ;
        $scope.openDictTypeModal("新增",$scope.currentDictType) ;
    }

    //添加键值
    $scope.addBaseDict = function(){
        if(!$scope.currentDictType){
            parent.layer.alert("请选择字典类型",{icon:2}) ;
            return ;
        }

        if(!$scope.currentDictType.id){
            parent.layer.alert("选择字典类型尚未保存，不能够添加键值",{icon:2}) ;
            return ;
        }

        $scope.currentBaseDict ={} ;
        $scope.openBaseDictModal("新增键值",$scope.currentBaseDict);

    }

    //删除字典
    $scope.deleteDictType = function(){
        if(!$scope.currentDictType){
            parent.layer.alert("系统提示：请选择要删除的项目",{icon:2}) ;
            return ;
        }
        if($scope.currentDictType.id){
            parent.layer.confirm("删除字典，将会把字典和对应的键值数据全部删除，是否继续？",{'icon':3},function(){
                layer.closeAll();
                $http.post("api/dict/base-dict-type-del?id="+$scope.currentDictType.id).success(function(data){
                    parent.layer.alert("系统提示：删除成功",{icon:1});
                    $scope.loadDictType();
                })
            },function(){
            })
        }else{

        }
    }

    //删除键值
    $scope.deleteBaseDict = function(){
        if(!$scope.currentBaseDict){
            parent.layer.alert("系统提示：请选择要删除的项目",{icon:2}) ;
            return ;
        }
        if($scope.currentBaseDict.id){
            parent.layer.confirm("将会把对应的键值数据，是否继续？",{'icon':3},function(){
                layer.closeAll();
                $http.post("api/dict/base-dict-del?id="+$scope.currentBaseDict.id).success(function(data){
                    parent.layer.alert("系统提示：删除成功",{icon:1});
                    $scope.loadDict($scope.currentDictType.id);
                })
            },function(){
            })
        }else{

        }
    }


});
//字典窗口控制器
var typeModalInstanceCtrl = hisApp.controller("typeModalInstanceCtrl",function(action,currentType,$uibModalInstance,$scope){

    $scope.currentDictType = currentType ;
    $scope.action = action ;

    $scope.doOk= function(){
        if(!$scope.currentDictType.id){
            if(!$scope.currentDictType.dictTypeName){
                parent.layer.alert("系统提示：字典名称不能为空",{"icon":2}) ;
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
var baseDictModalInstanceCtrl = hisApp.controller("baseDictModalInstanceCtrl",function(action,baseDict,$uibModalInstance,$scope){

    $scope.currentBaseDict = baseDict ;
    $scope.action = action ;

    $scope.doOk= function(){

        if(!$scope.currentBaseDict.dictName || !$scope.currentBaseDict.dictValue){
            parent.layer.alert("系统提示：键值不能为空",{"icon":2}) ;
            return ;
        }


        $uibModalInstance.close($scope.currentBaseDict);
    }

    $scope.doCancel = function(){
        $uibModalInstance.dismiss('cancel');
    }
})