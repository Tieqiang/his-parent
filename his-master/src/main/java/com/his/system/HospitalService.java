package com.his.system;

import com.google.inject.persist.Transactional;
import com.his.domain.common.entity.ErrorException;
import com.his.domain.common.facade.BaseFacade;
import com.his.domain.system.entity.HospitalInfo;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by heren on 2017-03-15.
 */
@Produces("application/json")
@Path("hospital")
public class HospitalService {


    private BaseFacade baseFacade ;

    @Inject
    public HospitalService(BaseFacade baseFacade) {
        this.baseFacade = baseFacade;
    }

    @Path("get-by-id")
    @GET
    public HospitalInfo getById(@QueryParam("id")String id){
        return baseFacade.get(HospitalInfo.class,id);
    }

    @GET
    @Path("list-all")
    public List<HospitalInfo> hospitalInfoList(){
        return baseFacade.findAll(HospitalInfo.class);
    }

    @GET
    @Path("list-by-status")
    public List<HospitalInfo> listByStatus(@QueryParam("status") String status){
        String hql = "from HospitalInfo as info where info.hospitalStatus='"+status+"'" ;
        return baseFacade.createQuery(HospitalInfo.class,hql,new ArrayList<>()).getResultList();
    }

    @POST
    @Path("merge")
    @Transactional
    public Response mergeHospitalInfo(HospitalInfo hospitalInfo){
        try {
            HospitalInfo info = baseFacade.merge(hospitalInfo);
            return Response.status(Response.Status.OK).entity(info).build();
        }catch (Exception e){
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(new ErrorException(e.getMessage())).build();
        }
    }
}
