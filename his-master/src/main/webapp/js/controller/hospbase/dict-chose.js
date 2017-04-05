/**
 * Created by Administrator on 2017/4/2.
 */
var dictChoseCtrl = hisApp.controller("dictChoseCtrl",['$scope','$http','ToolsService',function($scope,$http,ToolsService){

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
        headerCellClass:"headerCellClass"
    }] ;



    $scope.dictGridOptions.columnDefs = $scope.columnDefs ;

    //保存
    $scope.saveDictChoose = function(){

        console.log($scope.dictGridOptions.data)
    }


    $scope.dbClick=function(row){
        alert("you click ")
        console.log(row);
    }

}])