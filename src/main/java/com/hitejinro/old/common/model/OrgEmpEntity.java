package com.hitejinro.old.common.model;

public class OrgEmpEntity {

	private String objId;
	
	private String objNm;
	
	private String parObjId;
	
	private String parObjNm;
	
	private String paraId;
	
	private String mailAddr;
	
	private int childDeptCount;
	
	private String empId;
	
	private String empNm;

	private String postNm;

	private String target;

	public String getObjId() {
		return objId;
	}

	public void setObjId(String objId) {
		this.objId = objId;
	}

	public String getObjNm() {
		return objNm;
	}

	public void setObjNm(String objNm) {
		this.objNm = objNm;
	}

	public String getParObjId() {
		return parObjId;
	}

	public void setParObjId(String parObjId) {
		this.parObjId = parObjId;
	}

	public String getParObjNm() {
		return parObjNm;
	}

	public void setParObjNm(String parObjNm) {
		this.parObjNm = parObjNm;
	}

	public int getChildDeptCount() {
		return childDeptCount;
	}

	public void setChildDeptCount(int childDeptCount) {
		this.childDeptCount = childDeptCount;
	}

	public String getEmpId() {
		return empId;
	}

	public void setEmpId(String empId) {
		this.empId = empId;
	}

	public String getEmpNm() {
		return empNm;
	}

	public void setEmpNm(String empNm) {
		this.empNm = empNm;
	}

	public String getPostNm() {
		return postNm;
	}

	public void setPostNm(String postNm) {
		this.postNm = postNm;
	}

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public String getParaId() {
        return paraId;
    }

    public void setParaId(String paraId) {
        this.paraId = paraId;
    }

    public String getMailAddr() {
        return mailAddr;
    }

    public void setMailAddr(String mailAddr) {
        this.mailAddr = mailAddr;
    }
}
