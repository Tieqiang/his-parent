package com.his.domain.hospbase.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by Administrator on 2017/3/22.
 */
@Entity
@Table(name = "hospital_dict_type", schema = "his", catalog = "")
public class HospitalDictType {
    private String id;
    private String dictTypeName;
    private String dictTypeDesc;
    private String hospitalId;

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
    @Column(name = "dict_type_name")
    public String getDictTypeName() {
        return dictTypeName;
    }

    public void setDictTypeName(String dictTypeName) {
        this.dictTypeName = dictTypeName;
    }

    @Basic
    @Column(name = "dict_type_desc")
    public String getDictTypeDesc() {
        return dictTypeDesc;
    }

    public void setDictTypeDesc(String dictTypeDesc) {
        this.dictTypeDesc = dictTypeDesc;
    }

    @Basic
    @Column(name = "hospital_id")
    public String getHospitalId() {
        return hospitalId;
    }

    public void setHospitalId(String hospitalId) {
        this.hospitalId = hospitalId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        HospitalDictType that = (HospitalDictType) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (dictTypeName != null ? !dictTypeName.equals(that.dictTypeName) : that.dictTypeName != null) return false;
        if (dictTypeDesc != null ? !dictTypeDesc.equals(that.dictTypeDesc) : that.dictTypeDesc != null) return false;
        if (hospitalId != null ? !hospitalId.equals(that.hospitalId) : that.hospitalId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (dictTypeName != null ? dictTypeName.hashCode() : 0);
        result = 31 * result + (dictTypeDesc != null ? dictTypeDesc.hashCode() : 0);
        result = 31 * result + (hospitalId != null ? hospitalId.hashCode() : 0);
        return result;
    }
}
