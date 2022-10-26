package com.hitejinro.controller;

import com.hitejinro.controller.common.CommonControllerTest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class CustomerControllerTest extends CommonControllerTest {

    @Test
    @DisplayName("거래처 검색 테스트")
    void 거래처_검색_테스트() throws Exception {
        mockMvc.perform(get("/ezgen/customers")
                        .param("searchText", "T")
                        .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk());
    }
}