package com.hitejinro.old.menu.repository;



import com.hitejinro.old.menu.model.MenuBaseEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MenuMapper {
	
	List<?> selectHeaderMenuList() throws Exception;
	
	List<?> selectMenuList(MenuBaseEntity search) throws Exception;
	
}
