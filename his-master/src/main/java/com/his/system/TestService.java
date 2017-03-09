package com.his.system;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.Date;

/**
 * Created by heren on 2017/3/9.
 */
@Produces("application/json")
@Path("test")
public class TestService {

    @GET
    @Produces("text/plain")
    public String getDate(){
        return new Date().toString();
    }


}
