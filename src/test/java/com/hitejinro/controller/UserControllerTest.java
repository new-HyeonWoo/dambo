package com.hitejinro.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.hitejinro.common.http.ResultResponse;
import com.hitejinro.controller.common.CommonControllerTest;
import com.hitejinro.dto.request.SearchUserRequest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

class UserControllerTest  extends CommonControllerTest {

//    @DisplayName("샘플")
//    @Test
//    void sample() throws Exception {
//        mockMvc.perform(get("/sample/search-user")
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk());
//    }
}