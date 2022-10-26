package com.hitejinro.old.common.model;

import com.hitejinro.old.menu.model.MenuBaseEntity;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


/**
 * The type Base vo.
 */
public class BaseVO extends MenuBaseEntity {

    /**
     * 지점_코드
     */
    private String branchCd;

    /**
     * 등록_일시
     */
    private LocalDateTime regDtime;
    /**
     * 등록_일시_str
     */
    private String regDtimeStr;

    /**
     * 등록_사원_번호
     */
    private String regEmpNo;

    /**
     * 등록_IP
     */
    private String regIp;

    /**
     * 수정_일시
     */
    private LocalDateTime updDtime;
    /**
     * 수정_일시_str
     */
    private String updDtimeStr;

    /**
     * 수정_사원_번호
     */
    private String updEmpNo;

    /**
     * 수정_IP
     */
    private String updIp;


    /**
     * Gets branch cd.
     *
     * @return the branch cd
     */
    public String getBranchCd() {
        return StringUtils.isEmpty(branchCd) ? "1000" : branchCd;
    }

    /**
     * Sets branch cd.
     *
     * @param branchCd the branch cd
     */
    public void setBranchCd(String branchCd) {
        this.branchCd = branchCd;
    }

    /**
     * Gets reg dtime.
     *
     * @return the reg dtime
     */
    public LocalDateTime getRegDtime() {
        return regDtime;
    }

    /**
     * Sets reg dtime.
     *
     * @param regDtime the reg dtime
     */
    public void setRegDtime(LocalDateTime regDtime) {
        this.regDtime = regDtime;
    }


    /**
     * Gets reg emp no.
     *
     * @return the reg emp no
     */
    public String getRegEmpNo() {
//        if (regEmpNo != null && !regEmpNo.equals("")) return this.regEmpNo;
//        LoginVO loginVO = (LoginVO) UserDetailsHelper.getAuthenticatedUser();
////        return (StringUtils.isEmpty(regEmpNo) && UserDetailsHelper.isAuthenticated()) ? loginVO.getId() : regEmpNo;
//        return (StringUtils.isEmpty(regEmpNo) && UserDetailsHelper.isAuthenticated()) ? loginVO.getLoginEmpNo() : regEmpNo; // loginempno null로 뜨는 문제
    	return "";
    }

    /**
     * Sets reg emp no.
     *
     * @param regEmpNo the reg emp no
     */
    public void setRegEmpNo(String regEmpNo) {
        this.regEmpNo = regEmpNo;
    }


    /**
     * Sets reg ip.
     *
     * @param regIp the reg ip
     */
    public void setRegIp(String regIp) {
        this.regIp = regIp;
    }


    /**
     * Gets upd dtime.
     *
     * @return the upd dtime
     */
    public LocalDateTime getUpdDtime() {
        return updDtime;
    }

    /**
     * Sets upd dtime.
     *
     * @param updDtime the upd dtime
     */
    public void setUpdDtime(LocalDateTime updDtime) {
        this.updDtime = updDtime;
    }


    /**
     * Gets upd emp no.
     *
     * @return the upd emp no
     */
    public String getUpdEmpNo() {
//        LoginVO loginVO = (UserDetailsHelper.isAuthenticated()) ? (LoginVO) UserDetailsHelper.getAuthenticatedUser() : new LoginVO();
//        return (StringUtils.isEmpty(updEmpNo) && UserDetailsHelper.isAuthenticated()) ? loginVO.getLoginEmpNo() : updEmpNo; // loginempno null로 뜨는 문제
////        return (StringUtils.isEmpty(updEmpNo) && UserDetailsHelper.isAuthenticated()) ? loginVO.getId() : updEmpNo;
    	return "";
    }

    /**
     * Sets upd emp no.
     *
     * @param updEmpNo the upd emp no
     */
    public void setUpdEmpNo(String updEmpNo) {
        this.updEmpNo = updEmpNo;
    }

    /**
     * Sets upd ip.
     *
     * @param updIp the upd ip
     */
    public void setUpdIp(String updIp) {
        this.updIp = updIp;
    }

    /**
     * @return the regDtimeStr
     */
    public String getRegDtimeStr() {
        if(regDtime != null) {
            this.regDtimeStr = regDtime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        }
        return regDtimeStr;
    }

    /**
     * @param regDtimeStr the regDtimeStr to set
     */
    public void setRegDtimeStr(String regDtimeStr) {
        this.regDtimeStr = regDtimeStr;
    }

    /**
     * @return the updDtimeStr
     */
    public String getUpdDtimeStr() {
        if(updDtime != null) {
            this.updDtimeStr = updDtime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        }
        return updDtimeStr;
    }

    /**
     * @param updDtimeStr the updDtimeStr to set
     */
    public void setUpdDtimeStr(String updDtimeStr) {
        this.updDtimeStr = updDtimeStr;
    }
}
