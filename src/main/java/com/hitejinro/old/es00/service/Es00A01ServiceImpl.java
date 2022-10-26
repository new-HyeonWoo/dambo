package com.hitejinro.old.es00.service;

import com.hitejinro.old.es00.model.Es00SearchEntity;
import com.hitejinro.old.es00.repository.Es00A01Mapper;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("Es00A01Service")
@RequiredArgsConstructor
public class Es00A01ServiceImpl implements Es00A01Service {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(Es00A01ServiceImpl.class);

    private final Es00A01Mapper es00a01Mapper;
    
    public List<?> selectTopMenuList() throws Exception {
    	return es00a01Mapper.selectTopMenuList();
    }
    
    public List<?> selectMenuList() throws Exception {
    	return es00a01Mapper.selectMenuList();
    }
    
    public List<?> selectGroupHeaderList(Es00SearchEntity searchVO) throws Exception {
    	return es00a01Mapper.selectGroupHeaderList(searchVO);
    }
    
    public List<?> selectGroupList(Es00SearchEntity searchVO) throws Exception {
    	return es00a01Mapper.selectGroupList(searchVO);
    }
    
    public int insertTopMenu(List<?> insertList) throws Exception {
    	int cnt = 0;
    	try {
    		for(int i = 0; i < insertList.size(); i++) {
				cnt += es00a01Mapper.insertTopMenu(insertList.get(i));
    		}
    	}catch (Exception e) {
    		System.out.println(e);
    	}
    	return cnt;
    
    }
    
    public int updateTopMenu(List<?> updateList) throws Exception {
    	int cnt = 0;
    	try {
    		for(int i = 0; i < updateList.size(); i++) {
    			cnt += es00a01Mapper.updateTopMenu(updateList.get(i));
    		}
    	}catch (Exception e) {
    		System.out.println(e);
    	}
    	return cnt;
    
    }
    
    public int deleteTopMenu(List<?> deleteList) throws Exception {
    	int cnt = 0;
    	try {
    		for(int i = 0; i < deleteList.size(); i++) {
    			cnt += es00a01Mapper.deleteTopMenu(deleteList.get(i));
    		}
    	}catch (Exception e) {
    		System.out.println(e);
    	}
    	return cnt;
    }
    
    public int margeMenu(List<?> margeList) throws Exception {
    	int cnt = 0;
    	try {
    		for(int i = 0; i < margeList.size(); i++) {
    			cnt += es00a01Mapper.margeMenu(margeList.get(i));
    		}
    	}catch (Exception e) {
    		System.out.println(e);
    	}
    	return cnt;
    
    }
    
    public int deleteMenu(List<?> deleteList) throws Exception {
    	int cnt = 0;
    	try {
    		for(int i = 0; i < deleteList.size(); i++) {
    			cnt += es00a01Mapper.deleteMenu(deleteList.get(i));
    		}
    	}catch (Exception e) {
    		System.out.println(e);
    	}
    	return cnt;
    }
    
    public int margeGroup(List<?> margeList) throws Exception {
    	int cnt = 0;
    	try {
    		for(int i = 0; i < margeList.size(); i++) {
    			cnt += es00a01Mapper.margeGroup(margeList.get(i));
    		}
    	}catch (Exception e) {
    		System.out.println(e);
    	}
    	return cnt;
    
    }
    
}