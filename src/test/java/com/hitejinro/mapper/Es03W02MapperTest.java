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
class Es03W02MapperTest {

    private static final ObjectMapper objectMapper = new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT);

    @Autowired
    Es03W02Mapper es03W02Mapper;

    @Test
    void selectList5() throws JsonProcessingException {
        HashMap<String, Object> params = new HashMap<>();
        params.put("00_감정일자_부터"," 20220326");
        params.put("01_감정일자_까지"," 20220926");
        params.put("02_주소","");
        params.put("03_예상낙찰가_최저"," 0");
        params.put("04_예상낙찰가_최고"," 9000000000000");
        params.put("05_담보종류","'101','102','104','105','401','402','501'");
        params.put("06_지점","'A12102','A13301','A31101','A31103','A31105','A31107','A31301','A31303','A31305','A31307','A31501','A31503','A31505','A31701','A31703','A31705','A31707','A31708','A31709','A31713','A31901','A31903','A31905','A31907','A31909','A32101','A32102','A32301','A32302','A32501','A32502','A32503','A33101','A33103','A33105','A33107','A33109','A33113','A33115','A35101','A35102','A35103','A35201','A35203','A35205','A35207','A35209','A37101','A37103','A37105','A37107','A37109','A37301','A37303','A37305','A37307','A37501','A37505','A38101','A38103','A38107'");
        params.put("07_최종평가가격_최저","0");
        params.put("08_최종평가가격_최고","10000000000");
        params.put("09_면적_토지_최저","0");
        params.put("10_면적_토지_최고","100000.00");
        params.put("11_면적_건물_최저","0");
        params.put("12_면적_건물_최고","100000.00");
        params.put("13_지목","'01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28'");
        params.put("14_1","거래처:");
        params.put("15_자체및업소","");
        params.put("03_낙찰가율_최저","0");
        params.put("03_낙찰가율_최고","100.00");
        params.put("16_합산_감정일자","0");
        params.put("17_합산_지점","0");
        params.put("18_합산_담보종류","0");
        params.put("19_합산_업소구분","0");
        params.put("name","Q_담보목록");
        params.put("type","999");

        objectMapper.writeValueAsString(es03W02Mapper.selectList5(params));
    }

}