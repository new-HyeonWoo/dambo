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
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
@MybatisTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class Es01W03MapperTest {

    private static final ObjectMapper objectMapper = new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT);

    @Autowired
    Es01W03Mapper es01W03Mapper;

    @Test
    void selectList131() throws JsonProcessingException {
        HashMap<String, Object> params = new HashMap<>();
        params.put("Combo_표준지_Count", "2");
        params.put("Combo_표준지_SQL1", "1");
        params.put("Combo_표준지_SQL2", "2");
        params.put("Combo_표준지_SQL3", "3");
        params.put("Combo_표준지_SQL4", "4");
        params.put("Combo_표준지_SQL5", "");
        params.put("Combo_표준지_SQL6", "");
        params.put("Combo_표준지_SQL7", "");
        params.put("Combo_표준지_SQL8", "");
        params.put("Combo_표준지_SQL9", "");
        params.put("Combo_표준지_SQL10", "");

        objectMapper.writeValueAsString(es01W03Mapper.selectList131WithCondition(params));
    }

}