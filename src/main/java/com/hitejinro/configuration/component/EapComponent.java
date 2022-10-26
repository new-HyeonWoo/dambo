package com.hitejinro.configuration.component;

import com.fasterxml.jackson.core.type.TypeReference;
import com.hitejinro.common.enums.ErrorMessageType;
import com.hitejinro.common.util.AssertUtil;
import com.hitejinro.dto.response.EapResponse;
import com.hitejinro.configuration.properties.EapProperty;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class EapComponent {
    private final EapProperty eapProperty;
    private final RestTemplate eapRestTemplate;

    public EapResponse getPopupUrl(HashMap<String, HashMap<String, String>> parameters) {
        try {
            ResponseEntity<EapResponse> response =
                    eapRestTemplate.exchange(
                            StringUtils.join(eapProperty.getUrl(), "/rdb/rest_bridge.nsf/restapi?openagent")
                            , HttpMethod.POST
                            , new HttpEntity<>(parameters, getHttpHeaders())
                            , EapResponse.class);

            AssertUtil.isTrue(HttpStatus.OK.equals(response.getStatusCode()), ErrorMessageType.INTERNAL_SERVER_ERROR);

            return response.getBody();
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    private HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        return headers;
    }
}
