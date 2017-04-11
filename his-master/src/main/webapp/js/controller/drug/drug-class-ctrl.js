/**
 * Created by Administrator on 2017/4/10.
 */

var drugClassCtrl = hisApp.controller("drugClassCtrl",['$scope','$http',"ToolsService",'$uibModal',function($scope,$http,ToolsService,$uibModal){


    $scope.drugClasses = [] ;//所有的药品类别
    $scope.drugClassTreeData = [] ;//药品类型的树形数据

    $scope.currentDrugClass =undefined ;//当前被选中的类别

    /**
     *加载类别数据并构建树形数据
     */
    $scope.loadDrugClass = function(){
        $http.get("/api/drug-class/list-all").success(function(data){
            $scope.drugClasses = data ;
            $scope.buildTree();
        })
    } ;
    $scope.loadDrugClass();

    /**
     * 设置树形的level
     * @param drugClass
     */
    $scope.setLevel=function(drugClass){
        drugClass.$$expand=false;
        if(!drugClass.parentId){
            drugClass.$$treeLevel = 0 ;
            return ;
        }else{
            for(var i= 0;i<$scope.drugClasses.length;i++){
                if($scope.drugClasses[i].id==drugClass.parentId){
                    if($scope.drugClasses[i].$$treeLevel||$scope.drugClasses[i].$$treeLevel>=0){
                        drugClass.$$treeLevel = $scope.drugClasses[i].$$treeLevel+1;
                    }else{
                        $scope.setLevel($scope.drugClasses[i]) ;
                        drugClass.$$treeLevel = $scope.drugClasses[i].$$treeLevel+1;
                    }
                    return ;
                }else{
                    continue;
                }
            }

        }

    }

    /**
     * 创建树
     */
    $scope.buildTree = function(){
        for(var i = 0;i<$scope.drugClasses.length;i++){
            var drugClass = $scope.drugClasses[i] ;
            $scope.setLevel(drugClass);
        }

        $scope.drugClassGridOps.data=ToolsService.buildTree($scope.drugClasses);

    }

    //表格配置
    $scope.drugClassGridOps = ToolsService.getNormalGridOptions();

    //表格配置
    $scope.columnDefs=[{
        field:"drugClassName",
        displayName:"药品分类名称",
        cellClass:"cellClass",
        headerCellClass:'headerCellClass',
        width:"70%"
    },{
        field:"drugClassCode",
        displayName:"药品分类代码",
        cellClass:"cellClass",
        headerCellClass:"headerCellClass",
        width:'27%'
    }] ;

    $scope.drugClassGridOps.columnDefs = $scope.columnDefs ;


    //注册选择事件
    $scope.drugClassGridOps.onRegisterApi=function(gridApi){
        $scope.gridApi = gridApi ;
        gridApi.selection.on.rowSelectionChanged($scope,function(row){
            $scope.currentDrugClass = row.entity;
        });

        $scope.gridApi.treeBase.on.rowExpanded($scope,function (row) {

            if(!row.entity.$$expand){
                //数据尚未加载
                var position = ToolsService.getElementPosition(row.entity,$scope.drugClassGridOps.data);
                $scope.drugClassGridOps.data.splice(position,0,row.entity.children)
                row.entity.$$expand=true;
            }


        })



    }

    $scope.openEditModal=function(action,drugClass){
        var drugClassModal = $uibModal.open({
            templateUrl:"drugClassModal.html",
            backDrop:false,
            controller:'drugClassModalCtrl',
            resolve:{
                action:function(){
                    return action ;
                },
                currentDrugClass:function(){
                    return drugClass;
                }
            }
        });

        drugClassModal.result.then(function(obj){

            delete obj.$$treeLevel;
            delete  obj.$$hashKey;

            $http.post("/api/drug-class/merge",obj).success(function(){
                parent.layer.msg("系统提示：更新成功");
                $scope.loadDrugClass();
            })

        })


    }

    //新增类别
    $scope.addNewDrugClass = function () {
        $scope.openEditModal("新增类别",{});
    }

    /**
     * 添加子类别
     */
    $scope.addChildDrugClass = function(){
        var obj= {} ;
        if(!$scope.currentDrugClass){
            parent.layer.msg("系统提示：请选择要删除的类别") ;
            return ;
        }
        obj.parentId = $scope.currentDrugClass.id;
        $scope.openEditModal($scope.currentDrugClass.drugClassName+"子类添加",obj);
    }

    /**
     * 删除类别
     */
    $scope.delDrugClass=function(){
        if(!$scope.currentDrugClass){
            parent.layer.msg("系统提示：请选择要删除的类别") ;
            return ;
        }

        for(var i = 0;i<$scope.drugClasses.length;i++){
            if($scope.drugClasses[i].parentId ==$scope.currentDrugClass.id){
                parent.layer.msg("系统提示：拥有子类别，无法删除");
                return ;
            }
        }

        $http.post("/api/drug-class/del-by-id?id="+$scope.currentDrugClass.id).success(function (data) {
            parent.layer.msg("系统提示：删除成功！");
            $scope.loadDrugClass();
        });
    }

    /**
     * 编辑类别
     */
    $scope.editDrugClass=function(){
        if(!$scope.currentDrugClass){
            parent.layer.msg("系统提示：请选择要编辑的类别") ;
            return ;

        }

        $scope.openEditModal("修改编辑",$scope.currentDrugClass);
    }
}]);

var drugClassModalCtrl = hisApp.controller("drugClassModalCtrl",function($scope,action,currentDrugClass,$uibModalInstance){
    $scope.action = action ;
    $scope.currentDrugClass = currentDrugClass ;

    $scope.doOk = function(){
        if(!$scope.currentDrugClass.drugClassName){
            parent.layer.msg("系统提示：名称不能为空");
            return ;
        }
        if(!$scope.currentDrugClass.drugClassCode){
            parent.layer.msg("系统提示：代码不能为空");
            return ;
        }

        $uibModalInstance.close($scope.currentDrugClass);
    }

    $scope.doCancel = function(){
        $uibModalInstance.dismiss();
    }
})