package com.his.domain.hospbase.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by Administrator on 2017/3/22.
 */
@Entity
@Table(name = "dept_dict", schema = "his", catalog = "")
public class DeptDict {
    private String id;
    private String deptName;
    private String deptCode;
    private String hospId;
    private String parentId;

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
    @Column(name = "dept_name")
    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    @Basic
    @Column(name = "dept_code")
    public String getDeptCode() {
        return deptCode;
    }

    public void setDeptCode(String deptCode) {
        this.deptCode = deptCode;
    }

    @Basic
    @Column(name = "hosp_id")
    public String getHospId() {
        return hospId;
    }

    public void setHospId(String hospId) {
        this.hospId = hospId;
    }

    @Basic
    @Column(name = "parent_id")
    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        DeptDict deptDict = (DeptDict) o;

        if (id != null ? !id.equals(deptDict.id) : deptDict.id != null) return false;
        if (deptName != null ? !deptName.equals(deptDict.deptName) : deptDict.deptName != null) return false;
        if (deptCode != null ? !deptCode.equals(deptDict.deptCode) : deptDict.deptCode != null) return false;
        if (hospId != null ? !hospId.equals(deptDict.hospId) : deptDict.hospId != null) return false;
        if (parentId != null ? !parentId.equals(deptDict.parentId) : deptDict.parentId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (deptName != null ? deptName.hashCode() : 0);
        result = 31 * result + (deptCode != null ? deptCode.hashCode() : 0);
        result = 31 * result + (hospId != null ? hospId.hashCode() : 0);
        result = 31 * result + (parentId != null ? parentId.hashCode() : 0);
        return result;
    }
}
