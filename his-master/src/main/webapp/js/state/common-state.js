/**
 * Created by heren on 2017/3/9.
 */

hisApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise("/login");

    $stateProvider.state("index",{
        url:'/index',
        views:{
            'header':{
                url:"template/common/nav-menu.html",
                controller:"navMenuCtrl"
            },
            'footer':{
                templateUrl:'template/common/footer.html'
            },
            'mainContent':{
                template:'<h1>我是第一页</h1>'
            }
        }
    });
    $stateProvider.state("login",{
        url:'/login',
        views:{
            'header':{},
            'footer:':{},
            'mainContent':{
                templateUrl:'template/common/login.html',
                controller:"loginCtrl"
            }
        }
    });
    $stateProvider.state("login.systemList",{
        url:"/system-list",
        views:{
            'mainContent@':{
                templateUrl:'template/common/system-list.html',
                controller:"systemListCtrl"
            }
        }
    }) ;
    //平台管理
    $stateProvider.state('index.adminMain',{
        url:"/admin-main",
        views:{
            'header@':{
                templateUrl:'template/common/system-menu.html'
            },
            'mainContent':{
                templateUrl:""
            },
            'footer':{
                templateUrl:'template/common/footer.html'
            }
        }
    }) ;
    //系统管理-模块管理
    $stateProvider.state('index.adminMain.moduleManage',{
        url:"/module-manage",
        views:{
            'mainContent@':{
                templateUrl:'template/system/module-manage.html',
                controller:"moduleManageCtrl"
            }
        }
    })

}])