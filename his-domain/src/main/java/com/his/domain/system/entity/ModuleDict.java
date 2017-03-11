package com.his.domain.system.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by heren on 2017/3/10.
 */
@Entity
@Table(name = "module_dict", schema = "", catalog = "his")
public class ModuleDict {
    private String id;
    private String moduleName;
    private String icon;
    private String state ;

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
    @Column(name = "module_name")
    public String getModuleName() {
        return moduleName;
    }

    public void setModuleName(String moduleName) {
        this.moduleName = moduleName;
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

        ModuleDict that = (ModuleDict) o;

        if (icon != null ? !icon.equals(that.icon) : that.icon != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (moduleName != null ? !moduleName.equals(that.moduleName) : that.moduleName != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (moduleName != null ? moduleName.hashCode() : 0);
        result = 31 * result + (icon != null ? icon.hashCode() : 0);
        return result;
    }

    @Basic
    @Column(name="state")
    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
