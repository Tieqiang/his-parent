/**
 * Created by heren on 2017-03-14.
 */

var navMenuCtrl = hisApp.controller('navMenuCtrl',['$scope','$http','localStorageService',function($scope,$http,localStorageService){
    $scope.menus=[] ;//菜单数据
    $scope.menuData=[] ;//组成属性菜单的数据
    $scope.module=localStorageService.get("module");
    console.log($scope.module);

    //加载模块菜单
    $scope.loadModuleMenus=function(){
        if($scope.module.id){
            //此处路径需要以后修改成，根据当前登录人获取菜单列表
            $http.get("/api/menu/list-menu-by-module?moduleId="+$scope.module.id).success(function(data){
                $scope.menus=data ;
                $scope.buildTree();
            })
        }
    }

    $scope.loadModuleMenus();

    //创建树
    $scope.buildTree=function(){
        $scope.menuData=[];
        for(var i =0;i<$scope.menus.length;i++){
            var flag=false ;
            var obj={} ;
            obj.id=$scope.menus[i].id ;
            obj.menuName=$scope.menus[i].menuName ;
            obj.icon=$scope.menus[i].icon ;
            obj.parentMenuId = $scope.menus[i].parentMenuId ;
            obj.children=[] ;
            obj.menuHref=$scope.menus[i].menuHref ;
            for(var j = 0;j<$scope.menuData.length;j++){
                if($scope.menuData[j].id==obj.parentMenuId){
                    $scope.menuData[j].children.push(obj) ;
                    flag=true ;
                    break ;
                }
            }
            if(!flag){
                $scope.menuData.push(obj);
            }
        }
        console.log($scope.menuData);
    }
}]);