/*
 * Copyright 2008-2009 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.hitejinro.old.svg.web;

import com.hitejinro.old.svg.model.SvgEntity;
import com.hitejinro.old.svg.service.SvgService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;
import java.io.*;
import java.util.Objects;
import java.util.UUID;

/**
 * @Class Name : FileAttachController.java
 * @Description : File Attach Controller Class
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2021.07.28  JWJ           최초생성
 *
 * @author 개발프레임웍크 실행환경 개발팀
 * @since 2009. 03.16
 * @version 1.0
 * @see
 *
 *  Copyright (C) by MOPAS All right reserved.
 */

@RequestMapping("/svg")
@Controller
@RequiredArgsConstructor
public class SvgController {

    /** svgService */
    private final SvgService svgService;
    
    public static final int BUFF_SIZE = 2048;
    
    private static final Logger logger = LoggerFactory.getLogger(SvgController.class); 
	
    
    @RequestMapping(value = "/showImage.do")
    public void showImage(ModelMap model,HttpServletRequest request, HttpServletResponse response) throws Exception {
        
        String atchmnId = request.getParameter("atchmnId");
        atchmnId = atchmnId.replace(" ", "");
        String fileStorePath = "C:/egovframework/upload/";
//        String fileStorePath = EgovProperties.getProperty("Globals.fileStorePath");
        fileStorePath = fileStorePath.replace(" ", "");
        
        File file = null;
        //file = new File(EgovProperties.getProperty("Globals.fileStorePath") + atchmnFlNm);
        file = new File(fileStorePath + atchmnId);
        FileInputStream in = new FileInputStream(file);
            
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        byte[] buf = new byte[8042];
        int readlength = 0;
        while((readlength = in.read(buf)) != -1){
            baos.write(buf, 0, readlength);
        }
        byte[] imgbuf = null;
        imgbuf = baos.toByteArray();
        in.close();
        
        int length = imgbuf.length;
        OutputStream oout = response.getOutputStream();
        oout.write(imgbuf, 0, length);
        oout.close();
    }
    
    @RequestMapping(value = "/uploadSvgData.do", method = RequestMethod.POST, produces="application/json;charset=UTF-8")
    @ResponseBody
    public ModelAndView  uploadSvgData(HttpServletRequest request, SvgEntity svgEntity)  {
    	ModelAndView mav = new ModelAndView("jsonView");
    	InputStream stream = null;
		OutputStream bos = null;
    	int retVal = -1;

    	try {
    		String fileStorePath = "C:/egovframework/upload/";
//    		String fileStorePath = EgovProperties.getProperty("Globals.fileStorePath");
            fileStorePath = fileStorePath.replace(" ", "");
            logger.info(fileStorePath);

            File cFile = new File(fileStorePath);

			if (!cFile.isDirectory()) {
				boolean _flag = cFile.mkdir();
				if (!_flag) {
					throw new IOException("Directory creation Failed ");
				}
			}

            String strNewFileName = UUID.randomUUID().toString();
            bos = new FileOutputStream(fileStorePath + File.separator + strNewFileName);

            int bytesRead = 0;
			byte[] buffer = new byte[BUFF_SIZE];
			String[] arrBase64 = svgEntity.getPngData().split(",");
			byte[] imageBytes = DatatypeConverter.parseBase64Binary(arrBase64[1]);
			stream = new ByteArrayInputStream(imageBytes);


			while ((bytesRead = stream.read(buffer, 0, BUFF_SIZE)) != -1) {
				bos.write(buffer, 0, bytesRead);
			}
			
			svgService.insertSvgData(svgEntity);
			retVal = svgEntity.getSeqno();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
            if (Objects.nonNull(bos)) {
                try {
                    bos.close();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
            if (Objects.nonNull(stream)) {
                try {
                    stream.close();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
		}
//    	return "{fileSn:" + Integer.toString(retVal) + "}";
    	return mav.addObject("data", Integer.toString(retVal));
    	
    }
}
