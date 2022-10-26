package com.hitejinro.controller;

import com.hitejinro.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Objects;

@Controller
@RequiredArgsConstructor
public class IndexController {
	private final UserMapper userMapper;

	@RequestMapping("/dispatch")
	public String dispatch(@RequestParam("empno") String empNo) {
		HttpServletRequest request = ((ServletRequestAttributes)
				Objects.requireNonNull(
						RequestContextHolder.getRequestAttributes())).getRequest();

		HashMap<String, String> userMap = Objects.requireNonNull(userMapper.selectUser(empNo), "존재하지 않은 사용자입니다.");
		HttpSession session = request.getSession();

		session.setAttribute("userEmpNo", userMap.get("SABUN"));
		session.setAttribute("userName", userMap.get("NAME"));
		session.setAttribute("userDeptCd", userMapper.selectUserDeptCdByEmpNo(empNo));
		session.setAttribute("userDept", userMap.get("SMALLNAME"));
		session.setAttribute("userJikWi", userMap.get("JIKWI"));
		session.setAttribute("userJikName", userMap.get("JIKNAME"));

		return "redirect:/es01/es01_w01.do";
	}

	@RequestMapping("/")
	public String index() {
		return "redirect:/dispatch?empno=108231";
	}
}