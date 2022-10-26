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
package com.hitejinro.old.approval.service;

import com.hitejinro.common.enums.ApprovalConvertType;
import com.hitejinro.common.enums.ApprovalHistoryType;
import com.hitejinro.old.approval.model.ApprovalEntity;
import com.hitejinro.old.approval.repository.ApprovalMapper;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * @Class Name : ApprovalServiceImpl.java
 * @Description : 전자결제 Class
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2021.05.28  JWJ           최초생성
 *
 * @author 개발프레임웍크 실행환경 개발팀
 * @since 2009. 03.16
 * @version 1.0
 * @see
 *
 *  Copyright (C) by MOPAS All right reserved.
 */

@Service("approvalService")
@RequiredArgsConstructor
public class ApprovalServiceImpl implements ApprovalService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ApprovalServiceImpl.class);

    private final ApprovalMapper approvalMapper;

	@Override
	@Transactional(rollbackFor = Exception.class)
	public int insertApprovalInfo(ApprovalEntity appvalInfo) throws Exception {
		String fromType = approvalMapper.selectStatus(appvalInfo);
		ApprovalConvertType convertType = ApprovalConvertType.valueOf("15", fromType);

		approvalMapper.updateStatus(appvalInfo, convertType.getToType());
		return approvalMapper.insertApprovalInfo(appvalInfo);
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public int updateApprovalInfo(ApprovalEntity appvalInfo) throws Exception {
		approvalMapper.updateApprovalInfo(appvalInfo);

		ApprovalEntity updatedAppvalInfo = approvalMapper.selectApprovalInfo(appvalInfo);
		String fromType = approvalMapper.selectStatus(updatedAppvalInfo);
		ApprovalConvertType convertType = ApprovalConvertType.valueOf(updatedAppvalInfo.getSanctnSttus(), fromType);

		return approvalMapper.updateStatus(updatedAppvalInfo, convertType.getToType());
	}

	@Override
	public void insertHistory(ApprovalEntity appvalInfo, ApprovalHistoryType type) throws Exception {
		approvalMapper.insertApprovalHistory(appvalInfo, type.getType());
	}
}
