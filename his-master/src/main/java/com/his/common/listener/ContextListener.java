package com.his.common.listener;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import com.his.common.modual.CompsiteModul;

/**
 * Created by heren on 2015/8/24.
 */
public class ContextListener extends GuiceServletContextListener {

    @Override
    protected Injector getInjector() {
        CompsiteModul modul = new CompsiteModul() ;
        return Guice.createInjector(modul);
    }

}
