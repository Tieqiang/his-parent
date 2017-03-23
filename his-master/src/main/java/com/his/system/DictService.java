package com.his.system;

import com.google.inject.Inject;
import com.google.inject.persist.Transactional;
import com.his.domain.common.facade.BaseFacade;
import com.his.domain.system.entity.BaseDict;
import com.his.domain.system.entity.BaseDictType;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
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


    /**
     * 更新键值变化
     * @param baseDict
     * @return
     */
    @Transactional
    @POST
    @Path("base-dict-merge")
    public Response mergeBaseDict(BaseDict baseDict){
        BaseDict dict = baseFacade.merge(baseDict);
        return Response.status(Response.Status.OK).entity(dict).build();
    }

    /**
     * 更新字典
     * @param baseDictType
     * @return
     */
    @Transactional
    @POST
    @Path("base-dict-type-merge")
    public Response mergeBaseDict(BaseDictType baseDictType){
        BaseDictType dict = baseFacade.merge(baseDictType);
        return Response.status(Response.Status.OK).entity(dict).build();
    }

    /**
     * 删除字典
     * @param id
     * @return
     */
    @POST
    @Path("base-dict-type-del")
    @Transactional
    public Response delBaseDictType(@QueryParam("id") String id){
        String delHql ="delete BaseDictType where id='"+id+"'" ;
        String delBase = "delete BaseDict where typeId='"+id+"'" ;
        baseFacade.executeUpdate(delHql);
        baseFacade.executeUpdate(delBase);
        return Response.status(Response.Status.OK).build();
    }

    /**
     * 删除键值
     * @param id
     * @return
     */
    @POST
    @Path("base-dict-del")
    @Transactional
    public Response delBaseDict(@QueryParam("id") String id){
        String delBase = "delete BaseDict where id='"+id+"'" ;
        baseFacade.executeUpdate(delBase);
        return Response.status(Response.Status.OK).build();
    }


}
