package com.hitejinro.old.es01.web;

import com.hitejinro.old.es01.service.Es01W024Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * (집합) 오피스텔
 * es01_w02_4.jsp
 */
@RequestMapping("/es01/w024")
@Controller
public class Es01W024Controller {

    @Autowired
    private Es01W024Service es01W024Service;

}
