package com.his.system;

import com.google.inject.persist.Transactional;
import com.his.domain.common.entity.ErrorException;
import com.his.domain.common.facade.BaseFacade;
import com.his.domain.system.entity.MenuDict;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by heren on 2017/3/12.
 */
@Produces("application/json")
@Path("menu")
public class MenuService {

    private BaseFacade baseFacade ;

    @Inject
    public MenuService(BaseFacade baseFacade) {
        this.baseFacade = baseFacade;
    }


    /**
     * 查询模块的菜单
     * @param moduleId
     * @return
     */
    @GET
    @Path("list-menu-by-module")
    public List<MenuDict> listMenuDictByModuleId(@QueryParam("moduleId")String moduleId){
        String hql ="from MenuDict as m where m.moduleId='"+moduleId+"'" ;
        return baseFacade.createQuery(MenuDict.class,hql,new ArrayList<Object>()).getResultList();
    }


    /**
     * 修改菜单
     * @param menuDict
     * @return
     */
    @Transactional
    @POST
    @Path("merge")
    public Response mergeMenuDict(MenuDict menuDict){
        if("".equals(menuDict.getMenuName())||null==menuDict.getMenuName()){
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(new ErrorException("菜单名称为空")).build();
        }
        MenuDict menu = baseFacade.merge(menuDict);
        return Response.status(Response.Status.OK).entity(menu).build();
    }

    @POST
    @Transactional
    @Path("delete")
    public Response deleteMenuDict(List<String> ids){
        baseFacade.removeByStringIds(MenuDict.class,ids);
        return Response.status(Response.Status.OK).build();
    }


    /**
     * 根据当前登录人员与选择的模块加载菜单
     * @param moduleId
     * @param staffId
     * @return
     */
    @GET
    @Path("list-menu-module-staff")
    public List<MenuDict> listMenuDictByModuleAndStaff(@QueryParam("moduleId")String moduleId,@QueryParam("staffId")String staffId){
        return null ;
    }




}
