/**
 * Created by heren on 2017/3/11.
 */

//菜单模块管理
var moduleMenuCtrl = hisApp.controller("moduleMenuCtrl",['$scope','$http','$uibModal',function($scope,$http,$uibModal){

    //模块列表
    $scope.modules=[] ;
    //菜单数组
    $scope.menus=[] ;
    $scope.currentModule = {} ;

    //当前选中的菜单
    $scope.currentMenu={} ;
    //父菜单
    $scope.parentMenu={} ;
    //菜单数据
    $scope.menuData=[] ;

    $scope.action="添加菜单"
    //加载模块
    $scope.loadModules=function(){
        $http.get("/api/module/list-all").success(function(data){
            $scope.modules = data ;
            if(data.length){
                $scope.currentModule = data[0] ;
                $scope.loadModuleMenus();
            }
        })
    }
    $scope.loadModules();

    $scope.loadModuleMenus=function(){
        if($scope.currentModule.id){
            $http.get("/api/menu/list-menu-by-module?moduleId="+$scope.currentModule.id).success(function(data){
                $scope.menus=data ;
                $scope.buildTree();
            })
        }
    }


    //设置当前选中模块
    $scope.setCurrentModule=function(module){
        $scope.currentModule = module ;
        $scope.loadModuleMenus();
    }

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


    //保存
    $scope.mergeMenu = function () {
        if($scope.currentMenu){
            var menu={} ;
            menu.id=$scope.currentMenu.id ;
            menu.menuName=$scope.currentMenu.menuName ;
            menu.parentMenuId=$scope.currentMenu.parentMenuId ;
            menu.menuHref=$scope.currentMenu.menuHref ;
            menu.icon=$scope.currentMenu.icon ;
            menu.moduleId=$scope.currentMenu.moduleId ;
        }
        $http.post("/api/menu/merge",menu).success(function(data){
            $scope.loadModuleMenus() ;
        })
    };

    //设置当前选中的菜单
    $scope.setCurrentMenu=function(menu){
        $scope.currentMenu = menu ;
    }
    //添加菜单
    $scope.$on("addMenuEvent",function(evt){
        $scope.currentMenu={} ;
        $scope.openMenuModal("添加菜单");
    })
    //子菜单
    $scope.$on("addSubMenuEvent",function(evt){
        $scope.parentMenu = {};
        $scope.parentMenu.id=$scope.currentMenu.id;
        $scope.currentMenu={} ;
        $scope.openMenuModal("添加子菜单");
    })
    //编辑
    $scope.$on("delMenuEvent",function(evt){
        //删除菜单
        if($scope.currentMenu.id){
            for(var i =0 ;i<$scope.menus.length;i++){
                if($scope.currentMenu.id==$scope.menus[i].parentMenuId){
                    parent.layer.alert("系统提示：含有子菜单，请先删除子菜单！",{icon:'2'}) ;
                    return ;
                }else{
                    continue;
                }
            }
            $http.post("/api/menu/delete",[$scope.currentMenu.id]).success(function(data){
                parent.layer.alert("删除成功！",{icon:'1'});
                $scope.loadModules() ;
                return ;
            })
        }
    })
    //删除
    $scope.$on("editMenuEvent",function(evt){
        $scope.openMenuModal("添加菜单");
    })

    $scope.openMenuModal=function(action){

        var modalInstance =$uibModal.open({
            templateUrl:'menuEdit.html',
            controller:"modelInstanceCtrl",
            backdrop:false,
            size:'modal-sm',
            resolve:{
                action:function(){
                    return action;
                },
                menus:function(){
                    return $scope.menus ;
                },
                currentMenu:function(){
                    return $scope.currentMenu ;
                },
                parentMenu:function(){
                    return $scope.parentMenu ;
                }
            }
        }) ;
        modalInstance.result.then(function(currentMenu){
            $scope.currentMenu = currentMenu ;
            $scope.currentMenu.moduleId=$scope.currentModule.id;

            $scope.mergeMenu() ;
        })

    }

}]) ;

var modelInstanceCtrl = hisApp.controller('modelInstanceCtrl',function($scope,action,menus,currentMenu,$uibModalInstance,parentMenu){
    $scope.action=action ;
    $scope.menus = menus ;
    $scope.currentMenu = currentMenu ;

    if(parentMenu.id){
        $scope.currentMenu.parentMenuId = parentMenu.id;
    }
    $scope.onOk=function(){
        if(!$scope.currentMenu.menuName){
            parent.layer.alert("菜单名称为空") ;
            return ;
        }
        $uibModalInstance.close($scope.currentMenu);
    }

    $scope.cancel=function(){
        $uibModalInstance.dismiss('cancel');
    }

})

