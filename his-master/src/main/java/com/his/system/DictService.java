package com.his.system;

import com.google.inject.Inject;
import com.his.domain.common.facade.BaseFacade;
import com.his.domain.system.entity.BaseDict;
import com.his.domain.system.entity.BaseDictType;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/3/22.
 */

@Produces("application/json")
@Path("dict")
public class DictService {

    private BaseFacade baseFacade ;

    @Inject
    public DictService(BaseFacade baseFacade) {
        this.baseFacade = baseFacade;
    }

    /**
     * 获取所有的字典类型
     * @return
     */
    @GET
    @Path("base-type-all")
    public List<BaseDictType> listBaseDictType(){
        return baseFacade.findAll(BaseDictType.class) ;
    }


    /**
     * 根据传入的类型，获取字典
     * @param typeId
     * @return
     */
    @GET
    @Path("list-base-dict-by-type")
    public List<BaseDict> listBaseDictByType(@QueryParam("typeId") String typeId){
        String hql = "from BaseDict as d where d.typeId='"+typeId+"'" ;
        return baseFacade.createQuery(BaseDict.class,hql,new ArrayList<>()).getResultList();
    }




}
