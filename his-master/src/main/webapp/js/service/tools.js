/**
 * Created by Administrator on 2017/3/27.
 */

hisApp.factory("ToolsService",function(){
    var tools  = {} ;

    //创建深层次数
    /**
     * 创建深层次的树状数据
     * @param data 传入的原始数据
     */
    tools.buildTree=function(data){
        //为每一个数据添加一个子对象
        var returnData = [] ;
        for(var i =0;i<data.length;i++){
            data[i].children=[] ;
            if(!data[i].parentId){
                returnData.push(data[i]) ;
            }
        }

        //根据ID和PARENT ID来处理数据
        for(var i =0 ;i<data.length;i++){
            for(var j=0;j<data.length;j++){
                if(data[i].id==data[j].parentId){
                    data[i].children.push(data[j]) ;
                }
            }
        }
        return returnData ;
    }

    return tools ;
})