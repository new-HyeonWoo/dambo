package com.hitejinro.service;

import com.hitejinro.dto.request.SearchUserRequest;
import com.hitejinro.dto.response.SearchUserResponse;
import com.hitejinro.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;

    public SearchUserResponse sample(SearchUserRequest request){
        System.out.println(userMapper.sample());

        return SearchUserResponse.builder().id(request.getId())
                .build();
    }

    public HashMap<String, String> selectUser(String empNo){
        return userMapper.selectUser(empNo);
    }
}
