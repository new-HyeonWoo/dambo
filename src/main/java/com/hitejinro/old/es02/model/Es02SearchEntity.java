/*
 * Copyright 2008-2009 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.hitejinro.old.es02.model;

import com.hitejinro.old.common.model.BaseVO;

public class Es02SearchEntity extends BaseVO {

	/* SUREDATA@DBLINK_SMSSEND */
	private String procDiv = "";
	private String sangho = "";
	private String marketName = "";
	private String secCode = "";
	private String searchSecCode = "";
	private Integer floor;
	private String startDt = "";
	private String endDt = "";
	private String jumCode = "";
	private String searchJuso = "";
	
	private String searchYyyy = "";
	private String searchSeq = "";
	
	private String docKey = "";
	
	private String searchSangho = "";
	private String dambo= "";
	private String yyyy= "";
	private String seq= "";
	private String appraisal= "";
	private String liquorType= "";
	
	private String targetYyyy= "";
	private String targetSeq= "";
	
	private String manaReceSabun = "";

	public String getYyyy() {
		return yyyy;
	}
	public void setYyyy(String yyyy) {
		this.yyyy = yyyy;
	}
	public String getSeq() {
		return seq;
	}
	public void setSeq(String seq) {
		this.seq = seq;
	}
	public String getProcDiv() {
		return procDiv;
	}
	public void setProcDiv(String procDiv) {
		this.procDiv = procDiv;
	}
	public String getSangho() {
		return sangho;
	}
	public void setSangho(String sangho) {
		this.sangho = sangho;
	}
	public String getMarketName() {
		return marketName;
	}
	public void setMarketName(String marketName) {
		this.marketName = marketName;
	}
	public String getSecCode() {
		return secCode;
	}
	public void setSecCode(String secCode) {
		this.secCode = secCode;
	}
	public String getSearchSecCode() {
		return searchSecCode;
	}
	public void setSearchSecCode(String searchSecCode) {
		this.searchSecCode = searchSecCode;
	}
	public String getStartDt() {
		return startDt;
	}
	public void setStartDt(String startDt) {
		this.startDt = startDt;
	}
	public String getEndDt() {
		return endDt;
	}
	public void setEndDt(String endDt) {
		this.endDt = endDt;
	}
	public String getJumCode() {
		return jumCode;
	}
	public void setJumCode(String jumCode) {
		this.jumCode = jumCode;
	}
	public String getSearchJuso() {
		return searchJuso;
	}
	public void setSearchJuso(String searchJuso) {
		this.searchJuso = searchJuso;
	}
	public String getSearchYyyy() {
		return searchYyyy;
	}
	public void setSearchYyyy(String searchYyyy) {
		this.searchYyyy = searchYyyy;
	}
	public String getSearchSeq() {
		return searchSeq;
	}
	public void setSearchSeq(String searchSeq) {
		this.searchSeq = searchSeq;
	}
	public String getDocKey() {
		return docKey;
	}
	public void setDocKey(String docKey) {
		this.docKey = docKey;
	}
	public String getSearchSangho() {
		return searchSangho;
	}
	public void setSearchSangho(String searchSangho) {
		this.searchSangho = searchSangho;
	}
	public String getDambo() {
		return dambo;
	}
	public void setDambo(String dambo) {
		this.dambo = dambo;
	}
	public String getAppraisal() {
		return appraisal;
	}
	public void setAppraisal(String appraisal) {
		this.appraisal = appraisal;
	}
	public String getLiquorType() {
		return liquorType;
	}
	public void setLiquorType(String liquorType) {
		this.liquorType = liquorType;
	}
	public String getTargetYyyy() {
		return targetYyyy;
	}
	public void setTargetYyyy(String targetYyyy) {
		this.targetYyyy = targetYyyy;
	}
	public String getTargetSeq() {
		return targetSeq;
	}
	public void setTargetSeq(String targetSeq) {
		this.targetSeq = targetSeq;
	}
	
	public String getManaReceSabun(){
		return manaReceSabun;
	}
	public void setManaReceSabun(String manaReceSabun) {
		this.manaReceSabun = manaReceSabun;
	}

	public Integer getFloor() {
		return floor;
	}

	public void setFloor(Integer floor) {
		this.floor = floor;
	}
}
