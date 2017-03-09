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
    })

}])