/**
 * Created by Administrator on 2017/4/2.
 */
var dictChoseCtrl = hisApp.controller("dictChoseCtrl",['$scope','$http','ToolsService','$uibModal',function($scope,$http,ToolsService,$uibModal){

    //grid 表格配置
    $scope.dictGridOptions = ToolsService.getNormalGridOptions() ;
    $scope.gridData =[] ;//表格数据
    $scope.rowTemplate = '<div\n        ng-dblclick="grid.appScope.dbClick(row)"\n        ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.uid"\n        ui-grid-one-bind-id-grid="rowRenderIndex + \'-\' + col.uid + \'-cell\'"\n        class="ui-grid-cell"\n        ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"\n        role="{{col.isRowHeader ? \'rowheader\' : \'gridcell\'}}"\n        ui-grid-cell>\n</div>'

    $scope.dictGridOptions.rowTemplate = $scope.rowTemplate ;
    $scope.localHospitalDictType  =[] ;

    $scope.loadLocalHospitalDictType = function(){

        $http.get("api/dict/hosp-type-all?hospitalId="+$scope.loginUser.hospitalId).success(function(data){
            $scope.localHospitalDictType = data ;
            console.log(data);
        })

    }

    $scope.loadLocalHospitalDictType() ;


    $scope.loadLocalHospitalDictType();

    //加载表格数据
    $scope.loadGridData=function(){
        $http.get("api/dict/base-vs-hospital?hospitalId="+$scope.loginUser.hospitalId).success(function(data){
            $scope.gridData = data ;
            $scope.dictGridOptions.data = $scope.gridData ;
        })
    }

    $scope.loadGridData() ;

    $scope.columnDefs = [{
        field:'dictName',
        displayName:"字典名称",
        width:'30%',
        headerCellClass:'headerCellClass',
        cellClass:'cellClass'
    },{
        field:'dictValue',
        displayName:'字典值',
        width:'30%',
        headerCellClass:"headerCellClass",
        cellClass:'cellClass'

    },{
        field:'hospitalDictId',
        displayName:"对应本机构字典",
        width:'40%',
        cellClass:"cellClass",
        headerCellClass:"headerCellClass",
        cellFilter:"id2Name:'id':'dictTypeDesc':grid.appScope.localHospitalDictType:'尚未对照'"
    }] ;



    $scope.dictGridOptions.columnDefs = $scope.columnDefs ;

    //保存
    $scope.saveDictChoose =function(){

        for(var i =0 ;i<$scope.gridData.length;i++){
            $scope.gridData[i].hospitalId=$scope.loginUser.hospitalId;
        }
        $http.post("api/dict/merge-base-vs-hospital?hospitalId="+$scope.loginUser.hospitalId,$scope.gridData).success(function(data){
            parent.layer.msg("系统提示：保存成功")
        })

    }



    $scope.dbClick=function(row){

        var modalInstance = $uibModal.open({
            backdrop:false,
            templateUrl:"contrast.html",
            controller:"contrastModalInstanceCtrl",
            resolve:{
                data:function(){
                    return row.entity;
                },
                localHospitalDictTypes:function(){
                    return $scope.localHospitalDictType
                }
            }
        }) ;

        modalInstance.result.then(function(data){
            row.entity.hospitalDictId=data.id;
        })

    }

}]) ;

var contrastModalInstanceCtrl = hisApp.controller("contrastModalInstanceCtrl",function($uibModalInstance,$scope,data,localHospitalDictTypes,ToolsService){

    $scope.rowData = data ;
    $scope.currentSelectType = {} ;
    $scope.modalGridOptions = ToolsService.getNormalGridOptions();

    $scope.columnDefs = [{
        field:"dictTypeName",
        displayName:'本机构字典',
        width:'40%',
        cellClass:"cellClass",
        headerCellClass:"headerCellClass"
    },{
        field:"dictTypeDesc",
        displayName:"本地字典描述",
        cellClass:"cellClass",
        headerCellClass:"headerCellClass",
        width:'60%'
    }] ;

    $scope.modalGridOptions.columnDefs =$scope.columnDefs ;
    $scope.modalGridOptions.data = localHospitalDictTypes ;

    $scope.modalGridOptions.onRegisterApi=function(gridApi){
        $scope.gridApi = gridApi ;
        gridApi.selection.on.rowSelectionChanged($scope,function(row){
            $scope.currentSelectType = row.entity ;
        })
    }


    $scope.localHospitalDictTypes = localHospitalDictTypes ;

    $scope.closeModal=function(){
        $uibModalInstance.dismiss();
    }

    $scope.save = function(){

        console.log($scope.currentSelectType)
        if(!$scope.currentSelectType.id){
            parent.layer.msg("系统提示：请选择后在进行保存")
            return ;
        }
        $uibModalInstance.close($scope.currentSelectType) ;
    }

})