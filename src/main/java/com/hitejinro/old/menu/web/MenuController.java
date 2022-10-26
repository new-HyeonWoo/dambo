package com.hitejinro.old.menu.web;

import com.hitejinro.old.menu.model.MenuBaseEntity;
import com.hitejinro.old.menu.service.MenuService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;

@RequiredArgsConstructor
public class MenuController implements HandlerInterceptor{

	private final MenuService menuService;
	
    public static final int BUFF_SIZE = 2048;
    
    private static final Logger logger = LoggerFactory.getLogger(MenuController.class); 
    
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return true;
    }
 
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
    	try {
            HttpSession session = request.getSession();

        	List<?> menuHeaderList = menuService.selectHeaderMenuList();
        	System.out.println("menuHeaderList == >" + menuHeaderList);

            MenuBaseEntity search = new MenuBaseEntity();

            if(session.getAttribute("userDeptCd") == "1308" || session.getAttribute("userDeptCd") == "1118" ){
                search.setUser_r("G");
            }else{
                search.setUser_r("J");
            }

            search.setUser_id(session.getAttribute("userEmpNo").toString());

            List<?> menuList = menuService.selectMenuList(search);
            System.out.println("menuList == >" + menuList);

            modelAndView.addObject("userName", session.getAttribute("userName"));
            modelAndView.addObject("userDept", session.getAttribute("userDept"));
        	modelAndView.addObject("menuHeaderList", menuHeaderList);
        	modelAndView.addObject("menuList", menuList);

    	}catch (Exception e) {
			System.out.println(e);
		}
    }
 
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
       
    }    
}