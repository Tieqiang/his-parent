package com.his.domain.hospbase.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by Administrator on 2017/3/30.
 */
@Entity
@Table(name = "staff_dict", schema = "his", catalog = "")
public class StaffDict {
    private String id;
    private String staffName;
    private String loginName;
    private String password;
    private String title;
    private String hospitalId;
    private String deptId;
    private String status ;

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
    @Column(name = "staff_name")
    public String getStaffName() {
        return staffName;
    }

    public void setStaffName(String staffName) {
        this.staffName = staffName;
    }

    @Basic
    @Column(name = "login_name")
    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    @Basic
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "title")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Basic
    @Column(name = "hospital_id")
    public String getHospitalId() {
        return hospitalId;
    }

    public void setHospitalId(String hospitalId) {
        this.hospitalId = hospitalId;
    }

    @Basic
    @Column(name = "dept_id")
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

        StaffDict staffDict = (StaffDict) o;

        if (id != null ? !id.equals(staffDict.id) : staffDict.id != null) return false;
        if (staffName != null ? !staffName.equals(staffDict.staffName) : staffDict.staffName != null) return false;
        if (loginName != null ? !loginName.equals(staffDict.loginName) : staffDict.loginName != null) return false;
        if (password != null ? !password.equals(staffDict.password) : staffDict.password != null) return false;
        if (title != null ? !title.equals(staffDict.title) : staffDict.title != null) return false;
        if (hospitalId != null ? !hospitalId.equals(staffDict.hospitalId) : staffDict.hospitalId != null) return false;
        if (deptId != null ? !deptId.equals(staffDict.deptId) : staffDict.deptId != null) return false;

        return true;
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

    @Column(name="status")
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
