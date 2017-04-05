/**
 * Created by Administrator on 2017/4/4.
 */

var id2nameFilter = hisApp.filter("id2Name",function(){
    return function(idValue,idField,displayField,datas){
        for(var i = 0 ;i<datas.length;i++){
            if(idValue==datas[i][idField]){
                return datas[i][displayField];
            }
        }
    }
})
