package com.his.domain.hospbase.vo;

import java.io.Serializable;

/**
 * 用户管理的VO类型
 * Created by Administrator on 2017/3/30.
 */
public class StaffVO implements Serializable {

    private String id;
    private String staffName;
    private String loginName;
    private String password;
    private String title;
    private String hospitalId;
    private String deptId;
    private String status ;



    public StaffVO(String id, String staffName, String loginName, String password, String title, String hospitalId, String deptId) {
        this.id = id;
        this.staffName = staffName;
        this.loginName = loginName;
        this.password = password;
        this.title = title;
        this.hospitalId = hospitalId;
        this.deptId = deptId;
    }

    public StaffVO() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getStaffName() {
        return staffName;
    }

    public void setStaffName(String staffName) {
        this.staffName = staffName;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getHospitalId() {
        return hospitalId;
    }

    public void setHospitalId(String hospitalId) {
        this.hospitalId = hospitalId;
    }

    public String getDeptId() {
        return deptId;
    }

    public void setDeptId(String deptId) {
        this.deptId = deptId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        StaffVO staffVO = (StaffVO) o;

        if (id != null ? !id.equals(staffVO.id) : staffVO.id != null) return false;
        if (staffName != null ? !staffName.equals(staffVO.staffName) : staffVO.staffName != null) return false;
        if (loginName != null ? !loginName.equals(staffVO.loginName) : staffVO.loginName != null) return false;
        if (password != null ? !password.equals(staffVO.password) : staffVO.password != null) return false;
        if (title != null ? !title.equals(staffVO.title) : staffVO.title != null) return false;
        if (hospitalId != null ? !hospitalId.equals(staffVO.hospitalId) : staffVO.hospitalId != null) return false;
        return deptId != null ? deptId.equals(staffVO.deptId) : staffVO.deptId == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (staffName != null ? staffName.hashCode() : 0);
        result = 31 * result + (loginName != null ? loginName.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (hospitalId != null ? hospitalId.hashCode() : 0);
        result = 31 * result + (deptId != null ? deptId.hashCode() : 0);
        return result;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
