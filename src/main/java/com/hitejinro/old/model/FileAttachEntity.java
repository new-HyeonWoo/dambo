/*
 * Copyright 2008-2009 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.hitejinro.old.model;

import com.hitejinro.old.common.model.BaseVO;

//import egovframework.example.sample.service.SampleDefaultVO;

/**
 * @Class Name : FileAttachEntity.java
 * @Description : FileAttachEntity Class
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2021.05.27  JWJ        최초생성
 *
 * @author 개발프레임웍크 실행환경 개발팀
 * @since 2009. 03.16
 * @version 1.0
 * @see
 *
 *  Copyright (C) by MOPAS All right reserved.
 */
public class FileAttachEntity extends BaseVO {

	/* 프로모션 파일첨부 테이블(PR_CO_ATCHMN_FL_MNG) */
	private String prmtNo;
	private int atchmnSn;
	private int flSeq;
	private String atchmnflTypeCd;
	private String orgFlNm;
	private String atchmnFlNm;
	private int atchmnflSize;
	private String atchmnflPath;
	private String eloquaImageUrl;
	private String deleteYn;
	
	private String regEmpNo;
    private String updEmpNo;
	
	public String getPrmtNo() {
		return prmtNo;
	}

	public void setPrmtNo(String prmtNo) {
		this.prmtNo = prmtNo;
	}
	
	public int getAtchmnSn() {
		return atchmnSn;
	}

	public void setAtchmnSn(int atchmnSn) {
		this.atchmnSn = atchmnSn;
	}
	
	public int getFlSeq() {
		return flSeq;
	}

	public void setFlSeq(int flSeq) {
		this.flSeq = flSeq;
	}
	
	public String getAtchmnflTypeCd() {
		return atchmnflTypeCd;
	}

	public void setAtchmnflTypeCd(String atchmnflTypeCd) {
		this.atchmnflTypeCd = atchmnflTypeCd;
	}
	
    public String getOrgFlNm() {
		return orgFlNm;
	}

	public void setOrgFlNm(String orgFlNm) {
		this.orgFlNm = orgFlNm;
	}
	
	public String getAtchmnFlNm() {
		return atchmnFlNm;
	}

	public void setAtchmnFlNm(String atchmnFlNm) {
		this.atchmnFlNm = atchmnFlNm;
	}
	
	public int getAtchmnflSize() {
		return atchmnflSize;
	}

	public void setAtchmnflSize(int atchmnflSize) {
		this.atchmnflSize = atchmnflSize;
	}
	
	public String getAtchmnflPath() {
		return atchmnflPath;
	}

	public void setAtchmnflPath(String atchmnflPath) {
		this.atchmnflPath = atchmnflPath;
	}
	
	public String getEloquaImageUrl() {
		return eloquaImageUrl;
	}

	public void setEloquaImageUrl(String eloquaImageUrl) {
		this.eloquaImageUrl = eloquaImageUrl;
	}
	
	public String getDeleteYn() {
		return deleteYn;
	}

	public void setDeleteYn(String deleteYn) {
		this.deleteYn = deleteYn;
	}
	
	public String getRegEmpNo() {
        return regEmpNo;
    }

    public void setRegEmpNo(String regEmpNo) {
        this.regEmpNo = regEmpNo;
    }

    public String getUpdEmpNo() {
        return updEmpNo;
    }

    public void setUpdEmpNo(String updEmpNo) {
        this.updEmpNo = updEmpNo;
    }

}
