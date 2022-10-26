package com.hitejinro;

import com.hitejinro.common.constants.Constants;
import org.junit.jupiter.api.Test;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

public class SimpleTest {

    @Test
    public void hashmap() {
        Map<String, Object> map = new HashMap<>();
        map.put("1", "11");
        map.put("2", "11");
        map.put("3", "11");
        map.put("4", "11");
        map.put("5", "11");
        map.put("2", "11");
        map.put("2", "11");
        map.put("2", "11");
        map.put("2", "11");

        System.out.println(map);
    }

    @Test
    public void date() {
        System.out.println(LocalDateTime.now(Constants.GLOBAL_ZONE_ID).plusHours(3).format(DateTimeFormatter.ofPattern("yyyyMMddHH24mm")));
    }

    @Test
    void multiValueMap() {
        HashMap<String, String> map = new HashMap<>();
        map.put("test", "1");
        map.put("test1", "2");

        MultiValueMap multiValueMap = new LinkedMultiValueMap();
        multiValueMap.setAll(map);


        System.out.println(multiValueMap);
    }
}
