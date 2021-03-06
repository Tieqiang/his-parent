package com.his.domain.system.vo;

/**
 *
 * 用于设置，系统字典与科室字典的对照关系，允许
 * 客户端通过配置，而获取到对应的键值对
 * Created by Administrator on 2017/4/2.
 */
public class BaseDictVsHospitalDict {
    private String id ;//sysBaseDict.id
    private String dictName ;
    private String dictValue ;
    private String hospitalId;
    private String hospitalDictId  ;


    public BaseDictVsHospitalDict(String id, String dictName, String dictValue, String hospitalId, String hospitalDictId) {
        this.id = id;
        this.dictName = dictName;
        this.dictValue = dictValue;
        this.hospitalId = hospitalId;
        this.hospitalDictId = hospitalDictId;
    }

    public BaseDictVsHospitalDict() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDictName() {
        return dictName;
    }

    public void setDictName(String dictName) {
        this.dictName = dictName;
    }

    public String getDictValue() {
        return dictValue;
    }

    public void setDictValue(String dictValue) {
        this.dictValue = dictValue;
    }

    public String getHospitalId() {
        return hospitalId;
    }

    public void setHospitalId(String hospitalId) {
        this.hospitalId = hospitalId;
    }

    public String getHospitalDictId() {
        return hospitalDictId;
    }

    public void setHospitalDictId(String hospitalDictId) {
        this.hospitalDictId = hospitalDictId;
    }
}
