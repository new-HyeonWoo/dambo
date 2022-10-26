package com.hitejinro.service;

import com.hitejinro.dto.request.SearchUserRequest;
import com.hitejinro.dto.response.SearchUserResponse;

import java.util.HashMap;

public interface UserService {
    SearchUserResponse sample(SearchUserRequest request);

    HashMap<String, String> selectUser(String empNo);
}
