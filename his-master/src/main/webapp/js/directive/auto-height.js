/**
 * Created by Administrator on 2017/4/11.
 */

var autoHeight = hisApp.directive("autoHeight",function($window){
    return {
        restrict : 'A',
        scope : {},
        link : function($scope, element, attrs) {
            var winowHeight = $window.innerHeight; //获取窗口高度
            var headerHeight = 80;
            var footerHeight = 13;
            element.css('min-height',
                (winowHeight - headerHeight - footerHeight) + 'px');
        }
    }
})