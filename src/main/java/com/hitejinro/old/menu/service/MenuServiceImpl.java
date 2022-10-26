package com.hitejinro.old.menu.service;

import com.hitejinro.old.menu.model.MenuBaseEntity;
import com.hitejinro.old.menu.repository.MenuMapper;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("MenuService")
@RequiredArgsConstructor
public class MenuServiceImpl implements MenuService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(MenuServiceImpl.class);

    private final MenuMapper menuMapper;
    
	public List<?> selectHeaderMenuList() throws Exception {
		return menuMapper.selectHeaderMenuList();
	}
    
	public List<?> selectMenuList(MenuBaseEntity search) throws Exception {
		return menuMapper.selectMenuList(search);
	}
}