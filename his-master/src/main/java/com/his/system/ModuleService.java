package com.his.system;

import com.google.inject.persist.Transactional;
import com.his.domain.common.entity.ErrorException;
import com.his.domain.system.entity.ModuleDict;
import com.his.domain.system.facade.ModuleFacade;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by heren on 2017/3/10.
 */
@Produces("application/json")
@Path("module")
public class ModuleService {

    private ModuleFacade moduleFacade ;

    @Inject
    public ModuleService(ModuleFacade moduleFacade) {
        this.moduleFacade = moduleFacade;
    }

    /**
     * 根据传入的医院和人员获取相关的模块
     * @param hospitalId
     * @param userId
     * @return
     * @throws ErrorException
     */
    @GET
    @Path("list-by-hospital-user")
    public List<ModuleDict> listModuleByHospitalIdAndUserId(@QueryParam("hospitalId")String hospitalId,@QueryParam("userId")String userId) throws ErrorException {
        String hql = "From ModuleDict as m " ;
        if(hospitalId==null||"".equals(hospitalId)){
            throw  new ErrorException("没有选择机构");
        }
        if(userId==null||"".equals(userId)){
            throw new ErrorException("没有提供登陆者信息");
        }
        List<ModuleDict> moduleDicts = moduleFacade.createQuery(ModuleDict.class,hql,new ArrayList<>()).getResultList();
        return moduleDicts ;
    }


    @GET
    @Path("list-all")
    public List<ModuleDict> listAllModule(){
        String hql = "from ModuleDict as m " ;
        //List<ModuleDict> moduleDicts = moduleFacade.createQuery(ModuleDict.class,hql,new ArrayList<>()).getResultList();
        List<ModuleDict> moduleDicts = moduleFacade.findAll(ModuleDict.class);
        return moduleDicts ;
    }

    @POST
    @Path("merge")
    @Transactional
    public Response mergeModule(ModuleDict moduleDict){
        ModuleDict module = moduleFacade.merge(moduleDict);
        return Response.status(Response.Status.OK).entity(module).build();
    }

}
