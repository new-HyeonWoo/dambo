package com.hitejinro.old.es01.service;

import com.hitejinro.old.es01.model.Es01SearchEntity;
import com.hitejinro.old.es01.repository.OldEs01W06Mapper;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("Es01W06Service")
@RequiredArgsConstructor
public class Es01W06ServiceImpl implements Es01W06Service{

    private final OldEs01W06Mapper es01w06Mapper;
	
	@Override
	public List<?> selectCollateralList(Es01SearchEntity searchVO) throws Exception {
		return es01w06Mapper.selectCollateralList(searchVO);
	}
	
	@Override
	public List<?> selectCollateralListDetail(Es01SearchEntity searchVO) throws Exception {
		return es01w06Mapper.selectCollateralListDetail(searchVO);
	}
	
	@Override
	public List<?> selectCollateralListDrillDow(Es01SearchEntity searchVO) throws Exception {
		return es01w06Mapper.selectCollateralListDrillDow(searchVO);
	}
	
}
