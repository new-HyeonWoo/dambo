package com.hitejinro.mapper;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import java.util.HashMap;

@ExtendWith(MockitoExtension.class)
@MybatisTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class ProcedureMapperTest {
    private static final ObjectMapper objectMapper = new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT);

    @Autowired
    private ProcedureMapper procedureMapper;

    @Test
    void callProcedure1() throws JsonProcessingException {
        HashMap params = new HashMap();
        params.put("IN_YYYY", "2022");
        params.put("IN_SEQ", "016201");
        params.put("OUT_YN", "");

        procedureMapper.callProcedure1(params);
        System.out.println(
                objectMapper.writeValueAsString(params));
    }
}