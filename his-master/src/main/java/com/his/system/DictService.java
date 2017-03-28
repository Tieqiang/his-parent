package com.his.system;

import com.google.inject.Inject;
import com.google.inject.persist.Transactional;
import com.his.domain.common.entity.ErrorException;
import com.his.domain.common.facade.BaseFacade;
import com.his.domain.hospbase.entity.HospitalDict;
import com.his.domain.hospbase.entity.HospitalDictType;
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
     * 获取某一个医院的所有字典类型
     * @param hospitalId
     * @return
     */
    @GET
    @Path("hosp-type-all")
    public List<HospitalDictType> listBaseDictType(@QueryParam("hospitalId")String hospitalId){
        String hql = "from HospitalDictType as h where h.hospitalId = '"+hospitalId+"'" ;
        return baseFacade.createQuery(HospitalDictType.class,hql,new ArrayList<Object>()).getResultList() ;
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
     * 根据传入的类型，获取字典
     * @param typeId
     * @return
     */
    @GET
    @Path("list-hosp-dict-by-type")
    public List<HospitalDict> listHospDictByType(@QueryParam("typeId") String typeId){
        String hql = "from HospitalDict as d where d.typeId='"+typeId+"'" ;
        return baseFacade.createQuery(HospitalDict.class,hql,new ArrayList<>()).getResultList();
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
     * 更新键值变化
     * @param hospitalDict
     * @return
     */
    @Transactional
    @POST
    @Path("hosp-dict-merge")
    public Response mergeHospitalDict(HospitalDict hospitalDict){
        HospitalDict dict = baseFacade.merge(hospitalDict);
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
    public Response mergeBaseDict(BaseDictType baseDictType) throws ErrorException {

        String id = baseDictType.getId() ;
        String hql = "from BaseDictType as type where upper(type.dictTypeName)=upper('"+baseDictType.getDictTypeName()+"')";

        if("".equals(id)||null==id){
            List<HospitalDictType> resultList = baseFacade.createQuery(HospitalDictType.class, hql, new ArrayList<Object>()).getResultList();
            if(resultList.size()>0){
                throw new ErrorException("字典已经存在，不能新增") ;
            }
        }
        BaseDictType dict = baseFacade.merge(baseDictType);
        return Response.status(Response.Status.OK).entity(dict).build();
    }


    /**
     * 更新字典医院字典
     * @param hospitalDictType
     * @return
     */
    @Transactional
    @POST
    @Path("hosp-dict-type-merge")
    public Response mergeHospDict(HospitalDictType hospitalDictType) throws ErrorException {
        String id = hospitalDictType.getId() ;
        String hql = "from HospitalDictType as type where upper(type.dictTypeName)=upper('"+hospitalDictType.getDictTypeName()+"')";

        if("".equals(id)||null==id){
            List<HospitalDictType> resultList = baseFacade.createQuery(HospitalDictType.class, hql, new ArrayList<Object>()).getResultList();
            if(resultList.size()>0){
                throw new ErrorException("字典已经存在，不能新增") ;
            }
        }

        HospitalDictType dict = baseFacade.merge(hospitalDictType);
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
     * 删除医院字典
     * @param id
     * @return
     */
    @POST
    @Path("hosp-dict-type-del")
    @Transactional
    public Response delHospDictType(@QueryParam("id") String id){
        String delHql ="delete HospitalDictType where id='"+id+"'" ;
        String delBase = "delete HospitalDict where typeId='"+id+"'" ;
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
    /**
     * 删除键值
     * @param id
     * @return
     */
    @POST
    @Path("hosp-dict-del")
    @Transactional
    public Response delHospDict(@QueryParam("id") String id){
        String delBase = "delete HospitalDict where id='"+id+"'" ;
        baseFacade.executeUpdate(delBase);
        return Response.status(Response.Status.OK).build();
    }

    /**
     * 同步服务器字典
     * @param hospitalId
     * @return
     */
    @POST
    @Path("syn-base")
    @Transactional
    public Response synHospAndSystem(@QueryParam("hospitalId")String hospitalId){


        //删除之前的数据
        List<HospitalDictType> preHospitalDictTypes = this.listBaseDictType(hospitalId) ;
        for(HospitalDictType hospitalDictType :preHospitalDictTypes){
            String hql1 = "delete HospitalDict as d where d.typeId='"+hospitalDictType.getId()+"'" ;
            baseFacade.executeUpdate(hql1);
            baseFacade.remove(hospitalDictType);
        }


        List<BaseDictType> baseDictTypes = this.listBaseDictType() ;
        for(BaseDictType baseDictType:baseDictTypes){
            HospitalDictType hospitalDictType = new HospitalDictType() ;
            hospitalDictType.setHospitalId(hospitalId);
            hospitalDictType.setDictTypeDesc(baseDictType.getDictTypeDesc());
            hospitalDictType.setDictTypeName(baseDictType.getDictTypeName());

            HospitalDictType mergeHospitalDictType = baseFacade.merge(hospitalDictType);

            List<BaseDict> baseDicts =this.listBaseDictByType(baseDictType.getId()) ;
            for(BaseDict dict:baseDicts){
                HospitalDict hospitalDict = new HospitalDict() ;
                hospitalDict.setDictName(dict.getDictName());
                hospitalDict.setDictValue(dict.getDictValue());
                hospitalDict.setInputCode(dict.getInputCode());
                hospitalDict.setTypeId(mergeHospitalDictType.getId());
                baseFacade.merge(hospitalDict);
            }
        }
        return Response.status(Response.Status.OK).build();
    }

}
