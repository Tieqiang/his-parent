package com.his.domain.system.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by Administrator on 2017/4/2.
 */
@Entity
@Table(name = "sys_base_dict_vs_hospital_dict", schema = "his", catalog = "")
public class SysBaseDictVsHospitalDict {
    private String id;
    private String sysBaseDictId;
    private String hospitalDictId;
    private String hospitalId ;

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
    @Column(name = "sys_base_dict_id")
    public String getSysBaseDictId() {
        return sysBaseDictId;
    }

    public void setSysBaseDictId(String sysBaseDictId) {
        this.sysBaseDictId = sysBaseDictId;
    }

    @Basic
    @Column(name = "hospital_dict_id")
    public String getHospitalDictId() {
        return hospitalDictId;
    }

    public void setHospitalDictId(String hospitalDictId) {
        this.hospitalDictId = hospitalDictId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SysBaseDictVsHospitalDict that = (SysBaseDictVsHospitalDict) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (sysBaseDictId != null ? !sysBaseDictId.equals(that.sysBaseDictId) : that.sysBaseDictId != null)
            return false;
        if (hospitalDictId != null ? !hospitalDictId.equals(that.hospitalDictId) : that.hospitalDictId != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (sysBaseDictId != null ? sysBaseDictId.hashCode() : 0);
        result = 31 * result + (hospitalDictId != null ? hospitalDictId.hashCode() : 0);
        return result;
    }

    @Column(name="hospital_id")
    public String getHospitalId() {
        return hospitalId;
    }

    public void setHospitalId(String hospitalId) {
        this.hospitalId = hospitalId;
    }
}
