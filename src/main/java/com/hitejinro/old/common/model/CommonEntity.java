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
package com.hitejinro.old.common.model;

/**
 * @Class Name : CommonEntity.java
 * @Description : CommonEntity Class
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2009.03.16           최초생성
 *
 * @author 프로모션 구축팀
 * @since 2009. 03.16
 * @version 1.0
 * @see
 *
 *  Copyright (C) by MOPAS All right reserved.
 */
public class CommonEntity {

    private static final long serialVersionUID = 1L;

    private String clsCd;             //분류코드(PK)

    private String cmmnCd;            //공통코드(PK)

    private String cmmnCdnmKor;       //공통코드명(한글명)

    private String cmmnCdnmEng;       //공통코드명(영문명)

    private String cmmnCdnmChn;       //공통코드명(중국명)

    private String cmmnCdnmJpn;       //공통코드명(일본명)

    private String upperClsCd;        //상위 분류코드

    private String upperCmmnCd;       //상위 공통코드

    private String sortseq;           //정렬순서

    private String useYn;             //사용여부(Y/N)

    private String regEmpno;          //등록 사번

    private String regDtime;          //등록일시

    private String modEmpno;          //수정 사번

    private String modDtime;          //수정일시

    public String getClsCd() {
        return clsCd;
    }

    public void setClsCd(String clsCd) {
        this.clsCd = clsCd;
    }

    public String getCmmnCd() {
        return cmmnCd;
    }

    public void setCmmnCd(String cmmnCd) {
        this.cmmnCd = cmmnCd;
    }

    public String getCmmnCdnmKor() {
        return cmmnCdnmKor;
    }

    public void setCmmnCdnmKor(String cmmnCdnmKor) {
        this.cmmnCdnmKor = cmmnCdnmKor;
    }

    public String getCmmnCdnmEng() {
        return cmmnCdnmEng;
    }

    public void setCmmnCdnmEng(String cmmnCdnmEng) {
        this.cmmnCdnmEng = cmmnCdnmEng;
    }

    public String getCmmnCdnmChn() {
        return cmmnCdnmChn;
    }

    public void setCmmnCdnmChn(String cmmnCdnmChn) {
        this.cmmnCdnmChn = cmmnCdnmChn;
    }

    public String getCmmnCdnmJpn() {
        return cmmnCdnmJpn;
    }

    public void setCmmnCdnmJpn(String cmmnCdnmJpn) {
        this.cmmnCdnmJpn = cmmnCdnmJpn;
    }

    public String getUpperClsCd() {
        return upperClsCd;
    }

    public void setUpperClsCd(String upperClsCd) {
        this.upperClsCd = upperClsCd;
    }

    public String getUpperCmmnCd() {
        return upperCmmnCd;
    }

    public void setUpperCmmnCd(String upperCmmnCd) {
        this.upperCmmnCd = upperCmmnCd;
    }

    public String getSortseq() {
        return sortseq;
    }

    public void setSortseq(String sortseq) {
        this.sortseq = sortseq;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getRegEmpno() {
        return regEmpno;
    }

    public void setRegEmpno(String regEmpno) {
        this.regEmpno = regEmpno;
    }

    public String getRegDtime() {
        return regDtime;
    }

    public void setRegDtime(String regDtime) {
        this.regDtime = regDtime;
    }

    public String getModEmpno() {
        return modEmpno;
    }

    public void setModEmpno(String modEmpno) {
        this.modEmpno = modEmpno;
    }

    public String getModDtime() {
        return modDtime;
    }

    public void setModDtime(String modDtime) {
        this.modDtime = modDtime;
    }


}
