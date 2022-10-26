package com.hitejinro.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.hitejinro.common.constants.Constants;
import com.hitejinro.old.approval.model.ApprovalEntity;
import com.hitejinro.old.approval.repository.ApprovalMapper;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.restdocs.RestDocumentationContextProvider;
import org.springframework.restdocs.RestDocumentationExtension;
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Optional;

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith({RestDocumentationExtension.class, SpringExtension.class})
@SpringBootTest
class ExternalControllerTest {
    private final ObjectMapper objectMapper = new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT);
    private MockMvc mockMvc;

    @Autowired
    private ApprovalMapper approvalMapper;

    @BeforeEach
    public void setUp(WebApplicationContext context, RestDocumentationContextProvider restDocumentation) {
        this.mockMvc = MockMvcBuilders
                .webAppContextSetup(context)
                .addFilters(new CharacterEncodingFilter("UTF-8", true))
                .apply(MockMvcRestDocumentation.documentationConfiguration(restDocumentation)
                        .uris().withScheme("https").withHost("rvsdev.hitejinro.com").withPort(443))
                .build();
    }

    @DisplayName("전자결재 팝업 요청")
    @Test
    @Transactional
    void popup() throws Exception {
        HashMap fixture = fixture();
        mockMvc.perform(post("/external/eap/popup")
                        .content(objectMapper.writeValueAsString(fixture))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk());

        HashMap<String, String> header = (HashMap<String, String>) fixture.get("header");
        ApprovalEntity selectApprovalInfo = approvalMapper.selectApprovalInfo(ApprovalEntity.builder()
                .trnscId(header.get("txID"))
                .intrfcId(header.get("reqID"))
                .requstSysId(header.get("userID"))
                .recptnSysId(header.get("systemID"))
                .requstDt(header.get("reqDt")).build());

        System.out.println(objectMapper.writeValueAsString(selectApprovalInfo));

        Assertions.assertThat(selectApprovalInfo).isNotNull();
    }

    @DisplayName("전자결재 상태수정 요청")
    @Test
    @Transactional
    void updateApproval() throws Exception {
        ApprovalEntity approvalEntity = beforeInsert();
        HashMap updateFixture = updateFixture(approvalEntity);

        mockMvc.perform(post("/external/eap/approval")
                        .content(objectMapper.writeValueAsString(updateFixture))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("update-approval"));

        ApprovalEntity selectApprovalInfo = approvalMapper.selectApprovalInfo(approvalEntity);
        System.out.println(objectMapper.writeValueAsString(selectApprovalInfo));

        String status = approvalMapper.selectStatus(selectApprovalInfo);
        System.out.println("Status: " + status);

        Assertions.assertThat(status).isEqualTo(
                Optional.of(updateFixture)
                        .map(item -> (HashMap) item.get("parameter"))
                        .map(item -> item.get("docStatus"))
                        .orElse("NULL"));
    }

    private ApprovalEntity beforeInsert() throws Exception {
        HashMap fixture = fixture();
        mockMvc.perform(post("/external/eap/popup")
                        .content(objectMapper.writeValueAsString(fixture))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk());

        HashMap<String, String> header = (HashMap<String, String>) fixture.get("header");
        ApprovalEntity selectApprovalInfo = approvalMapper.selectApprovalInfo(ApprovalEntity.builder()
                .trnscId(header.get("txID"))
                .intrfcId(header.get("reqID"))
                .requstSysId(header.get("userID"))
                .recptnSysId(header.get("systemID"))
                .requstDt(header.get("reqDt")).build());

        System.out.println(objectMapper.writeValueAsString(selectApprovalInfo));

        return selectApprovalInfo;
    }

    private static HashMap updateFixture() {
        HashMap parameters = new HashMap<>();

        HashMap<String, String> header = new HashMap<>();
        String nowDate = LocalDateTime.now(Constants.GLOBAL_ZONE_ID).format(DateTimeFormatter.ofPattern("yyyyMMddHH24mm"));

        header.put("txID", "220916105316-WHSL");
        header.put("reqID", "req1663292588047");
        header.put("userID", "HJ04-GW");
        header.put("systemID", "HJ-ESH");
        header.put("reqDt", "20220916105316");

        HashMap<String, String> parameter = new HashMap<>();
        parameter.put("aprvEmpno", "108231");
        parameter.put("aprvDt", "20220916105316");
        parameter.put("docStatus", "20");
        parameter.put("url", "url\":\"https://epdev.hitejinro.com/egate/kr/eip/home/home.nsf/openpage?readform&url=/approve/approve.nsf/0/64BCD801F0A847F1492588BF000A6644?opendocument&is_popup=1");

        parameters.put("header", header);
        parameters.put("parameter", parameter);

        return parameters;
    }

    private static HashMap updateFixture(ApprovalEntity approvalEntity) {
        HashMap parameters = new HashMap<>();

        HashMap<String, String> header = new HashMap<>();
        String nowDate = LocalDateTime.now(Constants.GLOBAL_ZONE_ID).format(DateTimeFormatter.ofPattern("yyyyMMddHH24mm"));

        header.put("txID", approvalEntity.getTrnscId());
        header.put("reqID", approvalEntity.getIntrfcId());
        header.put("userID", approvalEntity.getRequstSysId());
        header.put("systemID", approvalEntity.getRecptnSysId());
        header.put("formKey", approvalEntity.getSanctnFormatCd());
        header.put("reqDt", approvalEntity.getRequstDt());

        HashMap<String, String> parameter = new HashMap<>();
        parameter.put("aprvEmpno", "108231");
        parameter.put("aprvDt", nowDate);
        parameter.put("docStatus", "40");
        parameter.put("url", "https://rvsdev.hitejinro.com");

        parameters.put("header", header);
        parameters.put("parameter", parameter);

        return parameters;
    }

    private static HashMap fixture() {
        HashMap parameters = new HashMap<>();
        parameters.put("apprslYear", "2022");
        parameters.put("apprslSn", "004101");
        parameters.put("hqBhfSeCd", "1");
        parameters.put("sanctnSn", "4");

        HashMap<String, String> header = new HashMap<>();

        String nowDate = LocalDateTime.now(Constants.GLOBAL_ZONE_ID).format(DateTimeFormatter.ofPattern("yyyyMMddHH24mm"));

        header.put("txID", "tx" + nowDate);
        header.put("reqID", "req" + nowDate);
        header.put("userID", "HJ-ESH");
        header.put("systemID", "HJ04-GW");
        header.put("formKey", "sf_APP$realestate_v2");
        header.put("reqDt", nowDate);

        HashMap<String, String> parameter = new HashMap<>();
        parameter.put("subject", "테스트");
        parameter.put("reqEmpNo", "108231");
        parameter.put("reqDeptCode", "");
        parameter.put("chgEmpNo", "");
        parameter.put("chgDeptCode", "");

        HashMap<String, String> preDatas = new HashMap<>();
        preDatas.put("html", "https://rvsdev.hitejinro.com/view/es01/w02/3?sec_code=104&liquor_type=10&proc_div=21&auth=I&sec_yn=N&bid_use=N&uDept=IT%EC%9A%B4%EC%98%81%ED%8C%80&uDeptCd=2079736&uName=%EA%B9%80%EC%9A%B0%ED%98%84&uEmpNo=108231&uJikWi=%EC%A7%81%EC%9C%84&uJikName=%EB%8B%B4%EB%8B%B9");

        parameters.put("header", header);
        parameters.put("parameter", parameter);
        parameters.put("preDatas", preDatas);

        return parameters;
    }
}