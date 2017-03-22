package com.his.hospbase;

import com.google.inject.Inject;
import com.google.inject.persist.Transactional;
import com.his.domain.common.entity.ErrorException;
import com.his.domain.common.facade.BaseFacade;
import com.his.domain.hospbase.entity.DeptDict;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/3/22.
 */

@Produces("application/json")
@Path("dept")
public class DeptService {

    private BaseFacade baseFacade ;

    @Inject
    public DeptService(BaseFacade baseFacade) {
        this.baseFacade = baseFacade;
    }

    /**
     * 获取科室
     * @param id
     * @return
     */
    @Path("get-by-hosp")
    @GET
    public List<DeptDict> listDeptByHospitalId(@QueryParam("hospId") String id ){
        String hql ="from DeptDict as dept where dept.hospId='"+id+"'" ;
        return baseFacade.createQuery(DeptDict.class,hql,new ArrayList()).getResultList() ;
    }

    /**
     * 修改科室
     * @param deptDict
     * @return
     */
    @Transactional
    @Path("merge")
    @POST
    public Response meregeDeptDict(DeptDict deptDict){
        try {
            DeptDict dept = baseFacade.merge(deptDict);
            return Response.status(Response.Status.OK).entity(dept).build();
        }catch(Exception e){
            throw e ;
        }
    }

    /**
     * 删除科室
     * @param id
     * @return
     */
    @POST
    @Path("delete")
    @Transactional
    public Response deleteDeptDictById(String id){
        ArrayList<String> ids = new ArrayList<>();
        ids.add(id);
        baseFacade.removeByStringIds(DeptDict.class,ids);
        return Response.status(Response.Status.OK).build();
    }



}

