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
package com.hitejinro.old.es01.model;

import com.hitejinro.old.common.model.BaseVO;

/**
 * @Class Name : KakaoEntity.java
 * @Description : KakaoEntity Class
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2021.05.28 JWJ           최초생성
 *
 * @author 개발프레임웍크 실행환경 개발팀
 * @since 2009. 03.16
 * @version 1.0
 * @see
 *
 *  Copyright (C) by MOPAS All right reserved.
 */
public class Es01BaseEntity extends BaseVO {

	/* SUREDATA@DBLINK_SMSSEND */
	
	/** 아이디 */
	private String id;

	/** 이름 */
	private String name;
	
	private String jumCode;

	/** 내용 */
	private String description;

	/** 사용여부 */
	private String useYn;

	/** 등록자 */
	private String regUser;
	
	
	
	private String	yyyy;		
	private String	seq;			
	private String	juso1;		
	private String	juso2;		
	private String	lotNum;		
	private String	cbName	;	
	private String	dong	;	
	private String	ho		;	
	private String	lcategory;	
	private String	lgOwnerYn;	
	private String	lgOwner		;
	private String	lgSize		;
	private String	possAArea	;
	private String	cbStruc		;
	private String	cbRoof		;
	private String	cbUpfloor	;
	private String	cbDnfloor	;
	private String	cbFloor		;
	private String	cbYyyy		;
	private String	elapYear	;
	private String	numHousehold;
	private String	numYear		;		
	private String	cbExmSize	;		
	private String	cbExmSizePy	;		
	private String	cbPubSize	;		
	private String	cbPubSizePy	;		
	private String	cbTotSize	;		
	private String	cbTotSizePy	;		
	private String	ofGu		;		
	private String	ofHeaterYn	;		
	private String	ofFloor		;		
	private String	ofFloorIdx	;		
	private String	ofPlace		;		
	private String	ofPlaceIdx	;		
	private String	ofJangaRate	;		
	private String	ofRoadCode	;		
	private String	ofAccessCode;		
	private String	ofEtc		;		
	private String	ofEtcIdx	;		
	private String	regiAmt		;		
	private String	regiDan		;		
	private String	regiDanPy	;		
	private String	baseAmt		;		
	private String	baseDan		;		
	private String	baseDanPy	;		
	private String	secRegiSize	;		
	private String	secNume		;		
	private String	secDeno		;		
	private String	secRate		;		
	private String	secOfferSize;		
	private String	secDesc		;		
	private String	incAmt		;		
	private String	fnlIncAmt	;		
	
	private String	searchSecCode	;	
	private String	startDt	;
	private String	endDt	;
	private String	procDiv	;
	
	private String	searchYyyy = "";
	private String	searchSeq = "";
	private String	spResult;

	private String	cdCode;
	private String	attr01;
	private String	cdDesc;
	private String	mentItems;
	private String	mentItem;
	private String	docKey;
	
	private String sangho = "";
	
	private String searchSangho = "";
	private String geoCode  = "";
	private String daepyoName = "";
	private String marketDiv = "";
	private String marketName = "";
	private String marketCeo = "";
	private String debtor = "";
	private String debtorRelation = "";
	private String guarantor = "";
	private String esDiv = "";
	
	private String	possOwner	= "";
	private String	lgSizePy	= "";
	private String	secCode	= "";
	
	private String	temps	= "";
	private String	liquorType	= "";
	private String	reqJum	= "";

	private String possAAreaBid   = "";
	
	private String restPlUse   = "";
	private String restOtLaw   = "";
	private String restEnRule   = "";
	private String restFuLaw   = "";

	private String maMinAmt = "";
	private String maRate = "";
	private String maMaxAmt = "";
	private String prMinAmt = "";
	private String prRate = "";
	private String prMaxAmt = "";
	private String auMinAmt = "";
	private String auRate = "";
	private String auMaxAmt = "";
	private String applAmt = "";
	
	private String buildIncreaseAmt = "";
	private String buildlastIncreaseAmt = "";

	private String intRepSize = "";
	private String intRepSizePy = "";
	private String interiorCosts = "";
	private String intRepDan = "";
	private String intRepAmt = "";
	
	private String pBidRate	 = "";			
	private String kBidRate = "";						
	private String bBidRateTmp = "";		
	private String bBidRate = "";						
	private String applRate = "";			
	private String aptScale = "";			
	private String aptScaleRate = "";		
	private String aptExmSize = "";			
	private String aptExmRate = "";			
	private String aptFloorCode = "";		
	private String aptFloorRate = "";					
	private String aptElapCode = "";		
	private String aptElapRate = "";		
	private String rightsCode = "";			
	private String rightsRate = "";			
	private String increaseAmt = "";		
	private String plMinBidAmt = "";		
	private String plBidAmt = "";			
	private String  increaseAmt1 = "";		 
	
	private String  auctionCode= "";	
	private String  auctionAmt= "";	
	private String  hPlBidAmt= "";	
	private String  hPossAmt= "";	
	private String  hPossAArea= "";	
	private String  hPossAAmt= "";	
	
	private String  dispRank= "";	
	private String  rightDate= "";	
	private String  hiteYn= "";	
	private String  rightCode= "";	
	private String  eraYn= "";	
	private String  credSelfAmtOrg= "";	
	private String  credCombAmtOrg= "";	
	private String rightPerson ="";
	private String proRateCode ="";
	
	
	private String dispRankData="";
	private String rightCodeData="";
	private String rightDateData="";
	private String hiteYnData="";
	private String eraYnData="";
	private String credSelfAmtOrgData="";
	private String credCombAmtOrgData="";
	private String rightPersonData ="";
	private String proRateCodeData ="";
	
	private String bSizePy ="";
	private String currMinAmt ="";
	private String currMaxAmt ="";
	private String currAvgAmt ="";
	private String currPyDan ="";
	private String leaseAmt ="";
	private String leaseRate ="";
	private String checkApt ="";
	private String lnSeq="";
	private String bName="";
	private String juso="";
	private String bYear="";
	private String houseCnt="";

	private String auNo ="";
	private String auCheckYn =""; 
	private String auBName="";
	private String auJuso ="";
	private String auTotFloor ="";
	private String auFloor ="";
	private String auBSizePy ="";
	private String auLawAmt ="";
	private String auCurrPyDan ="";
	private String auBidAmt ="";
	private String auBidRate ="";

	private String auNoData="";
	private String auCheckYnData	="";	
	private String auBNameData	="";		
	private String auJusoData="";			
	private String auTotFloorData="";		
	private String auFloorData	="";		
	private String auBSizePyData="";		
	private String auLawAmtData	="";		
	private String auCurrPyDanData="";		
	private String auBidAmtData	="";		
	private String auBidRateData="";		
	
	private String caMLnSeq="";
	private String caMBName="";
	private String caMJuso="";
	private String caMBYear="";
	private String caMHouseCnt="";

	private String caseDbSizePy="";
	private String caseDLnSeq="";
	private String caseDcurrMinAmt="";
	private String caseDcurrMaxAmt="";
	private String caseDcurrAvgAmt="";
	private String caseDcurrPyDan="";
	private String caseDleaseAmt="";
	private String caseDleaseRate="";
	private String caseDCheckYn="";

	private String caMBNameData ="";		
	private String caMJusoData	="";		
	private String caMBYearData	="";	
	private String caMHouseCntData	="";	
	
	private String caseDbSizePyData="";
	private String caseDLnSeqData="";
	private String caseDcurrMinAmtData="";
	private String caseDcurrMaxAmtData="";
	private String caseDcurrAvgAmtData="";
	private String caseDcurrPyDanData="";
	private String caseDleaseAmtData="";
	private String caseDleaseRateData="";
	private String caseDCheckYnData="";
	
	private String numberGu="";
	private String resiName="";
	private String resiRmCnt="";
	private String fxdateYn="";
	private String possARmCnt="";
	private String hleaseAmt="";
	private String repBeSecAmt="";
	private String fxleaAmt="";
	private String fxleaNoAmt="";
	
	
	private String numberGuData="";
	private String resiNameData="";
	private String resiRmCntData="";
	private String fxdateYnData="";
	private String possARmCntData="";
	private String hleaseAmtData="";
	private String repBeSecAmtData="";
	private String fxleaAmtData="";
	private String fxleaNoAmtData="";
	private String credMaxAmt="";

	private String apartmentComplexSizeList=""; //아파트 단체 전체 규모
	private String jonYuPartAreaAptList=""; //전유부분면적
	private String jeonyuPartLocation=""; //층수 전유부분 
	private String  buildTransitYearAptList =""; //건충물경과년도
	private String  formOccpantAptList =""; //점유자의 권리 형태
	private String  estiDateCheck ="";
	
	
	private String  checkYn1="";
	private String  onlySize1="";
	private String  currMinAmt1="";
	private String  currMaxAmt1="";
	private String  currAvgAmt1="";
	private String  currSizeDan1="";
	private String  leaseAmt1="";
	private String  leaseRate1="";
	private String  checkYn2="";
	private String  onlySize2="";
	private String  currMinAmt2="";
	private String  currMaxAmt2="";
	private String  currAvgAmt2="";
	private String  currSizeDan2="";
	private String  leaseAmt2="";
	private String  leaseRate2="";
	private String  checkYn3="";
	private String  onlySize3="";
	private String  currMinAmt3="";
	private String  currMaxAmt3="";
	private String  currAvgAmt3="";
	private String  currSizeDan3="";
	private String  leaseAmt3="";
	private String  leaseRate3="";
	
	private String  auLnSeqNm="";
	private String  auFloorCode="";
	private String  auFloorRate="";
	private String  auOnlySize="";
	private String  auBYear="";
	private String  auElapYear="";
	private String  auCbStruc="";
	private String  auNumYear="";
	private String  auCurrSizeDan="";
	
	
	private String	priceLnSeq ="";
	private String	priceJuso="";
	private String	priceLotNum="";
	private String	priceDistance="";
	private String	priceHouseCnt="";
	private String	priceBYear="";
	private String	priceElapYear="";
	private String	priceCbStruc="";
	private String	priceNumYear="";
	private String	priceCheckYn1="";
	private String	priceOnlySize1="";
	private String	priceCurrMinAmt1="";
	private String	priceCurrMaxAmt1="";
	private String	priceCurrAvgAmt1="";
	private String	priceCurrSizeDan1="";
	private String	priceLeaseAmt1="";
	private String	priceLeaseRate1="";
	private String	priceCheckYn2="";
	private String	priceOnlySize2="";
	private String	priceCurrMinAmt2="";
	private String	priceCurrMaxAmt2="";
	private String	priceCurrAvgAmt2="";
	private String	priceCurrSizeDan2="";
	private String	priceLeaseAmt2="";
	private String	priceLeaseRate2="";
	private String	priceCheckYn3="";
	private String	priceOnlySize3="";
	private String	priceCurrMinAmt3="";
	private String	priceCurrMaxAmt3="";
	private String	priceCurrAvgAmt3="";
	private String	priceCurrSizeDan3="";
	private String	priceLeaseAmt3="";
	private String	priceLeaseRate3="";

	private String	price2ExampleGuNm= "";
	private String	price2ExampleGuCd= "";
	private String	price2FactorTot= "";
	private String	price2PriceDateS= "";
	private String	price2ApplDan= "";
	private String	price2ExampleGu= "";
	private String	price2LnSeq= "";
	private String	price2Juso= "";
	private String	price2JusoC= "";
	private String	price2CurrSizeDan= "";
	private String	price2PriceRateC= "";
	private String	price2FloorMCode= "";
	private String	price2FloorMRate= "";
	private String	price2FloorSCode= "";
	private String	price2FloorSRate= "";
	private String	price2FloorC= "";
	private String	price2OfJangaRateM= "";
	private String	price2OfJangaRateS= "";
	private String	price2OfJangaRateC= "";
	private String	price2ApasDan= "";
	private String	price2OnlySize= "";
	private String	price2PriceDateM= "";
	private String	price2PriceRateM= "";
	private String	price2PriceRateS= "";
	private String	price2MinAmt= "";
	private String	price2ManAmt= "";
	private String	price2HwansanAmt= "";
	
	
	
	
	public String getPrice2OnlySize() {
		return price2OnlySize;
	}
	public void setPrice2OnlySize(String price2OnlySize) {
		this.price2OnlySize = price2OnlySize;
	}
	public String getPrice2PriceDateM() {
		return price2PriceDateM;
	}
	public void setPrice2PriceDateM(String price2PriceDateM) {
		this.price2PriceDateM = price2PriceDateM;
	}
	public String getPrice2PriceRateM() {
		return price2PriceRateM;
	}
	public void setPrice2PriceRateM(String price2PriceRateM) {
		this.price2PriceRateM = price2PriceRateM;
	}
	public String getPrice2PriceRateS() {
		return price2PriceRateS;
	}
	public void setPrice2PriceRateS(String price2PriceRateS) {
		this.price2PriceRateS = price2PriceRateS;
	}
	public String getPrice2MinAmt() {
		return price2MinAmt;
	}
	public void setPrice2MinAmt(String price2MinAmt) {
		this.price2MinAmt = price2MinAmt;
	}
	public String getPrice2ManAmt() {
		return price2ManAmt;
	}
	public void setPrice2ManAmt(String price2ManAmt) {
		this.price2ManAmt = price2ManAmt;
	}
	public String getPrice2HwansanAmt() {
		return price2HwansanAmt;
	}
	public void setPrice2HwansanAmt(String price2HwansanAmt) {
		this.price2HwansanAmt = price2HwansanAmt;
	}
	public String getPrice2ExampleGuNm() {
		return price2ExampleGuNm;
	}
	public void setPrice2ExampleGuNm(String price2ExampleGuNm) {
		this.price2ExampleGuNm = price2ExampleGuNm;
	}
	public String getPrice2ExampleGuCd() {
		return price2ExampleGuCd;
	}
	public void setPrice2ExampleGuCd(String price2ExampleGuCd) {
		this.price2ExampleGuCd = price2ExampleGuCd;
	}
	public String getPrice2FactorTot() {
		return price2FactorTot;
	}
	public void setPrice2FactorTot(String price2FactorTot) {
		this.price2FactorTot = price2FactorTot;
	}
	public String getPrice2PriceDateS() {
		return price2PriceDateS;
	}
	public void setPrice2PriceDateS(String price2PriceDateS) {
		this.price2PriceDateS = price2PriceDateS;
	}
	public String getPrice2ApplDan() {
		return price2ApplDan;
	}
	public void setPrice2ApplDan(String price2ApplDan) {
		this.price2ApplDan = price2ApplDan;
	}
	public String getPrice2ExampleGu() {
		return price2ExampleGu;
	}
	public void setPrice2ExampleGu(String price2ExampleGu) {
		this.price2ExampleGu = price2ExampleGu;
	}
	public String getPrice2LnSeq() {
		return price2LnSeq;
	}
	public void setPrice2LnSeq(String price2LnSeq) {
		this.price2LnSeq = price2LnSeq;
	}
	public String getPrice2Juso() {
		return price2Juso;
	}
	public void setPrice2Juso(String price2Juso) {
		this.price2Juso = price2Juso;
	}
	public String getPrice2JusoC() {
		return price2JusoC;
	}
	public void setPrice2JusoC(String price2JusoC) {
		this.price2JusoC = price2JusoC;
	}
	public String getPrice2CurrSizeDan() {
		return price2CurrSizeDan;
	}
	public void setPrice2CurrSizeDan(String price2CurrSizeDan) {
		this.price2CurrSizeDan = price2CurrSizeDan;
	}
	public String getPrice2PriceRateC() {
		return price2PriceRateC;
	}
	public void setPrice2PriceRateC(String price2PriceRateC) {
		this.price2PriceRateC = price2PriceRateC;
	}
	public String getPrice2FloorMCode() {
		return price2FloorMCode;
	}
	public void setPrice2FloorMCode(String price2FloorMCode) {
		this.price2FloorMCode = price2FloorMCode;
	}
	public String getPrice2FloorMRate() {
		return price2FloorMRate;
	}
	public void setPrice2FloorMRate(String price2FloorMRate) {
		this.price2FloorMRate = price2FloorMRate;
	}
	public String getPrice2FloorSCode() {
		return price2FloorSCode;
	}
	public void setPrice2FloorSCode(String price2FloorSCode) {
		this.price2FloorSCode = price2FloorSCode;
	}
	public String getPrice2FloorSRate() {
		return price2FloorSRate;
	}
	public void setPrice2FloorSRate(String price2FloorSRate) {
		this.price2FloorSRate = price2FloorSRate;
	}
	public String getPrice2FloorC() {
		return price2FloorC;
	}
	public void setPrice2FloorC(String price2FloorC) {
		this.price2FloorC = price2FloorC;
	}
	public String getPrice2OfJangaRateM() {
		return price2OfJangaRateM;
	}
	public void setPrice2OfJangaRateM(String price2OfJangaRateM) {
		this.price2OfJangaRateM = price2OfJangaRateM;
	}
	public String getPrice2OfJangaRateS() {
		return price2OfJangaRateS;
	}
	public void setPrice2OfJangaRateS(String price2OfJangaRateS) {
		this.price2OfJangaRateS = price2OfJangaRateS;
	}
	public String getPrice2OfJangaRateC() {
		return price2OfJangaRateC;
	}
	public void setPrice2OfJangaRateC(String price2OfJangaRateC) {
		this.price2OfJangaRateC = price2OfJangaRateC;
	}
	public String getPrice2ApasDan() {
		return price2ApasDan;
	}
	public void setPrice2ApasDan(String price2ApasDan) {
		this.price2ApasDan = price2ApasDan;
	}
	public String getPriceLnSeq() {
		return priceLnSeq;
	}
	public void setPriceLnSeq(String priceLnSeq) {
		this.priceLnSeq = priceLnSeq;
	}
	public String getPriceJuso() {
		return priceJuso;
	}
	public void setPriceJuso(String priceJuso) {
		this.priceJuso = priceJuso;
	}
	public String getPriceLotNum() {
		return priceLotNum;
	}
	public void setPriceLotNum(String priceLotNum) {
		this.priceLotNum = priceLotNum;
	}
	public String getPriceDistance() {
		return priceDistance;
	}
	public void setPriceDistance(String priceDistance) {
		this.priceDistance = priceDistance;
	}
	public String getPriceHouseCnt() {
		return priceHouseCnt;
	}
	public void setPriceHouseCnt(String priceHouseCnt) {
		this.priceHouseCnt = priceHouseCnt;
	}
	public String getPriceBYear() {
		return priceBYear;
	}
	public void setPriceBYear(String priceBYear) {
		this.priceBYear = priceBYear;
	}
	public String getPriceElapYear() {
		return priceElapYear;
	}
	public void setPriceElapYear(String priceElapYear) {
		this.priceElapYear = priceElapYear;
	}
	public String getPriceCbStruc() {
		return priceCbStruc;
	}
	public void setPriceCbStruc(String priceCbStruc) {
		this.priceCbStruc = priceCbStruc;
	}
	public String getPriceNumYear() {
		return priceNumYear;
	}
	public void setPriceNumYear(String priceNumYear) {
		this.priceNumYear = priceNumYear;
	}
	public String getPriceCheckYn1() {
		return priceCheckYn1;
	}
	public void setPriceCheckYn1(String priceCheckYn1) {
		this.priceCheckYn1 = priceCheckYn1;
	}
	public String getPriceOnlySize1() {
		return priceOnlySize1;
	}
	public void setPriceOnlySize1(String priceOnlySize1) {
		this.priceOnlySize1 = priceOnlySize1;
	}
	public String getPriceCurrMinAmt1() {
		return priceCurrMinAmt1;
	}
	public void setPriceCurrMinAmt1(String priceCurrMinAmt1) {
		this.priceCurrMinAmt1 = priceCurrMinAmt1;
	}
	public String getPriceCurrMaxAmt1() {
		return priceCurrMaxAmt1;
	}
	public void setPriceCurrMaxAmt1(String priceCurrMaxAmt1) {
		this.priceCurrMaxAmt1 = priceCurrMaxAmt1;
	}
	public String getPriceCurrAvgAmt1() {
		return priceCurrAvgAmt1;
	}
	public void setPriceCurrAvgAmt1(String priceCurrAvgAmt1) {
		this.priceCurrAvgAmt1 = priceCurrAvgAmt1;
	}
	public String getPriceCurrSizeDan1() {
		return priceCurrSizeDan1;
	}
	public void setPriceCurrSizeDan1(String priceCurrSizeDan1) {
		this.priceCurrSizeDan1 = priceCurrSizeDan1;
	}
	public String getPriceLeaseAmt1() {
		return priceLeaseAmt1;
	}
	public void setPriceLeaseAmt1(String priceLeaseAmt1) {
		this.priceLeaseAmt1 = priceLeaseAmt1;
	}
	public String getPriceLeaseRate1() {
		return priceLeaseRate1;
	}
	public void setPriceLeaseRate1(String priceLeaseRate1) {
		this.priceLeaseRate1 = priceLeaseRate1;
	}
	public String getPriceCheckYn2() {
		return priceCheckYn2;
	}
	public void setPriceCheckYn2(String priceCheckYn2) {
		this.priceCheckYn2 = priceCheckYn2;
	}
	public String getPriceOnlySize2() {
		return priceOnlySize2;
	}
	public void setPriceOnlySize2(String priceOnlySize2) {
		this.priceOnlySize2 = priceOnlySize2;
	}
	public String getPriceCurrMinAmt2() {
		return priceCurrMinAmt2;
	}
	public void setPriceCurrMinAmt2(String priceCurrMinAmt2) {
		this.priceCurrMinAmt2 = priceCurrMinAmt2;
	}
	public String getPriceCurrMaxAmt2() {
		return priceCurrMaxAmt2;
	}
	public void setPriceCurrMaxAmt2(String priceCurrMaxAmt2) {
		this.priceCurrMaxAmt2 = priceCurrMaxAmt2;
	}
	public String getPriceCurrAvgAmt2() {
		return priceCurrAvgAmt2;
	}
	public void setPriceCurrAvgAmt2(String priceCurrAvgAmt2) {
		this.priceCurrAvgAmt2 = priceCurrAvgAmt2;
	}
	public String getPriceCurrSizeDan2() {
		return priceCurrSizeDan2;
	}
	public void setPriceCurrSizeDan2(String priceCurrSizeDan2) {
		this.priceCurrSizeDan2 = priceCurrSizeDan2;
	}
	public String getPriceLeaseAmt2() {
		return priceLeaseAmt2;
	}
	public void setPriceLeaseAmt2(String priceLeaseAmt2) {
		this.priceLeaseAmt2 = priceLeaseAmt2;
	}
	public String getPriceLeaseRate2() {
		return priceLeaseRate2;
	}
	public void setPriceLeaseRate2(String priceLeaseRate2) {
		this.priceLeaseRate2 = priceLeaseRate2;
	}
	public String getPriceCheckYn3() {
		return priceCheckYn3;
	}
	public void setPriceCheckYn3(String priceCheckYn3) {
		this.priceCheckYn3 = priceCheckYn3;
	}
	public String getPriceOnlySize3() {
		return priceOnlySize3;
	}
	public void setPriceOnlySize3(String priceOnlySize3) {
		this.priceOnlySize3 = priceOnlySize3;
	}
	public String getPriceCurrMinAmt3() {
		return priceCurrMinAmt3;
	}
	public void setPriceCurrMinAmt3(String priceCurrMinAmt3) {
		this.priceCurrMinAmt3 = priceCurrMinAmt3;
	}
	public String getPriceCurrMaxAmt3() {
		return priceCurrMaxAmt3;
	}
	public void setPriceCurrMaxAmt3(String priceCurrMaxAmt3) {
		this.priceCurrMaxAmt3 = priceCurrMaxAmt3;
	}
	public String getPriceCurrAvgAmt3() {
		return priceCurrAvgAmt3;
	}
	public void setPriceCurrAvgAmt3(String priceCurrAvgAmt3) {
		this.priceCurrAvgAmt3 = priceCurrAvgAmt3;
	}
	public String getPriceCurrSizeDan3() {
		return priceCurrSizeDan3;
	}
	public void setPriceCurrSizeDan3(String priceCurrSizeDan3) {
		this.priceCurrSizeDan3 = priceCurrSizeDan3;
	}
	public String getPriceLeaseAmt3() {
		return priceLeaseAmt3;
	}
	public void setPriceLeaseAmt3(String priceLeaseAmt3) {
		this.priceLeaseAmt3 = priceLeaseAmt3;
	}
	public String getPriceLeaseRate3() {
		return priceLeaseRate3;
	}
	public void setPriceLeaseRate3(String priceLeaseRate3) {
		this.priceLeaseRate3 = priceLeaseRate3;
	}
	public String getAuLnSeqNm() {
		return auLnSeqNm;
	}
	public void setAuLnSeqNm(String auLnSeqNm) {
		this.auLnSeqNm = auLnSeqNm;
	}
	public String getAuFloorCode() {
		return auFloorCode;
	}
	public void setAuFloorCode(String auFloorCode) {
		this.auFloorCode = auFloorCode;
	}
	public String getAuFloorRate() {
		return auFloorRate;
	}
	public void setAuFloorRate(String auFloorRate) {
		this.auFloorRate = auFloorRate;
	}
	public String getAuOnlySize() {
		return auOnlySize;
	}
	public void setAuOnlySize(String auOnlySize) {
		this.auOnlySize = auOnlySize;
	}
	public String getAuBYear() {
		return auBYear;
	}
	public void setAuBYear(String auBYear) {
		this.auBYear = auBYear;
	}
	public String getAuElapYear() {
		return auElapYear;
	}
	public void setAuElapYear(String auElapYear) {
		this.auElapYear = auElapYear;
	}
	public String getAuCbStruc() {
		return auCbStruc;
	}
	public void setAuCbStruc(String auCbStruc) {
		this.auCbStruc = auCbStruc;
	}
	public String getAuNumYear() {
		return auNumYear;
	}
	public void setAuNumYear(String auNumYear) {
		this.auNumYear = auNumYear;
	}
	public String getAuCurrSizeDan() {
		return auCurrSizeDan;
	}
	public void setAuCurrSizeDan(String auCurrSizeDan) {
		this.auCurrSizeDan = auCurrSizeDan;
	}
	public String getCheckYn1() {
		return checkYn1;
	}
	public void setCheckYn1(String checkYn1) {
		this.checkYn1 = checkYn1;
	}
	public String getOnlySize1() {
		return onlySize1;
	}
	public void setOnlySize1(String onlySize1) {
		this.onlySize1 = onlySize1;
	}
	public String getCurrMinAmt1() {
		return currMinAmt1;
	}
	public void setCurrMinAmt1(String currMinAmt1) {
		this.currMinAmt1 = currMinAmt1;
	}
	public String getCurrMaxAmt1() {
		return currMaxAmt1;
	}
	public void setCurrMaxAmt1(String currMaxAmt1) {
		this.currMaxAmt1 = currMaxAmt1;
	}
	public String getCurrAvgAmt1() {
		return currAvgAmt1;
	}
	public void setCurrAvgAmt1(String currAvgAmt1) {
		this.currAvgAmt1 = currAvgAmt1;
	}
	public String getCurrSizeDan1() {
		return currSizeDan1;
	}
	public void setCurrSizeDan1(String currSizeDan1) {
		this.currSizeDan1 = currSizeDan1;
	}
	public String getLeaseAmt1() {
		return leaseAmt1;
	}
	public void setLeaseAmt1(String leaseAmt1) {
		this.leaseAmt1 = leaseAmt1;
	}
	public String getLeaseRate1() {
		return leaseRate1;
	}
	public void setLeaseRate1(String leaseRate1) {
		this.leaseRate1 = leaseRate1;
	}
	public String getCheckYn2() {
		return checkYn2;
	}
	public void setCheckYn2(String checkYn2) {
		this.checkYn2 = checkYn2;
	}
	public String getOnlySize2() {
		return onlySize2;
	}
	public void setOnlySize2(String onlySize2) {
		this.onlySize2 = onlySize2;
	}
	public String getCurrMinAmt2() {
		return currMinAmt2;
	}
	public void setCurrMinAmt2(String currMinAmt2) {
		this.currMinAmt2 = currMinAmt2;
	}
	public String getCurrMaxAmt2() {
		return currMaxAmt2;
	}
	public void setCurrMaxAmt2(String currMaxAmt2) {
		this.currMaxAmt2 = currMaxAmt2;
	}
	public String getCurrAvgAmt2() {
		return currAvgAmt2;
	}
	public void setCurrAvgAmt2(String currAvgAmt2) {
		this.currAvgAmt2 = currAvgAmt2;
	}
	public String getCurrSizeDan2() {
		return currSizeDan2;
	}
	public void setCurrSizeDan2(String currSizeDan2) {
		this.currSizeDan2 = currSizeDan2;
	}
	public String getLeaseAmt2() {
		return leaseAmt2;
	}
	public void setLeaseAmt2(String leaseAmt2) {
		this.leaseAmt2 = leaseAmt2;
	}
	public String getLeaseRate2() {
		return leaseRate2;
	}
	public void setLeaseRate2(String leaseRate2) {
		this.leaseRate2 = leaseRate2;
	}
	public String getCheckYn3() {
		return checkYn3;
	}
	public void setCheckYn3(String checkYn3) {
		this.checkYn3 = checkYn3;
	}
	public String getOnlySize3() {
		return onlySize3;
	}
	public void setOnlySize3(String onlySize3) {
		this.onlySize3 = onlySize3;
	}
	public String getCurrMinAmt3() {
		return currMinAmt3;
	}
	public void setCurrMinAmt3(String currMinAmt3) {
		this.currMinAmt3 = currMinAmt3;
	}
	public String getCurrMaxAmt3() {
		return currMaxAmt3;
	}
	public void setCurrMaxAmt3(String currMaxAmt3) {
		this.currMaxAmt3 = currMaxAmt3;
	}
	public String getCurrAvgAmt3() {
		return currAvgAmt3;
	}
	public void setCurrAvgAmt3(String currAvgAmt3) {
		this.currAvgAmt3 = currAvgAmt3;
	}
	public String getCurrSizeDan3() {
		return currSizeDan3;
	}
	public void setCurrSizeDan3(String currSizeDan3) {
		this.currSizeDan3 = currSizeDan3;
	}
	public String getLeaseAmt3() {
		return leaseAmt3;
	}
	public void setLeaseAmt3(String leaseAmt3) {
		this.leaseAmt3 = leaseAmt3;
	}
	public String getLeaseRate3() {
		return leaseRate3;
	}
	public void setLeaseRate3(String leaseRate3) {
		this.leaseRate3 = leaseRate3;
	}
	public String getSpResult() {
		return spResult;
	}
	public void setSpResult(String spResult) {
		this.spResult = spResult;
	}
	public String getLnSeq() {
		return lnSeq;
	}
	public void setLnSeq(String lnSeq) {
		this.lnSeq = lnSeq;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getJumCode() {
		return jumCode;
	}
	public void setJumCode(String jumCode) {
		this.jumCode = jumCode;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	public String getRegUser() {
		return regUser;
	}
	public void setRegUser(String regUser) {
		this.regUser = regUser;
	}
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
	public String getJuso1() {
		return juso1;
	}
	public void setJuso1(String juso1) {
		this.juso1 = juso1;
	}
	public String getJuso2() {
		return juso2;
	}
	public void setJuso2(String juso2) {
		this.juso2 = juso2;
	}
	public String getLotNum() {
		return lotNum;
	}
	public void setLotNum(String lotNum) {
		this.lotNum = lotNum;
	}
	public String getCbName() {
		return cbName;
	}
	public void setCbName(String cbName) {
		this.cbName = cbName;
	}
	public String getDong() {
		return dong;
	}
	public void setDong(String dong) {
		this.dong = dong;
	}
	public String getHo() {
		return ho;
	}
	public void setHo(String ho) {
		this.ho = ho;
	}
	public String getLcategory() {
		return lcategory;
	}
	public void setLcategory(String lcategory) {
		this.lcategory = lcategory;
	}
	public String getLgOwnerYn() {
		return lgOwnerYn;
	}
	public void setLgOwnerYn(String lgOwnerYn) {
		this.lgOwnerYn = lgOwnerYn;
	}
	public String getLgOwner() {
		return lgOwner;
	}
	public void setLgOwner(String lgOwner) {
		this.lgOwner = lgOwner;
	}
	public String getLgSize() {
		return lgSize;
	}
	public void setLgSize(String lgSize) {
		this.lgSize = lgSize;
	}
	public String getPossAArea() {
		return possAArea;
	}
	public void setPossAArea(String possAArea) {
		this.possAArea = possAArea;
	}
	public String getCbStruc() {
		return cbStruc;
	}
	public void setCbStruc(String cbStruc) {
		this.cbStruc = cbStruc;
	}
	public String getCbRoof() {
		return cbRoof;
	}
	public void setCbRoof(String cbRoof) {
		this.cbRoof = cbRoof;
	}
	public String getCbUpfloor() {
		return cbUpfloor;
	}
	public void setCbUpfloor(String cbUpfloor) {
		this.cbUpfloor = cbUpfloor;
	}
	public String getCbDnfloor() {
		return cbDnfloor;
	}
	public void setCbDnfloor(String cbDnfloor) {
		this.cbDnfloor = cbDnfloor;
	}
	public String getCbFloor() {
		return cbFloor;
	}
	public void setCbFloor(String cbFloor) {
		this.cbFloor = cbFloor;
	}
	public String getCbYyyy() {
		return cbYyyy;
	}
	public void setCbYyyy(String cbYyyy) {
		this.cbYyyy = cbYyyy;
	}
	public String getElapYear() {
		return elapYear;
	}
	public void setElapYear(String elapYear) {
		this.elapYear = elapYear;
	}
	public String getNumHousehold() {
		return numHousehold;
	}
	public void setNumHousehold(String numHousehold) {
		this.numHousehold = numHousehold;
	}
	public String getNumYear() {
		return numYear;
	}
	public void setNumYear(String numYear) {
		this.numYear = numYear;
	}
	public String getCbExmSize() {
		return cbExmSize;
	}
	public void setCbExmSize(String cbExmSize) {
		this.cbExmSize = cbExmSize;
	}
	public String getCbExmSizePy() {
		return cbExmSizePy;
	}
	public void setCbExmSizePy(String cbExmSizePy) {
		this.cbExmSizePy = cbExmSizePy;
	}
	public String getCbPubSize() {
		return cbPubSize;
	}
	public void setCbPubSize(String cbPubSize) {
		this.cbPubSize = cbPubSize;
	}
	public String getCbPubSizePy() {
		return cbPubSizePy;
	}
	public void setCbPubSizePy(String cbPubSizePy) {
		this.cbPubSizePy = cbPubSizePy;
	}
	public String getCbTotSize() {
		return cbTotSize;
	}
	public void setCbTotSize(String cbTotSize) {
		this.cbTotSize = cbTotSize;
	}
	public String getCbTotSizePy() {
		return cbTotSizePy;
	}
	public void setCbTotSizePy(String cbTotSizePy) {
		this.cbTotSizePy = cbTotSizePy;
	}
	public String getOfGu() {
		return ofGu;
	}
	public void setOfGu(String ofGu) {
		this.ofGu = ofGu;
	}
	public String getOfHeaterYn() {
		return ofHeaterYn;
	}
	public void setOfHeaterYn(String ofHeaterYn) {
		this.ofHeaterYn = ofHeaterYn;
	}
	public String getOfFloor() {
		return ofFloor;
	}
	public void setOfFloor(String ofFloor) {
		this.ofFloor = ofFloor;
	}
	public String getOfFloorIdx() {
		return ofFloorIdx;
	}
	public void setOfFloorIdx(String ofFloorIdx) {
		this.ofFloorIdx = ofFloorIdx;
	}
	public String getOfPlace() {
		return ofPlace;
	}
	public void setOfPlace(String ofPlace) {
		this.ofPlace = ofPlace;
	}
	public String getOfPlaceIdx() {
		return ofPlaceIdx;
	}
	public void setOfPlaceIdx(String ofPlaceIdx) {
		this.ofPlaceIdx = ofPlaceIdx;
	}
	public String getOfJangaRate() {
		return ofJangaRate;
	}
	public void setOfJangaRate(String ofJangaRate) {
		this.ofJangaRate = ofJangaRate;
	}
	public String getOfRoadCode() {
		return ofRoadCode;
	}
	public void setOfRoadCode(String ofRoadCode) {
		this.ofRoadCode = ofRoadCode;
	}
	public String getOfAccessCode() {
		return ofAccessCode;
	}
	public void setOfAccessCode(String ofAccessCode) {
		this.ofAccessCode = ofAccessCode;
	}
	public String getOfEtc() {
		return ofEtc;
	}
	public void setOfEtc(String ofEtc) {
		this.ofEtc = ofEtc;
	}
	public String getOfEtcIdx() {
		return ofEtcIdx;
	}
	public void setOfEtcIdx(String ofEtcIdx) {
		this.ofEtcIdx = ofEtcIdx;
	}
	public String getRegiAmt() {
		return regiAmt;
	}
	public void setRegiAmt(String regiAmt) {
		this.regiAmt = regiAmt;
	}
	public String getRegiDan() {
		return regiDan;
	}
	public void setRegiDan(String regiDan) {
		this.regiDan = regiDan;
	}
	public String getRegiDanPy() {
		return regiDanPy;
	}
	public void setRegiDanPy(String regiDanPy) {
		this.regiDanPy = regiDanPy;
	}
	public String getBaseAmt() {
		return baseAmt;
	}
	public void setBaseAmt(String baseAmt) {
		this.baseAmt = baseAmt;
	}
	public String getBaseDan() {
		return baseDan;
	}
	public void setBaseDan(String baseDan) {
		this.baseDan = baseDan;
	}
	public String getBaseDanPy() {
		return baseDanPy;
	}
	public void setBaseDanPy(String baseDanPy) {
		this.baseDanPy = baseDanPy;
	}
	public String getSecRegiSize() {
		return secRegiSize;
	}
	public void setSecRegiSize(String secRegiSize) {
		this.secRegiSize = secRegiSize;
	}
	public String getSecNume() {
		return secNume;
	}
	public void setSecNume(String secNume) {
		this.secNume = secNume;
	}
	public String getSecDeno() {
		return secDeno;
	}
	public void setSecDeno(String secDeno) {
		this.secDeno = secDeno;
	}
	public String getSecRate() {
		return secRate;
	}
	public void setSecRate(String secRate) {
		this.secRate = secRate;
	}
	public String getSecOfferSize() {
		return secOfferSize;
	}
	public void setSecOfferSize(String secOfferSize) {
		this.secOfferSize = secOfferSize;
	}
	public String getSecDesc() {
		return secDesc;
	}
	public void setSecDesc(String secDesc) {
		this.secDesc = secDesc;
	}
	public String getIncAmt() {
		return incAmt;
	}
	public void setIncAmt(String incAmt) {
		this.incAmt = incAmt;
	}
	public String getFnlIncAmt() {
		return fnlIncAmt;
	}
	public void setFnlIncAmt(String fnlIncAmt) {
		this.fnlIncAmt = fnlIncAmt;
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
	public String getProcDiv() {
		return procDiv;
	}
	public void setProcDiv(String procDiv) {
		this.procDiv = procDiv;
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
	public String getCdCode() {
		return cdCode;
	}
	public void setCdCode(String cdCode) {
		this.cdCode = cdCode;
	}
	public String getAttr01() {
		return attr01;
	}
	public void setAttr01(String attr01) {
		this.attr01 = attr01;
	}
	public String getCdDesc() {
		return cdDesc;
	}
	public void setCdDesc(String cdDesc) {
		this.cdDesc = cdDesc;
	}
	public String getMentItems() {
		return mentItems;
	}
	public void setMentItems(String mentItems) {
		this.mentItems = mentItems;
	}
	public String getMentItem() {
		return mentItem;
	}
	public void setMentItem(String mentItem) {
		this.mentItem = mentItem;
	}
	public String getDocKey() {
		return docKey;
	}
	public void setDocKey(String docKey) {
		this.docKey = docKey;
	}
	public String getSangho() {
		return sangho;
	}
	public void setSangho(String sangho) {
		this.sangho = sangho;
	}
	public String getSearchSangho() {
		return searchSangho;
	}
	public void setSearchSangho(String searchSangho) {
		this.searchSangho = searchSangho;
	}
	public String getGeoCode() {
		return geoCode;
	}
	public void setGeoCode(String geoCode) {
		this.geoCode = geoCode;
	}
	public String getDaepyoName() {
		return daepyoName;
	}
	public void setDaepyoName(String daepyoName) {
		this.daepyoName = daepyoName;
	}
	public String getMarketDiv() {
		return marketDiv;
	}
	public void setMarketDiv(String marketDiv) {
		this.marketDiv = marketDiv;
	}
	public String getMarketName() {
		return marketName;
	}
	public void setMarketName(String marketName) {
		this.marketName = marketName;
	}
	public String getMarketCeo() {
		return marketCeo;
	}
	public void setMarketCeo(String marketCeo) {
		this.marketCeo = marketCeo;
	}
	public String getDebtor() {
		return debtor;
	}
	public void setDebtor(String debtor) {
		this.debtor = debtor;
	}
	public String getDebtorRelation() {
		return debtorRelation;
	}
	public void setDebtorRelation(String debtorRelation) {
		this.debtorRelation = debtorRelation;
	}
	public String getGuarantor() {
		return guarantor;
	}
	public void setGuarantor(String guarantor) {
		this.guarantor = guarantor;
	}
	public String getEsDiv() {
		return esDiv;
	}
	public void setEsDiv(String esDiv) {
		this.esDiv = esDiv;
	}
	public String getPossOwner() {
		return possOwner;
	}
	public void setPossOwner(String possOwner) {
		this.possOwner = possOwner;
	}
	public String getLgSizePy() {
		return lgSizePy;
	}
	public void setLgSizePy(String lgSizePy) {
		this.lgSizePy = lgSizePy;
	}
	public String getSecCode() {
		return secCode;
	}
	public void setSecCode(String secCode) {
		this.secCode = secCode;
	}
	public String getTemps() {
		return temps;
	}
	public void setTemps(String temps) {
		this.temps = temps;
	}
	public String getLiquorType() {
		return liquorType;
	}
	public void setLiquorType(String liquorType) {
		this.liquorType = liquorType;
	}
	public String getReqJum() {
		return reqJum;
	}
	public void setReqJum(String reqJum) {
		this.reqJum = reqJum;
	}
	public String getPossAAreaBid() {
		return possAAreaBid;
	}
	public void setPossAAreaBid(String possAAreaBid) {
		this.possAAreaBid = possAAreaBid;
	}
	public String getRestPlUse() {
		return restPlUse;
	}
	public void setRestPlUse(String restPlUse) {
		this.restPlUse = restPlUse;
	}
	public String getRestOtLaw() {
		return restOtLaw;
	}
	public void setRestOtLaw(String restOtLaw) {
		this.restOtLaw = restOtLaw;
	}
	public String getRestEnRule() {
		return restEnRule;
	}
	public void setRestEnRule(String restEnRule) {
		this.restEnRule = restEnRule;
	}
	public String getRestFuLaw() {
		return restFuLaw;
	}
	public void setRestFuLaw(String restFuLaw) {
		this.restFuLaw = restFuLaw;
	}
	public String getMaMinAmt() {
		return maMinAmt;
	}
	public void setMaMinAmt(String maMinAmt) {
		this.maMinAmt = maMinAmt;
	}
	public String getMaRate() {
		return maRate;
	}
	public void setMaRate(String maRate) {
		this.maRate = maRate;
	}
	public String getMaMaxAmt() {
		return maMaxAmt;
	}
	public void setMaMaxAmt(String maMaxAmt) {
		this.maMaxAmt = maMaxAmt;
	}
	public String getPrMinAmt() {
		return prMinAmt;
	}
	public void setPrMinAmt(String prMinAmt) {
		this.prMinAmt = prMinAmt;
	}
	public String getPrRate() {
		return prRate;
	}
	public void setPrRate(String prRate) {
		this.prRate = prRate;
	}
	public String getPrMaxAmt() {
		return prMaxAmt;
	}
	public void setPrMaxAmt(String prMaxAmt) {
		this.prMaxAmt = prMaxAmt;
	}
	public String getAuMinAmt() {
		return auMinAmt;
	}
	public void setAuMinAmt(String auMinAmt) {
		this.auMinAmt = auMinAmt;
	}
	public String getAuRate() {
		return auRate;
	}
	public void setAuRate(String auRate) {
		this.auRate = auRate;
	}
	public String getAuMaxAmt() {
		return auMaxAmt;
	}
	public void setAuMaxAmt(String auMaxAmt) {
		this.auMaxAmt = auMaxAmt;
	}
	public String getApplAmt() {
		return applAmt;
	}
	public void setApplAmt(String applAmt) {
		this.applAmt = applAmt;
	}
	public String getBuildIncreaseAmt() {
		return buildIncreaseAmt;
	}
	public void setBuildIncreaseAmt(String buildIncreaseAmt) {
		this.buildIncreaseAmt = buildIncreaseAmt;
	}
	public String getBuildlastIncreaseAmt() {
		return buildlastIncreaseAmt;
	}
	public void setBuildlastIncreaseAmt(String buildlastIncreaseAmt) {
		this.buildlastIncreaseAmt = buildlastIncreaseAmt;
	}
	public String getIntRepSize() {
		return intRepSize;
	}
	public void setIntRepSize(String intRepSize) {
		this.intRepSize = intRepSize;
	}
	public String getIntRepSizePy() {
		return intRepSizePy;
	}
	public void setIntRepSizePy(String intRepSizePy) {
		this.intRepSizePy = intRepSizePy;
	}
	public String getInteriorCosts() {
		return interiorCosts;
	}
	public void setInteriorCosts(String interiorCosts) {
		this.interiorCosts = interiorCosts;
	}
	public String getIntRepDan() {
		return intRepDan;
	}
	public void setIntRepDan(String intRepDan) {
		this.intRepDan = intRepDan;
	}
	public String getIntRepAmt() {
		return intRepAmt;
	}
	public void setIntRepAmt(String intRepAmt) {
		this.intRepAmt = intRepAmt;
	}
	public String getpBidRate() {
		return pBidRate;
	}
	public void setpBidRate(String pBidRate) {
		this.pBidRate = pBidRate;
	}
	public String getkBidRate() {
		return kBidRate;
	}
	public void setkBidRate(String kBidRate) {
		this.kBidRate = kBidRate;
	}
	public String getbBidRateTmp() {
		return bBidRateTmp;
	}
	public void setbBidRateTmp(String bBidRateTmp) {
		this.bBidRateTmp = bBidRateTmp;
	}
	public String getbBidRate() {
		return bBidRate;
	}
	public void setbBidRate(String bBidRate) {
		this.bBidRate = bBidRate;
	}
	public String getApplRate() {
		return applRate;
	}
	public void setApplRate(String applRate) {
		this.applRate = applRate;
	}
	public String getAptScale() {
		return aptScale;
	}
	public void setAptScale(String aptScale) {
		this.aptScale = aptScale;
	}
	public String getAptScaleRate() {
		return aptScaleRate;
	}
	public void setAptScaleRate(String aptScaleRate) {
		this.aptScaleRate = aptScaleRate;
	}
	public String getAptExmSize() {
		return aptExmSize;
	}
	public void setAptExmSize(String aptExmSize) {
		this.aptExmSize = aptExmSize;
	}
	public String getAptExmRate() {
		return aptExmRate;
	}
	public void setAptExmRate(String aptExmRate) {
		this.aptExmRate = aptExmRate;
	}
	public String getAptFloorCode() {
		return aptFloorCode;
	}
	public void setAptFloorCode(String aptFloorCode) {
		this.aptFloorCode = aptFloorCode;
	}
	public String getAptFloorRate() {
		return aptFloorRate;
	}
	public void setAptFloorRate(String aptFloorRate) {
		this.aptFloorRate = aptFloorRate;
	}
	public String getAptElapCode() {
		return aptElapCode;
	}
	public void setAptElapCode(String aptElapCode) {
		this.aptElapCode = aptElapCode;
	}
	public String getAptElapRate() {
		return aptElapRate;
	}
	public void setAptElapRate(String aptElapRate) {
		this.aptElapRate = aptElapRate;
	}
	public String getRightsCode() {
		return rightsCode;
	}
	public void setRightsCode(String rightsCode) {
		this.rightsCode = rightsCode;
	}
	public String getRightsRate() {
		return rightsRate;
	}
	public void setRightsRate(String rightsRate) {
		this.rightsRate = rightsRate;
	}
	public String getIncreaseAmt() {
		return increaseAmt;
	}
	public void setIncreaseAmt(String increaseAmt) {
		this.increaseAmt = increaseAmt;
	}
	public String getPlMinBidAmt() {
		return plMinBidAmt;
	}
	public void setPlMinBidAmt(String plMinBidAmt) {
		this.plMinBidAmt = plMinBidAmt;
	}
	public String getPlBidAmt() {
		return plBidAmt;
	}
	public void setPlBidAmt(String plBidAmt) {
		this.plBidAmt = plBidAmt;
	}
	public String getIncreaseAmt1() {
		return increaseAmt1;
	}
	public void setIncreaseAmt1(String increaseAmt1) {
		this.increaseAmt1 = increaseAmt1;
	}
	public String getAuctionCode() {
		return auctionCode;
	}
	public void setAuctionCode(String auctionCode) {
		this.auctionCode = auctionCode;
	}
	public String getAuctionAmt() {
		return auctionAmt;
	}
	public void setAuctionAmt(String auctionAmt) {
		this.auctionAmt = auctionAmt;
	}
	public String gethPlBidAmt() {
		return hPlBidAmt;
	}
	public void sethPlBidAmt(String hPlBidAmt) {
		this.hPlBidAmt = hPlBidAmt;
	}
	public String gethPossAmt() {
		return hPossAmt;
	}
	public void sethPossAmt(String hPossAmt) {
		this.hPossAmt = hPossAmt;
	}
	public String gethPossAArea() {
		return hPossAArea;
	}
	public void sethPossAArea(String hPossAArea) {
		this.hPossAArea = hPossAArea;
	}
	public String gethPossAAmt() {
		return hPossAAmt;
	}
	public void sethPossAAmt(String hPossAAmt) {
		this.hPossAAmt = hPossAAmt;
	}
	public String getDispRank() {
		return dispRank;
	}
	public void setDispRank(String dispRank) {
		this.dispRank = dispRank;
	}
	public String getRightDate() {
		return rightDate;
	}
	public void setRightDate(String rightDate) {
		this.rightDate = rightDate;
	}
	public String getHiteYn() {
		return hiteYn;
	}
	public void setHiteYn(String hiteYn) {
		this.hiteYn = hiteYn;
	}
	public String getRightCode() {
		return rightCode;
	}
	public void setRightCode(String rightCode) {
		this.rightCode = rightCode;
	}
	public String getEraYn() {
		return eraYn;
	}
	public void setEraYn(String eraYn) {
		this.eraYn = eraYn;
	}
	public String getCredSelfAmtOrg() {
		return credSelfAmtOrg;
	}
	public void setCredSelfAmtOrg(String credSelfAmtOrg) {
		this.credSelfAmtOrg = credSelfAmtOrg;
	}
	public String getCredCombAmtOrg() {
		return credCombAmtOrg;
	}
	public void setCredCombAmtOrg(String credCombAmtOrg) {
		this.credCombAmtOrg = credCombAmtOrg;
	}
	public String getRightPerson() {
		return rightPerson;
	}
	public void setRightPerson(String rightPerson) {
		this.rightPerson = rightPerson;
	}
	public String getProRateCode() {
		return proRateCode;
	}
	public void setProRateCode(String proRateCode) {
		this.proRateCode = proRateCode;
	}
	public String getDispRankData() {
		return dispRankData;
	}
	public void setDispRankData(String dispRankData) {
		this.dispRankData = dispRankData;
	}
	public String getRightCodeData() {
		return rightCodeData;
	}
	public void setRightCodeData(String rightCodeData) {
		this.rightCodeData = rightCodeData;
	}
	public String getRightDateData() {
		return rightDateData;
	}
	public void setRightDateData(String rightDateData) {
		this.rightDateData = rightDateData;
	}
	public String getHiteYnData() {
		return hiteYnData;
	}
	public void setHiteYnData(String hiteYnData) {
		this.hiteYnData = hiteYnData;
	}
	public String getEraYnData() {
		return eraYnData;
	}
	public void setEraYnData(String eraYnData) {
		this.eraYnData = eraYnData;
	}
	public String getCredSelfAmtOrgData() {
		return credSelfAmtOrgData;
	}
	public void setCredSelfAmtOrgData(String credSelfAmtOrgData) {
		this.credSelfAmtOrgData = credSelfAmtOrgData;
	}
	public String getCredCombAmtOrgData() {
		return credCombAmtOrgData;
	}
	public void setCredCombAmtOrgData(String credCombAmtOrgData) {
		this.credCombAmtOrgData = credCombAmtOrgData;
	}
	public String getRightPersonData() {
		return rightPersonData;
	}
	public void setRightPersonData(String rightPersonData) {
		this.rightPersonData = rightPersonData;
	}
	public String getProRateCodeData() {
		return proRateCodeData;
	}
	public void setProRateCodeData(String proRateCodeData) {
		this.proRateCodeData = proRateCodeData;
	}
	public String getbSizePy() {
		return bSizePy;
	}
	public void setbSizePy(String bSizePy) {
		this.bSizePy = bSizePy;
	}
	public String getCurrMinAmt() {
		return currMinAmt;
	}
	public void setCurrMinAmt(String currMinAmt) {
		this.currMinAmt = currMinAmt;
	}
	public String getCurrMaxAmt() {
		return currMaxAmt;
	}
	public void setCurrMaxAmt(String currMaxAmt) {
		this.currMaxAmt = currMaxAmt;
	}
	public String getCurrAvgAmt() {
		return currAvgAmt;
	}
	public void setCurrAvgAmt(String currAvgAmt) {
		this.currAvgAmt = currAvgAmt;
	}
	public String getCurrPyDan() {
		return currPyDan;
	}
	public void setCurrPyDan(String currPyDan) {
		this.currPyDan = currPyDan;
	}
	public String getLeaseAmt() {
		return leaseAmt;
	}
	public void setLeaseAmt(String leaseAmt) {
		this.leaseAmt = leaseAmt;
	}
	public String getLeaseRate() {
		return leaseRate;
	}
	public void setLeaseRate(String leaseRate) {
		this.leaseRate = leaseRate;
	}
	public String getCheckApt() {
		return checkApt;
	}
	public void setCheckApt(String checkApt) {
		this.checkApt = checkApt;
	}
	public String getbName() {
		return bName;
	}
	public void setbName(String bName) {
		this.bName = bName;
	}
	public String getJuso() {
		return juso;
	}
	public void setJuso(String juso) {
		this.juso = juso;
	}
	public String getbYear() {
		return bYear;
	}
	public void setbYear(String bYear) {
		this.bYear = bYear;
	}
	public String getHouseCnt() {
		return houseCnt;
	}
	public void setHouseCnt(String houseCnt) {
		this.houseCnt = houseCnt;
	}
	public String getAuNo() {
		return auNo;
	}
	public void setAuNo(String auNo) {
		this.auNo = auNo;
	}
	public String getAuCheckYn() {
		return auCheckYn;
	}
	public void setAuCheckYn(String auCheckYn) {
		this.auCheckYn = auCheckYn;
	}
	public String getAuBName() {
		return auBName;
	}
	public void setAuBName(String auBName) {
		this.auBName = auBName;
	}
	public String getAuJuso() {
		return auJuso;
	}
	public void setAuJuso(String auJuso) {
		this.auJuso = auJuso;
	}
	public String getAuTotFloor() {
		return auTotFloor;
	}
	public void setAuTotFloor(String auTotFloor) {
		this.auTotFloor = auTotFloor;
	}
	public String getAuFloor() {
		return auFloor;
	}
	public void setAuFloor(String auFloor) {
		this.auFloor = auFloor;
	}
	public String getAuBSizePy() {
		return auBSizePy;
	}
	public void setAuBSizePy(String auBSizePy) {
		this.auBSizePy = auBSizePy;
	}
	public String getAuLawAmt() {
		return auLawAmt;
	}
	public void setAuLawAmt(String auLawAmt) {
		this.auLawAmt = auLawAmt;
	}
	public String getAuCurrPyDan() {
		return auCurrPyDan;
	}
	public void setAuCurrPyDan(String auCurrPyDan) {
		this.auCurrPyDan = auCurrPyDan;
	}
	public String getAuBidAmt() {
		return auBidAmt;
	}
	public void setAuBidAmt(String auBidAmt) {
		this.auBidAmt = auBidAmt;
	}
	public String getAuBidRate() {
		return auBidRate;
	}
	public void setAuBidRate(String auBidRate) {
		this.auBidRate = auBidRate;
	}
	public String getAuNoData() {
		return auNoData;
	}
	public void setAuNoData(String auNoData) {
		this.auNoData = auNoData;
	}
	public String getAuCheckYnData() {
		return auCheckYnData;
	}
	public void setAuCheckYnData(String auCheckYnData) {
		this.auCheckYnData = auCheckYnData;
	}
	public String getAuBNameData() {
		return auBNameData;
	}
	public void setAuBNameData(String auBNameData) {
		this.auBNameData = auBNameData;
	}
	public String getAuJusoData() {
		return auJusoData;
	}
	public void setAuJusoData(String auJusoData) {
		this.auJusoData = auJusoData;
	}
	public String getAuTotFloorData() {
		return auTotFloorData;
	}
	public void setAuTotFloorData(String auTotFloorData) {
		this.auTotFloorData = auTotFloorData;
	}
	public String getAuFloorData() {
		return auFloorData;
	}
	public void setAuFloorData(String auFloorData) {
		this.auFloorData = auFloorData;
	}
	public String getAuBSizePyData() {
		return auBSizePyData;
	}
	public void setAuBSizePyData(String auBSizePyData) {
		this.auBSizePyData = auBSizePyData;
	}
	public String getAuLawAmtData() {
		return auLawAmtData;
	}
	public void setAuLawAmtData(String auLawAmtData) {
		this.auLawAmtData = auLawAmtData;
	}
	public String getAuCurrPyDanData() {
		return auCurrPyDanData;
	}
	public void setAuCurrPyDanData(String auCurrPyDanData) {
		this.auCurrPyDanData = auCurrPyDanData;
	}
	public String getAuBidAmtData() {
		return auBidAmtData;
	}
	public void setAuBidAmtData(String auBidAmtData) {
		this.auBidAmtData = auBidAmtData;
	}
	public String getAuBidRateData() {
		return auBidRateData;
	}
	public void setAuBidRateData(String auBidRateData) {
		this.auBidRateData = auBidRateData;
	}
	public String getCaMLnSeq() {
		return caMLnSeq;
	}
	public void setCaMLnSeq(String caMLnSeq) {
		this.caMLnSeq = caMLnSeq;
	}
	public String getCaMBName() {
		return caMBName;
	}
	public void setCaMBName(String caMBName) {
		this.caMBName = caMBName;
	}
	public String getCaMJuso() {
		return caMJuso;
	}
	public void setCaMJuso(String caMJuso) {
		this.caMJuso = caMJuso;
	}
	public String getCaMBYear() {
		return caMBYear;
	}
	public void setCaMBYear(String caMBYear) {
		this.caMBYear = caMBYear;
	}
	public String getCaMHouseCnt() {
		return caMHouseCnt;
	}
	public void setCaMHouseCnt(String caMHouseCnt) {
		this.caMHouseCnt = caMHouseCnt;
	}
	public String getCaseDbSizePy() {
		return caseDbSizePy;
	}
	public void setCaseDbSizePy(String caseDbSizePy) {
		this.caseDbSizePy = caseDbSizePy;
	}
	public String getCaseDLnSeq() {
		return caseDLnSeq;
	}
	public void setCaseDLnSeq(String caseDLnSeq) {
		this.caseDLnSeq = caseDLnSeq;
	}
	public String getCaseDcurrMinAmt() {
		return caseDcurrMinAmt;
	}
	public void setCaseDcurrMinAmt(String caseDcurrMinAmt) {
		this.caseDcurrMinAmt = caseDcurrMinAmt;
	}
	public String getCaseDcurrMaxAmt() {
		return caseDcurrMaxAmt;
	}
	public void setCaseDcurrMaxAmt(String caseDcurrMaxAmt) {
		this.caseDcurrMaxAmt = caseDcurrMaxAmt;
	}
	public String getCaseDcurrAvgAmt() {
		return caseDcurrAvgAmt;
	}
	public void setCaseDcurrAvgAmt(String caseDcurrAvgAmt) {
		this.caseDcurrAvgAmt = caseDcurrAvgAmt;
	}
	public String getCaseDcurrPyDan() {
		return caseDcurrPyDan;
	}
	public void setCaseDcurrPyDan(String caseDcurrPyDan) {
		this.caseDcurrPyDan = caseDcurrPyDan;
	}
	public String getCaseDleaseAmt() {
		return caseDleaseAmt;
	}
	public void setCaseDleaseAmt(String caseDleaseAmt) {
		this.caseDleaseAmt = caseDleaseAmt;
	}
	public String getCaseDleaseRate() {
		return caseDleaseRate;
	}
	public void setCaseDleaseRate(String caseDleaseRate) {
		this.caseDleaseRate = caseDleaseRate;
	}
	public String getCaseDCheckYn() {
		return caseDCheckYn;
	}
	public void setCaseDCheckYn(String caseDCheckYn) {
		this.caseDCheckYn = caseDCheckYn;
	}
	public String getCaMBNameData() {
		return caMBNameData;
	}
	public void setCaMBNameData(String caMBNameData) {
		this.caMBNameData = caMBNameData;
	}
	public String getCaMJusoData() {
		return caMJusoData;
	}
	public void setCaMJusoData(String caMJusoData) {
		this.caMJusoData = caMJusoData;
	}
	public String getCaMBYearData() {
		return caMBYearData;
	}
	public void setCaMBYearData(String caMBYearData) {
		this.caMBYearData = caMBYearData;
	}
	public String getCaMHouseCntData() {
		return caMHouseCntData;
	}
	public void setCaMHouseCntData(String caMHouseCntData) {
		this.caMHouseCntData = caMHouseCntData;
	}
	public String getCaseDbSizePyData() {
		return caseDbSizePyData;
	}
	public void setCaseDbSizePyData(String caseDbSizePyData) {
		this.caseDbSizePyData = caseDbSizePyData;
	}
	public String getCaseDLnSeqData() {
		return caseDLnSeqData;
	}
	public void setCaseDLnSeqData(String caseDLnSeqData) {
		this.caseDLnSeqData = caseDLnSeqData;
	}
	public String getCaseDcurrMinAmtData() {
		return caseDcurrMinAmtData;
	}
	public void setCaseDcurrMinAmtData(String caseDcurrMinAmtData) {
		this.caseDcurrMinAmtData = caseDcurrMinAmtData;
	}
	public String getCaseDcurrMaxAmtData() {
		return caseDcurrMaxAmtData;
	}
	public void setCaseDcurrMaxAmtData(String caseDcurrMaxAmtData) {
		this.caseDcurrMaxAmtData = caseDcurrMaxAmtData;
	}
	public String getCaseDcurrAvgAmtData() {
		return caseDcurrAvgAmtData;
	}
	public void setCaseDcurrAvgAmtData(String caseDcurrAvgAmtData) {
		this.caseDcurrAvgAmtData = caseDcurrAvgAmtData;
	}
	public String getCaseDcurrPyDanData() {
		return caseDcurrPyDanData;
	}
	public void setCaseDcurrPyDanData(String caseDcurrPyDanData) {
		this.caseDcurrPyDanData = caseDcurrPyDanData;
	}
	public String getCaseDleaseAmtData() {
		return caseDleaseAmtData;
	}
	public void setCaseDleaseAmtData(String caseDleaseAmtData) {
		this.caseDleaseAmtData = caseDleaseAmtData;
	}
	public String getCaseDleaseRateData() {
		return caseDleaseRateData;
	}
	public void setCaseDleaseRateData(String caseDleaseRateData) {
		this.caseDleaseRateData = caseDleaseRateData;
	}
	public String getCaseDCheckYnData() {
		return caseDCheckYnData;
	}
	public void setCaseDCheckYnData(String caseDCheckYnData) {
		this.caseDCheckYnData = caseDCheckYnData;
	}
	public String getNumberGu() {
		return numberGu;
	}
	public void setNumberGu(String numberGu) {
		this.numberGu = numberGu;
	}
	public String getResiName() {
		return resiName;
	}
	public void setResiName(String resiName) {
		this.resiName = resiName;
	}
	public String getResiRmCnt() {
		return resiRmCnt;
	}
	public void setResiRmCnt(String resiRmCnt) {
		this.resiRmCnt = resiRmCnt;
	}
	public String getFxdateYn() {
		return fxdateYn;
	}
	public void setFxdateYn(String fxdateYn) {
		this.fxdateYn = fxdateYn;
	}
	public String getPossARmCnt() {
		return possARmCnt;
	}
	public void setPossARmCnt(String possARmCnt) {
		this.possARmCnt = possARmCnt;
	}
	public String getHleaseAmt() {
		return hleaseAmt;
	}
	public void setHleaseAmt(String hleaseAmt) {
		this.hleaseAmt = hleaseAmt;
	}
	public String getRepBeSecAmt() {
		return repBeSecAmt;
	}
	public void setRepBeSecAmt(String repBeSecAmt) {
		this.repBeSecAmt = repBeSecAmt;
	}
	public String getFxleaAmt() {
		return fxleaAmt;
	}
	public void setFxleaAmt(String fxleaAmt) {
		this.fxleaAmt = fxleaAmt;
	}
	public String getFxleaNoAmt() {
		return fxleaNoAmt;
	}
	public void setFxleaNoAmt(String fxleaNoAmt) {
		this.fxleaNoAmt = fxleaNoAmt;
	}
	public String getNumberGuData() {
		return numberGuData;
	}
	public void setNumberGuData(String numberGuData) {
		this.numberGuData = numberGuData;
	}
	public String getResiNameData() {
		return resiNameData;
	}
	public void setResiNameData(String resiNameData) {
		this.resiNameData = resiNameData;
	}
	public String getResiRmCntData() {
		return resiRmCntData;
	}
	public void setResiRmCntData(String resiRmCntData) {
		this.resiRmCntData = resiRmCntData;
	}
	public String getFxdateYnData() {
		return fxdateYnData;
	}
	public void setFxdateYnData(String fxdateYnData) {
		this.fxdateYnData = fxdateYnData;
	}
	public String getPossARmCntData() {
		return possARmCntData;
	}
	public void setPossARmCntData(String possARmCntData) {
		this.possARmCntData = possARmCntData;
	}
	public String getHleaseAmtData() {
		return hleaseAmtData;
	}
	public void setHleaseAmtData(String hleaseAmtData) {
		this.hleaseAmtData = hleaseAmtData;
	}
	public String getRepBeSecAmtData() {
		return repBeSecAmtData;
	}
	public void setRepBeSecAmtData(String repBeSecAmtData) {
		this.repBeSecAmtData = repBeSecAmtData;
	}
	public String getFxleaAmtData() {
		return fxleaAmtData;
	}
	public void setFxleaAmtData(String fxleaAmtData) {
		this.fxleaAmtData = fxleaAmtData;
	}
	public String getFxleaNoAmtData() {
		return fxleaNoAmtData;
	}
	public void setFxleaNoAmtData(String fxleaNoAmtData) {
		this.fxleaNoAmtData = fxleaNoAmtData;
	}
	public String getCredMaxAmt() {
		return credMaxAmt;
	}
	public void setCredMaxAmt(String credMaxAmt) {
		this.credMaxAmt = credMaxAmt;
	}
	public String getApartmentComplexSizeList() {
		return apartmentComplexSizeList;
	}
	public void setApartmentComplexSizeList(String apartmentComplexSizeList) {
		this.apartmentComplexSizeList = apartmentComplexSizeList;
	}
	public String getJonYuPartAreaAptList() {
		return jonYuPartAreaAptList;
	}
	public void setJonYuPartAreaAptList(String jonYuPartAreaAptList) {
		this.jonYuPartAreaAptList = jonYuPartAreaAptList;
	}
	public String getJeonyuPartLocation() {
		return jeonyuPartLocation;
	}
	public void setJeonyuPartLocation(String jeonyuPartLocation) {
		this.jeonyuPartLocation = jeonyuPartLocation;
	}
	public String getBuildTransitYearAptList() {
		return buildTransitYearAptList;
	}
	public void setBuildTransitYearAptList(String buildTransitYearAptList) {
		this.buildTransitYearAptList = buildTransitYearAptList;
	}
	public String getFormOccpantAptList() {
		return formOccpantAptList;
	}
	public void setFormOccpantAptList(String formOccpantAptList) {
		this.formOccpantAptList = formOccpantAptList;
	}
	public String getEstiDateCheck() {
		return estiDateCheck;
	}
	public void setEstiDateCheck(String estiDateCheck) {
		this.estiDateCheck = estiDateCheck;
	} 
	

}
