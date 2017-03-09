package com.his.system;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;

import javax.ws.rs.POST;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

/**
 * Created by heren on 2017/3/9.
 */
@Produces("application/json")
public class LoginService {


    @POST
    public Response login(){
        Subject subject = SecurityUtils.getSubject();
        return Response.status(Response.Status.OK).build();
    }

}
