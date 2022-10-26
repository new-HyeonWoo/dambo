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
package com.hitejinro.old.approval.model;

import com.hitejinro.old.common.model.BaseVO;
import lombok.Builder;
import lombok.Getter;

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
@Builder
@Getter
public class ApprovalEntity extends BaseVO{

	private String apprslYear;
	private String apprslSn;
	private String hqBhfSeCd;
	private String sanctnSn;
	private String trnscId;
	private String sanctnFormatCd;
	private String docSj;
	private String intrfcId;
	private String chargerDeptCd;
	private String recptnSysId;
	private String bhfLastSanctnerAt;
	private String succesAtcd;
	private String drafterEmpno;
	private String sanctnDt;
	private String sanctnDocBdt;
	private String errorDetailDtls;
	private String chargerEmpno;
	private String recptnDeptCd;
	private String requstSysId;
	private String requstDt;
	private String sanctnDocUrl;
	private String trnsmisSttus;
	private String sanctnSttus;
	private String updtEmplNo;
	private String registEmplNo;
	private String sanctnerEmpno;
	private String registDt;
	private String drafterDeptCd;
	private String updtEmplIp;
	private String registEmplIp;
	private String updtDt;
	private String rspnsDt;
}
