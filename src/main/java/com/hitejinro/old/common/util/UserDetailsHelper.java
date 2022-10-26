//package com.hitejinro.old.common.util;
//
//import egovframework.rte.fdl.security.userdetails.EgovUserDetails;
//import egovframework.rte.fdl.string.EgovObjectUtil;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.context.SecurityContext;
//import org.springframework.security.core.context.SecurityContextHolder;
//
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.Iterator;
//import java.util.List;
//
//public final class UserDetailsHelper {
//
//    private static final Logger LOGGER = LoggerFactory.getLogger(UserDetailsHelper.class);
//
//    public static Object getAuthenticatedUser() {
//        SecurityContext context = SecurityContextHolder.getContext();
//        Authentication authentication = context.getAuthentication();
//        if (EgovObjectUtil.isNull(authentication)) {
//            LOGGER.debug("## authentication object is null!!");
//            return null;
//        } else if (authentication.getPrincipal() instanceof EgovUserDetails) {
//            EgovUserDetails details = (EgovUserDetails) authentication.getPrincipal();
//            LOGGER.debug("## EgovUserDetailsHelper.getAuthenticatedUser : AuthenticatedUser is {}", details.getUsername());
//            return details.getEgovUserVO();
//        } else {
//            return authentication.getPrincipal();
//        }
//    }
//
//    public static List<String> getAuthorities() {
//        List<String> listAuth = new ArrayList<>();
//        SecurityContext context = SecurityContextHolder.getContext();
//        Authentication authentication = context.getAuthentication();
//        if (EgovObjectUtil.isNull(authentication)) {
//            LOGGER.debug("## authentication object is null!!");
//            return null;
//        } else {
//            Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
//            Iterator iter = authorities.iterator();
//
//            while (iter.hasNext()) {
//                GrantedAuthority auth = (GrantedAuthority) iter.next();
//                listAuth.add(auth.getAuthority());
//                LOGGER.debug("## EgovUserDetailsHelper.getAuthorities : Authority is {}", auth.getAuthority());
//            }
//
//            return listAuth;
//        }
//    }
//
//    public static Boolean isAuthenticated() {
//        SecurityContext context = SecurityContextHolder.getContext();
//        Authentication authentication = context.getAuthentication();
//        if (EgovObjectUtil.isNull(authentication)) {
//            LOGGER.debug("## authentication object is null!!");
//            return Boolean.FALSE;
//        } else {
//            String username = authentication.getName();
//            if (username.equals("anonymousUser")) {
//                LOGGER.debug("## username is {}", username);
//                return Boolean.FALSE;
//            } else {
//                Object principal = authentication.getPrincipal();
//                return !EgovObjectUtil.isNull(principal);
//            }
//        }
//    }
//
//}
