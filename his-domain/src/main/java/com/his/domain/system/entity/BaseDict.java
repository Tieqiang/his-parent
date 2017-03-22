package com.his.domain.system.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by Administrator on 2017/3/22.
 */
@Entity
@Table(name = "base_dict", schema = "his", catalog = "")
public class BaseDict {
    private String id;
    private String typeId;
    private String dictName;
    private String dictValue;
    private String inputCode ;

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
    @Column(name = "type_id")
    public String getTypeId() {
        return typeId;
    }

    public void setTypeId(String typeId) {
        this.typeId = typeId;
    }

    @Basic
    @Column(name = "dict_name")
    public String getDictName() {
        return dictName;
    }

    public void setDictName(String dictName) {
        this.dictName = dictName;
    }

    @Basic
    @Column(name = "dict_value")
    public String getDictValue() {
        return dictValue;
    }

    public void setDictValue(String dictValue) {
        this.dictValue = dictValue;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BaseDict baseDict = (BaseDict) o;

        if (id != null ? !id.equals(baseDict.id) : baseDict.id != null) return false;
        if (typeId != null ? !typeId.equals(baseDict.typeId) : baseDict.typeId != null) return false;
        if (dictName != null ? !dictName.equals(baseDict.dictName) : baseDict.dictName != null) return false;
        if (dictValue != null ? !dictValue.equals(baseDict.dictValue) : baseDict.dictValue != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (typeId != null ? typeId.hashCode() : 0);
        result = 31 * result + (dictName != null ? dictName.hashCode() : 0);
        result = 31 * result + (dictValue != null ? dictValue.hashCode() : 0);
        return result;
    }

    @Column(name="input_code")
    public String getInputCode() {
        return inputCode;
    }

    public void setInputCode(String inputCode) {
        this.inputCode = inputCode;
    }
}
