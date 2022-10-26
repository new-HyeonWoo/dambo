package com.hitejinro.old.es01.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * (집합) 상업용
 * es01_w02_3.jsp
 */
@RequestMapping("/es01/w023")
@Controller
public class Es01W023Controller {
    @RequestMapping("/test")
    public String test() {
//        List<EgovMap> objects = es01W023Mapper.test2("1234", 1234);
//        System.out.println(objects);

        return "Good";
    }
}
