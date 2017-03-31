package com.his.hospbase;

import com.google.inject.Inject;
import com.google.inject.persist.Transactional;
import com.his.domain.common.facade.BaseFacade;
import com.his.domain.hospbase.entity.StaffDict;
import com.his.domain.hospbase.vo.StaffVO;
import org.apache.commons.collections.ArrayStack;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/3/30.
 */
@Produces("appliction/json")
@Path("staff")
public class StaffService {

    private BaseFacade baseFacade ;

    @Inject
    public StaffService(BaseFacade baseFacade) {
        this.baseFacade = baseFacade;
    }

    /**
     * 根据用户的ID获取用户信息
     * @param id
     * @return
     */
    @GET
    @Path("get-staff-by-id")
    public StaffDict getById(@QueryParam("id") String id){
        return baseFacade.get(StaffDict.class,id);
    }

    /**
     * 根据科室信息获取员工列表
     * @param deptId
     * @return
     */
    @GET
    @Path("list-by-dept-id")
    public List<StaffVO> listStaffVoByDeptId(@QueryParam("deptId") String deptId){
        String hql ="from StaffDict as sd where sd.deptId='"+deptId+"' and sd.status = '1'" ;
        List<StaffDict> staffDicts = baseFacade.createQuery(StaffDict.class,hql,new ArrayList()).getResultList() ;
        List<StaffVO> staffVOS = this.buildStaffVo(staffDicts) ;
        return staffVOS ;
    }


    /**
     * 根据医院标志获取该医院的员工
     * @param hospitalId
     * @return
     */
    @GET
    @Path("list-by-hospital-id")
    public List<StaffVO> listByHospitalId(@QueryParam("hospitalId") String hospitalId){
        String hql = "from StaffDict as sd where sd.hospitalId='"+hospitalId+"' and sd.status='1'" ;
        List<StaffDict> staffDicts = baseFacade.createQuery(StaffDict.class,hql,new ArrayList<>()).getResultList() ;
        return this.buildStaffVo(staffDicts) ;
    }

    /**
     * 根据staffDict拼装staffVO
     * @param staffDicts
     * @return
     */
    private List<StaffVO> buildStaffVo(List<StaffDict> staffDicts){
        List<StaffVO> staffVOS = new ArrayList<>() ;
        for(StaffDict staffDict:staffDicts){
            StaffVO staffVO = new StaffVO() ;
            //填写基本信息
            staffVO.setId(staffDict.getId());
            staffVO.setLoginName(staffDict.getLoginName());
            staffVO.setStaffName(staffDict.getStaffName());
            staffVO.setHospitalId(staffDict.getHospitalId());
            staffVO.setDeptId(staffDict.getDeptId());
            staffVO.setPassword(staffDict.getPassword());
            staffVO.setTitle(staffDict.getTitle());
            staffVO.setStatus(staffDict.getStatus());
            staffVOS.add(staffVO);

            //角色信息

            //拥有模块信息

            //权限信息
        }
        return staffVOS ;
    }

    /**
     * 保存修改人员信息
     * @param staffVO
     * @return
     */
    @Path("merge")
    @POST
    @Transactional
    public Response mergeStaffDict(StaffVO staffVO){
        String id = staffVO.getId() ;
        StaffDict staffDict = null ;
        if(id!=null&&!"".equals(id)){
            staffDict = baseFacade.get(StaffDict.class,id) ;
        }
        if(staffDict==null){
            staffDict = new StaffDict();
        }
        staffDict.setTitle(staffVO.getTitle());
        staffDict.setPassword(staffVO.getPassword());
        staffDict.setDeptId(staffVO.getDeptId());
        staffDict.setHospitalId(staffVO.getHospitalId());
        staffDict.setLoginName(staffVO.getLoginName());
        staffDict.setStatus(staffVO.getStatus());
        staffDict.setStaffName(staffVO.getStaffName());
        baseFacade.merge(staffDict);

        //处理角色

        //处理权限

        //拥有模块信息


        return Response.status(Response.Status.OK).entity(staffDict).build();
    }




}
