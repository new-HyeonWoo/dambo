package com.hitejinro.old.es00.service;

import com.hitejinro.old.es00.repository.Es00W02Mapper;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("Es00W02Service")
@RequiredArgsConstructor
public class Es00W02ServiceImpl implements Es00W02Service {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(Es00W01ServiceImpl.class);

    private final Es00W02Mapper Es00w02Mapper;
    
	public List<?> selectDsrtctList() throws Exception {
		return Es00w02Mapper.selectDsrtctList();
	}
	
	public List<?> selectManagerList() throws Exception {
		return Es00w02Mapper.selectManagerList();
	}
	
	public int es00_w02_update_save(List<?> updataList) throws Exception {
		int cnt=0;
		for(int i = 0; i < updataList.size(); i++) {
			try {
				cnt += Es00w02Mapper.es00_w02_update_save(updataList.get(i));		
			}catch (Exception e) {
				System.out.println(e);
			}
		}
		return cnt;
		
	}
}