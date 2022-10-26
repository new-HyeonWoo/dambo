package com.hitejinro.old.menu.service;

import com.hitejinro.old.menu.model.MenuBaseEntity;

import java.util.List;

public interface MenuService {
	
	List<?> selectHeaderMenuList() throws Exception;
	
	List<?> selectMenuList(MenuBaseEntity search) throws Exception;
	 
}