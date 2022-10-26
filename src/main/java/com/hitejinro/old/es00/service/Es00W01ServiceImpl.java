package com.hitejinro.old.es00.service;

import com.hitejinro.old.es00.model.Es00SearchEntity;
import com.hitejinro.old.es00.repository.Es00W01Mapper;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("Es00W01Service")
@RequiredArgsConstructor
public class Es00W01ServiceImpl implements Es00W01Service {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(Es00W01ServiceImpl.class);

    private final Es00W01Mapper es00w1Mapper;
    
	public List<?> selectLclasList() throws Exception {
		return es00w1Mapper.selectLclasList();
	}
	
	public List<?> selectHeaderList(Es00SearchEntity searchVO) throws Exception {
		return es00w1Mapper.selectHeaderList(searchVO);
	}
	
	public List<?> selectAllcodeList(Es00SearchEntity searchVO) throws Exception {
		return es00w1Mapper.selectAllcodeList(searchVO);
	}
	
	public int es00_w01_insert_save(List<?> insertList) throws Exception {
		int cnt=0;
		for(int i = 0; i < insertList.size(); i++) {
			try {
				cnt += es00w1Mapper.es00_w01_insert_save(insertList.get(i));		
			}catch (Exception e) {
				System.out.println(e);
			}
		}
		return cnt;
	}
	
	public int es00_w01_update_save(List<?> updateList) throws Exception {
		int cnt=0;
		for(int i = 0; i < updateList.size(); i++) {
			try {
				cnt += es00w1Mapper.es00_w01_update_save(updateList.get(i));		
			}catch (Exception e) {
				System.out.println(e);
			}
		}
		return cnt;
	}
	
}