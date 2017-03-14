package com.his.domain.system.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by heren on 2017/3/12.
 */
@Entity
@Table(name = "menu_dict", schema = "", catalog = "his")
public class MenuDict {
    private String menuName;
    private String menuState;
    private String menuHref;
    private String moduleId;
    private String parentMenuId;
    private String id;
    private String icon;

    @Basic
    @Column(name = "menu_name")
    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    @Basic
    @Column(name = "menu_state")
    public String getMenuState() {
        return menuState;
    }

    public void setMenuState(String menuState) {
        this.menuState = menuState;
    }

    @Basic
    @Column(name = "menu_href")
    public String getMenuHref() {
        return menuHref;
    }

    public void setMenuHref(String menuHref) {
        this.menuHref = menuHref;
    }

    @Basic
    @Column(name = "module_id")
    public String getModuleId() {
        return moduleId;
    }

    public void setModuleId(String moduleId) {
        this.moduleId = moduleId;
    }

    @Basic
    @Column(name = "parent_menu_id")
    public String getParentMenuId() {
        return parentMenuId;
    }

    public void setParentMenuId(String parentMenuId) {
        this.parentMenuId = parentMenuId;
    }

    @GenericGenerator(name = "generator", strategy = "uuid.hex")
    @Id
    @GeneratedValue(generator = "generator")
    @Column(name = "id")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Basic
    @Column(name = "icon")
    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MenuDict menuDict = (MenuDict) o;

        if (icon != null ? !icon.equals(menuDict.icon) : menuDict.icon != null) return false;
        if (id != null ? !id.equals(menuDict.id) : menuDict.id != null) return false;
        if (menuHref != null ? !menuHref.equals(menuDict.menuHref) : menuDict.menuHref != null) return false;
        if (menuName != null ? !menuName.equals(menuDict.menuName) : menuDict.menuName != null) return false;
        if (menuState != null ? !menuState.equals(menuDict.menuState) : menuDict.menuState != null) return false;
        if (moduleId != null ? !moduleId.equals(menuDict.moduleId) : menuDict.moduleId != null) return false;
        if (parentMenuId != null ? !parentMenuId.equals(menuDict.parentMenuId) : menuDict.parentMenuId != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = menuName != null ? menuName.hashCode() : 0;
        result = 31 * result + (menuState != null ? menuState.hashCode() : 0);
        result = 31 * result + (menuHref != null ? menuHref.hashCode() : 0);
        result = 31 * result + (moduleId != null ? moduleId.hashCode() : 0);
        result = 31 * result + (parentMenuId != null ? parentMenuId.hashCode() : 0);
        result = 31 * result + (id != null ? id.hashCode() : 0);
        result = 31 * result + (icon != null ? icon.hashCode() : 0);
        return result;
    }
}
