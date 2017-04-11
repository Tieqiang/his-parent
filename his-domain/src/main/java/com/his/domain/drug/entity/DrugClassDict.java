package com.his.domain.drug.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by Administrator on 2017/4/10.
 */
@Entity
@Table(name = "drug_class_dict", schema = "his", catalog = "")
public class DrugClassDict {
    private String id;
    private String drugClassName;
    private String drugClassCode;
    private String parentId;

    @Id
    @GenericGenerator(strategy = "uuid.hex",name="generator")
    @GeneratedValue(generator = "generator")
    @Column(name = "id")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Basic
    @Column(name = "drug_class_name")
    public String getDrugClassName() {
        return drugClassName;
    }

    public void setDrugClassName(String drugClassName) {
        this.drugClassName = drugClassName;
    }

    @Basic
    @Column(name = "drug_class_code")
    public String getDrugClassCode() {
        return drugClassCode;
    }

    public void setDrugClassCode(String drugClassCode) {
        this.drugClassCode = drugClassCode;
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

        DrugClassDict that = (DrugClassDict) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (drugClassName != null ? !drugClassName.equals(that.drugClassName) : that.drugClassName != null)
            return false;
        if (drugClassCode != null ? !drugClassCode.equals(that.drugClassCode) : that.drugClassCode != null)
            return false;
        if (parentId != null ? !parentId.equals(that.parentId) : that.parentId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (drugClassName != null ? drugClassName.hashCode() : 0);
        result = 31 * result + (drugClassCode != null ? drugClassCode.hashCode() : 0);
        result = 31 * result + (parentId != null ? parentId.hashCode() : 0);
        return result;
    }
}
