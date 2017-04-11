package com.his.drug;

import com.google.inject.Inject;
import com.google.inject.persist.Transactional;
import com.his.domain.common.facade.BaseFacade;
import com.his.domain.drug.entity.DrugClassDict;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/4/10.
 */
@Path("drug-class")
@Produces("application/json")
public class DrugClassService {

    private BaseFacade baseFacade ;

    @Inject
    public DrugClassService(BaseFacade baseFacade) {
        this.baseFacade = baseFacade;
    }

    /**
     * 根据ID获取对应的类别
     * @param id
     * @return
     */
    @GET
    @Path("get-by-id")
    public DrugClassDict listDrugClassById(@QueryParam("id") String id){
        return baseFacade.get(DrugClassDict.class,id);
    }


    /**
     * 获取所有的类别
     * @return
     */
    @GET
    @Path("list-all")
    public List<DrugClassDict> listAllDrugClassDict(){
        return baseFacade.findAll(DrugClassDict.class) ;
    }


    /**
     * 根据传入的ID删除
     * @param id
     * @return
     */
    @POST
    @Path("del-by-id")
    @Transactional
    public Response removeDrugClassDict(@QueryParam("id") String id){
        List<String> ids= new ArrayList<>() ;
        ids.add(id);
        baseFacade.removeByStringIds(DrugClassDict.class,ids);
        return Response.status(Response.Status.OK).entity(ids).build();
    }

    /**
     * 更新操作
     * @param drugClassDict
     * @return
     */
    @POST
    @Path("merge")
    @Transactional
    public Response meregeDrugClassDict(DrugClassDict drugClassDict){
        DrugClassDict merge = baseFacade.merge(drugClassDict);
        return Response.status(Response.Status.OK).entity(merge).build();
    }



}
