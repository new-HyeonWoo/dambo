package com.hitejinro.old.es01.service;

import com.hitejinro.old.es01.model.Es01SearchEntity;

import java.util.List;

public interface Es01W06Service {
	
	List<?> selectCollateralList(Es01SearchEntity searchVO) throws Exception;
	
	List<?> selectCollateralListDetail(Es01SearchEntity searchVO) throws Exception;
	
	List<?> selectCollateralListDrillDow(Es01SearchEntity searchVO) throws Exception;
	
}
