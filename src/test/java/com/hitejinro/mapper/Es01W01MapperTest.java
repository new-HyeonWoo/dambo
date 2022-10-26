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
class Es01W01MapperTest {

    private static final ObjectMapper objectMapper = new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT);

    @Autowired
    Es01W01Mapper mapper;

    @Test
    void selectListAsConvert() throws Exception {
        HashMap<String, Object> params = new HashMap<>();
        params.put("년도", "2022");
        params.put("일련번호", "002501");

        objectMapper.writeValueAsString(mapper.selectList2AsConvert(params));
    }

    @Test
    void selectList5() throws JsonProcessingException {
        HashMap<String, Object> params = new HashMap<>();
        params.put("년도", "2022");
        params.put("일련번호", "002501");
        params.put("보고서구분", "0001");

        objectMapper.writeValueAsString(mapper.selectList5(params));
    }

}