package com.hitejinro.configuration.component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.hitejinro.common.constants.Constants;
import com.hitejinro.dto.response.EapResponse;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;

@SpringBootTest
class EapComponentTest {
    private static final ObjectMapper objectMapper = new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT);

    @Autowired
    private EapComponent eapComponent;

    @Test
    void 테스트_결재팝업URL요청() throws JsonProcessingException {
        EapResponse response = eapComponent.getPopupUrl(fixture());
        System.out.println(objectMapper.writeValueAsString(response));
    }

    private static HashMap fixture() {
        HashMap parameters = new HashMap<>();
        parameters.put("apprslYear", "2022");
        parameters.put("apprslSn", "999999");
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
        parameter.put("reqDeptCode", "2079736");
        parameter.put("chgEmpNo", "");
        parameter.put("chgDeptCode", "");

        HashMap<String, String> preDatas = new HashMap<>();
        preDatas.put("html", "https://rvsdev.hitejinro.com/view/es81/w02.do?yyyy=2022&seq=999100&sec_code=105&proc_div=11&auth=W&bid_use=&pre_yyyy=&pre_seq=");

        parameters.put("header", header);
        parameters.put("parameter", parameter);
        parameters.put("preDatas", preDatas);

        return parameters;
    }
}