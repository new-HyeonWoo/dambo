package com.hitejinro.old.es00.service;

import com.hitejinro.old.es00.model.Es00SearchEntity;
import com.hitejinro.old.es00.repository.Es00A02Mapper;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("Es00A02Service")
@RequiredArgsConstructor
public class Es00A02ServiceImpl implements Es00A02Service {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(Es00A02ServiceImpl.class);

    private final Es00A02Mapper es00a02Mapper;
    
    public List<?> selectGroupList() throws Exception {
    	return es00a02Mapper.selectGroupList();
    }
    
    public List<?> selectPartList() throws Exception {
    	return es00a02Mapper.selectPartList();
    }
    
    public List<?> selectUserGroupList(Es00SearchEntity searchVO) throws Exception {
    	return es00a02Mapper.selectUserGroupList(searchVO);
    }
    
    public int margeMenuGroup(List<?> margeList) throws Exception {
    	int margeCnt = 0;
    	try {
    		for(int i = 0; i < margeList.size(); i++){
    			margeCnt += es00a02Mapper.margeMenuGroup(margeList.get(i));    			
    		}
    	}catch (Exception e) {
			System.out.println(e);
		}
    	return margeCnt;
    }
    
}