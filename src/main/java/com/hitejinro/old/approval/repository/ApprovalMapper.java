/*
 * Copyright 2011 MOPAS(Ministry of Public Administration and Security).
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
package com.hitejinro.old.approval.repository;

import com.hitejinro.old.approval.model.ApprovalEntity;
import org.apache.ibatis.annotations.Mapper;

/**
 * 전자결제 에 관한 데이터처리 매퍼 클래스
 *
 * @author  JWJ
 * @since 2021.05.28
 * @version 1.0
 * @see <pre>
 *  == 개정이력(Modification Information) ==
 *
 *          수정일          수정자           수정내용
 *  ----------------    ------------    ---------------------------
 *   2021.05.28         JWJ             최초 생성
 *
 * </pre>
 */
@Mapper
public interface ApprovalMapper {
	int insertApprovalInfo(ApprovalEntity appvalInfo) throws Exception;
//
    int updateApprovalInfo(ApprovalEntity appvalInfo) throws Exception;

    int insertApprovalHistory(ApprovalEntity appvalInfo, int type) throws Exception;

    ApprovalEntity selectApprovalInfo(ApprovalEntity appvalInfo) throws Exception;

    int updateStatus(ApprovalEntity appvalInfo, String convertType) throws Exception;

    String selectStatus(ApprovalEntity appvalInfo) throws Exception;

}
