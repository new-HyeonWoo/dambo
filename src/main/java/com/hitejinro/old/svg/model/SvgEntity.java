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
package com.hitejinro.old.svg.model;

import com.hitejinro.old.common.model.BaseVO;

/**
 * @Class Name : KakaoEntity.java
 * @Description : KakaoEntity Class
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2021.05.28 JWJ           최초생성
 *
 * @author 개발프레임웍크 실행환경 개발팀
 * @since 2009. 03.16
 * @version 1.0
 * @see
 *
 *  Copyright (C) by MOPAS All right reserved.
 */
public class SvgEntity extends BaseVO{

	/* SUREDATA@DBLINK_SMSSEND */
    private int seqno;
    private String imgOrgNm;
    private String imgNm;
    private String pngData;
    private String svgData;
    private String imgPath;
    
	public int getSeqno() {
		return seqno;
	}
	public void setSeqno(int seqno) {
		this.seqno = seqno;
	}
	public String getImgOrgNm() {
		return imgOrgNm;
	}
	public void setImgOrgNm(String imgOrgNm) {
		this.imgOrgNm = imgOrgNm;
	}
	public String getImgNm() {
		return imgNm;
	}
	public void setImgNm(String imgNm) {
		this.imgNm = imgNm;
	}
	public String getSvgData() {
		return svgData;
	}
	public void setSvgData(String svgData) {
		this.svgData = svgData;
	}
	public String getImgPath() {
		return imgPath;
	}
	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}
	public String getPngData() {
		return pngData;
	}
	public void setPngData(String pngData) {
		this.pngData = pngData;
	}

    

}
