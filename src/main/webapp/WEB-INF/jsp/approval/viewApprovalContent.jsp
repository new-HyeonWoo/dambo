<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<%
  /**
  * @Class Name : viewApprovalContent.jsp
  * @Description : 전자결재 Sample 본문 화면
  * @Modification Information
  *
  *   수정일         수정자                   수정내용
  *  -------    --------    ---------------------------
  *  2009.02.01            최초 생성
  *
  * author 실행환경 개발팀
  * since 2009.02.01
  *
  * Copyright (C) 2009 by MOPAS  All right reserved.
  */
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:x="urn:schemas-microsoft-com:office:excel"
xmlns="http://www.w3.org/TR/REC-html40">

<head>
<meta name="Excel Workbook Frameset">
<meta http-equiv=Content-Type content="text/html; charset=UTF-8">
<meta name=ProgId content=Excel.Sheet>
<meta name=Generator content="Microsoft Excel 15">
<link rel=File-List href="전자결제_문서_files/filelist.xml">
<![if !supportTabStrip]>
<!-- <link id="shLink" href="전자결제_문서_files/sheet001.html">
<link id="shLink" href="전자결제_문서_files/sheet002.html"> -->

<style>
table
	{mso-displayed-decimal-separator:"\.";
	mso-displayed-thousand-separator:"\,";}
@page
	{margin:.75in .7in .75in .7in;
	mso-header-margin:.3in;
	mso-footer-margin:.3in;}
ruby
	{ruby-align:left;}
rt
	{color:windowtext;
	font-size:8.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"맑은 고딕", monospace;
	mso-font-charset:129;
	mso-char-type:none;
	display:none;}
tr
	{mso-height-source:auto;
	mso-ruby-visibility:none;}
col
	{mso-width-source:auto;
	mso-ruby-visibility:none;}
br
	{mso-data-placement:same-cell;}
ruby
	{ruby-align:left;}
.style16
	{color:#0563C1;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:underline;
	text-underline-style:single;
	font-family:"맑은 고딕", monospace;
	mso-font-charset:129;
	mso-style-name:Hyperlink;
	mso-style-id:8;}
a:link
	{color:#0563C1;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:underline;
	text-underline-style:single;
	font-family:"맑은 고딕", monospace;
	mso-font-charset:129;}
a:visited
	{color:#954F72;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:underline;
	text-underline-style:single;
	font-family:"맑은 고딕", monospace;
	mso-font-charset:129;}
.style0
	{mso-number-format:General;
	text-align:general;
	vertical-align:middle;
	white-space:nowrap;
	mso-rotate:0;
	mso-background-source:auto;
	mso-pattern:auto;
	color:black;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"맑은 고딕", monospace;
	mso-font-charset:129;
	border:none;
	mso-protection:locked visible;
	mso-style-name:Normal;
	mso-style-id:0;}
.font10
	{color:black;
	font-size:10.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"맑은 고딕", monospace;
	mso-font-charset:129;}
.font11
	{color:#595959;
	font-size:10.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"맑은 고딕", monospace;
	mso-font-charset:129;}
.font12
	{color:black;
	font-size:10.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"맑은 고딕", monospace;
	mso-font-charset:129;}
.font13
	{color:#595959;
	font-size:8.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"맑은 고딕", monospace;
	mso-font-charset:129;}
.font14
	{color:#595959;
	font-size:10.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"맑은 고딕", monospace;
	mso-font-charset:129;}
td
	{mso-style-parent:style0;
	padding-top:1px;
	padding-right:1px;
	padding-left:1px;
	mso-ignore:padding;
	color:black;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"맑은 고딕", monospace;
	mso-font-charset:129;
	mso-number-format:General;
	text-align:general;
	vertical-align:middle;
	border:none;
	mso-background-source:auto;
	mso-pattern:auto;
	mso-protection:locked visible;
	white-space:nowrap;
	mso-rotate:0;}
.xl65
	{mso-style-parent:style16;
	color:#0563C1;
	text-decoration:underline;
	text-underline-style:single;}
.xl66
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;}
.xl67
	{mso-style-parent:style0;
	font-size:10.0pt;}
.xl68
	{mso-style-parent:style0;
	color:#595959;
	font-size:10.0pt;
	font-weight:700;}
.xl69
	{mso-style-parent:style0;
	font-size:10.0pt;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:none;
	border-left:1.0pt solid windowtext;}
.xl70
	{mso-style-parent:style0;
	font-size:10.0pt;
	border:1.0pt solid windowtext;}
.xl71
	{mso-style-parent:style0;
	font-size:10.0pt;
	border-top:none;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;}
.xl72
	{mso-style-parent:style0;
	font-size:10.0pt;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;}
.xl73
	{mso-style-parent:style0;
	font-size:10.0pt;
	border-top:none;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl74
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border:1.0pt solid windowtext;}
.xl75
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border:1.0pt solid windowtext;
	padding-left:36px;
	mso-char-indent-count:2;}
.xl76
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl77
	{mso-style-parent:style0;
	font-size:10.0pt;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl78
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:right;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;}
.xl79
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:right;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;
	white-space:normal;}
.xl80
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:right;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;
	white-space:normal;}
.xl81
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl82
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:none;
	border-left:1.0pt solid windowtext;
	white-space:normal;}
.xl83
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:none;
	border-left:none;
	white-space:normal;}
.xl84
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:none;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;
	white-space:normal;}
.xl85
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:none;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;
	white-space:normal;}
.xl86
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:none;
	border-left:1.0pt solid windowtext;}
.xl87
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:none;
	border-left:none;}
.xl88
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:none;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;}
.xl89
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:none;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl90
	{mso-style-parent:style0;
	font-size:10.0pt;
	mso-number-format:"\#\,\#\#0";
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;}
.xl91
	{mso-style-parent:style0;
	font-size:10.0pt;
	mso-number-format:"\#\,\#\#0";
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl92
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;
	white-space:normal;}
.xl93
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;
	white-space:normal;}
.xl94
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:none;
	border-left:1.0pt solid windowtext;
	white-space:normal;}
.xl95
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:none;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;}
.xl96
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:right;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl97
	{mso-style-parent:style0;
	font-size:10.0pt;
	mso-number-format:"\#\,\#\#0";
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl98
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:none;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;}
.xl99
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:none;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl100
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:none;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl101
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:none;
	border-left:1.0pt solid windowtext;}
.xl102
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:none;
	border-right:1.0pt solid windowtext;
	border-bottom:none;
	border-left:1.0pt solid windowtext;}
.xl103
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:none;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;}
.xl104
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:none;
	border-left:none;}
.xl105
	{mso-style-parent:style0;
	font-size:10.0pt;
	mso-number-format:"\#\,\#\#0";
	text-align:center;
	border-top:none;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;}
.xl106
	{mso-style-parent:style0;
	font-size:10.0pt;
	mso-number-format:"\#\,\#\#0";
	text-align:center;
	border-top:none;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl107
	{mso-style-parent:style0;
	font-size:10.0pt;
	mso-number-format:"\#\,\#\#0";
	text-align:center;
	border-top:none;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl108
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:none;
	border-left:none;
	white-space:normal;}
.xl109
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:none;
	border-left:1.0pt solid windowtext;
	white-space:normal;}
.xl110
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;
	border-top:none;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl111
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:none;
	border-left:1.0pt solid windowtext;}
.xl112
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:none;
	border-right:1.0pt solid windowtext;
	border-bottom:none;
	border-left:1.0pt solid windowtext;}
.xl113
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;}
.xl114
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl115
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl116
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:none;
	border-left:1.0pt solid windowtext;}
.xl117
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:none;
	border-left:none;}
.xl118
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:none;
	border-right:1.0pt solid windowtext;
	border-bottom:none;
	border-left:none;}
.xl119
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:center;}
.xl120
	{mso-style-parent:style0;
	font-size:18.0pt;
	font-weight:700;
	text-align:center;}
.xl121
	{mso-style-parent:style0;
	font-size:10.0pt;
	mso-number-format:"Short Date";
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;}
.xl122
	{mso-style-parent:style0;
	font-size:10.0pt;
	mso-number-format:"Short Date";
	text-align:center;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;}
.xl123
	{mso-style-parent:style0;
	color:red;
	font-weight:700;
	text-align:left;
	border-top:none;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:none;
	padding-left:108px;
	mso-char-indent-count:6;}
.xl124
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:none;
	border-left:1.0pt solid windowtext;
	white-space:normal;}
.xl125
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:none;
	border-left:none;
	white-space:normal;}
.xl126
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:none;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;
	white-space:normal;}
.xl127
	{mso-style-parent:style0;
	font-size:10.0pt;
	text-align:left;
	border-top:none;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;
	white-space:normal;}

</style>
<script language="JavaScript">
<!--

 
function go1Page(){
	document.getElementById("sheet001").style.display = "block";
	document.getElementById("sheet002").style.display = "none";
}


function go2Page(){
	document.getElementById("sheet001").style.display = "none";
	document.getElementById("sheet002").style.display = "block";
}

//-->
</script>

</head>
<body link="#0563C1" vlink="#954F72">
<div id="sheet001"  style="display:block;">
<table border=0 cellpadding=0 cellspacing=0 width=983 style='border-collapse:
 collapse;table-layout:fixed;width:736pt'>
 <col width=70 style='width:53pt'>
 <col width=116 style='mso-width-source:userset;mso-width-alt:3712;width:87pt'>
 <col width=56 style='mso-width-source:userset;mso-width-alt:1792;width:42pt'>
 <col width=120 style='mso-width-source:userset;mso-width-alt:3840;width:90pt'>
 <col width=87 span=2 style='mso-width-source:userset;mso-width-alt:2790;
 width:65pt'>
 <col width=82 span=2 style='mso-width-source:userset;mso-width-alt:2611;
 width:61pt'>
 <col width=130 style='mso-width-source:userset;mso-width-alt:4147;width:97pt'>
 <col width=153 style='mso-width-source:userset;mso-width-alt:4889;width:115pt'>
 <tr height=23 style='height:17.4pt'>
  <td height=23 width=70 style='height:17.4pt;width:53pt'><a name="RANGE!A1"></a></td>
  <td class=xl65 width=116 style='width:87pt'><a href="javascript:go1Page();">1Page</a></td>
  <td class=xl65 width=56 style='width:42pt'><a href="javascript:go2Page();">2Page</a></td>
  <td width=120 style='width:90pt'></td>
  <td class=xl65 width=87 style='width:65pt'></td>
  <td class=xl65 width=87 style='width:65pt'></td>
  <td width=82 style='width:61pt'></td>
  <td width=82 style='width:61pt'></td>
  <td width=130 style='width:97pt'></td>
  <td width=153 style='width:115pt'></td>
 </tr>
 <tr height=23 style='height:17.4pt'>
  <td height=23 colspan=10 style='height:17.4pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=37 style='height:27.6pt'>
  <td height=37 style='height:27.6pt'></td>
  <td colspan=9 class=xl120>집합건물 감정서 (집합_아파트) (맥주)</td>
 </tr>
 <tr height=23 style='height:17.4pt'>
  <td height=23 colspan=10 style='height:17.4pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 colspan=8 style='height:18.0pt;mso-ignore:colspan'></td>
  <td colspan=2 class=xl123>&lt;&lt;관재미검증&gt;&gt;</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td class=xl66>감정일</td>
  <td class=xl66>　</td>
  <td colspan=2 class=xl121 style='border-right:1.0pt solid black'>2022-06-30</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>감정자</td>
  <td colspan=3 class=xl113 style='border-right:1.0pt solid black;border-left:
  none'>H17 한행석</td>
 </tr>
 <tr height=23 style='height:17.4pt'>
  <td height=23 style='height:17.4pt'></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td class=xl68 colspan=2 style='mso-ignore:colspan'><span
  style='mso-spacerun:yes'>&nbsp;</span>Ⅰ. 거래처 등의 표시</td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td class=xl69>1. 제1차 거래처</td>
  <td class=xl69>　</td>
  <td colspan=3 class=xl113 style='border-right:1.0pt solid black'>백마상사</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>대표자</td>
  <td colspan=2 class=xl116 style='border-right:1.0pt solid black;border-left:
  none'>구상복</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td class=xl70>2. 업소명</td>
  <td class=xl71 style='border-left:none'>　</td>
  <td colspan=3 class=xl98 style='border-right:1.0pt solid black'>자체</td>
  <td colspan=2 class=xl119>대표자</td>
  <td colspan=2 class=xl113 style='border-right:1.0pt solid black'>구상복</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td class=xl70 style='border-top:none'>3. 채무자</td>
  <td class=xl72 style='border-top:none;border-left:none'>　</td>
  <td colspan=2 class=xl113 style='border-right:1.0pt solid black'>백마상사</td>
  <td colspan=3 class=xl113 style='border-right:1.0pt solid black;border-left:
  none'>5. 채무자와 담보제공자의 관계</td>
  <td colspan=2 class=xl113 style='border-right:1.0pt solid black;border-left:
  none'>백마상사 이사 및 처</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td class=xl71>4. 담보제공자</td>
  <td class=xl71>　</td>
  <td class=xl71>김기정, 제혜정</td>
  <td class=xl73>　</td>
  <td colspan=3 class=xl113 style='border-right:1.0pt solid black;border-left:
  none'>6. 이 담보물에 대한 재감정 여부</td>
  <td colspan=2 class=xl113 style='border-right:1.0pt solid black;border-left:
  none'>최초감정</td>
 </tr>
 <tr height=23 style='height:17.4pt'>
  <td height=23 style='height:17.4pt'></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td class=xl68 colspan=2 style='mso-ignore:colspan'><span
  style='mso-spacerun:yes'>&nbsp;</span>Ⅱ. 부동산의 표시</td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=9 class=xl113 style='border-right:1.0pt solid black'>1. 감정 대상
  부동산의 표시</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=2 class=xl113 style='border-right:1.0pt solid black'>가. 소재지</td>
  <td colspan=3 class=xl98 style='border-right:1.0pt solid black;border-left:
  none'>부산광역시 해운대구 중동 1839</td>
  <td colspan=4 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>　</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td rowspan=6 class=xl111 style='border-bottom:1.0pt solid black;border-top:
  none'>나. 구분</td>
  <td rowspan=2 class=xl101 style='border-bottom:1.0pt solid black;border-top:
  none'>토지</td>
  <td colspan=3 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>대지권의 목적인 토지의 지번,지목</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>보유한 대지권의 종류</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>대지권의 목적인 토지중 대지권의 면적</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=2 class=xl90 style='border-right:1.0pt solid black;border-left:
  none'>181,818,171,819</td>
  <td class=xl66 style='border-top:none;border-left:none'>대지</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black'>대지권 소유권</td>
  <td class=xl74 style='border-top:none;border-left:none'><span
  style='mso-spacerun:yes'>&nbsp; </span>75.60 m<font class="font12"><sup>2</sup></font></td>
  <td class=xl74 style='border-top:none;border-left:none'>22.87평</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td rowspan=4 class=xl109 width=56 style='border-bottom:1.0pt solid black;
  border-top:none;width:42pt'>집합<br>
    건물</td>
  <td colspan=4 class=xl81>전유부분이 있는 단지의명칭, 1동및 전유부분의 호수</td>
  <td class=xl74 style='border-top:none'>전유면적</td>
  <td class=xl74 style='border-top:none;border-left:none'>129.15 m<font
  class="font12"><sup>2</sup></font></td>
  <td class=xl74 style='border-top:none;border-left:none'>39.06평</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=4 rowspan=2 class=xl104 style='border-right:1.0pt solid black;
  border-bottom:1.0pt solid black'>해운대힐스테이트위브 제티-101동 507호</td>
  <td class=xl74 style='border-top:none;border-left:none'>공유면적</td>
  <td class=xl75 style='border-top:none;border-left:none'><span
  style='mso-spacerun:yes'>&nbsp;</span>41.08 m<font class="font12"><sup>2</sup></font></td>
  <td class=xl74 style='border-top:none;border-left:none'>12.42평</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td class=xl74 style='border-top:none;border-left:none'>면적합계</td>
  <td class=xl74 style='border-top:none;border-left:none'>170.23 m<font
  class="font12"><sup>2</sup></font></td>
  <td class=xl76 style='border-top:none'>51.48 평형</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=7 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>감정대상 물건은 2015년도에 사용승인되어 7년 경과되었으며, 지하 4층, 지상 39층중의 5증에 전유부분이 위치함.</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=9 class=xl113 style='border-right:1.0pt solid black'>2. 감정 대상
  부동산에 다한 공적규제의 표시</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td rowspan=3 class=xl101 style='border-bottom:1.0pt solid black;border-top:
  none'>지정여부</td>
  <td colspan=4 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>&quot;국토의 계획및이용에관한법률&quot;에 따른 지역.지구등</td>
  <td colspan=4 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>제3종일반주거지역</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=4 class=xl86 style='border-right:1.0pt solid black;border-left:
  none'>다른 법률등에 다른 지역. 지구등</td>
  <td colspan=4 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>가축사육제한 구역&lt;가축분뇨의 관리 및 이용에 관한 법률, 가로구역발</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=4 class=xl105 style='border-right:1.0pt solid black;border-left:
  none'>시행령 부칙 제3조에 따른 추가기재확인 내용</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>대지권 소유권</td>
  <td class=xl74 style='border-top:none;border-left:none'><span
  style='mso-spacerun:yes'>&nbsp; </span>75.60 m<font class="font12"><sup>2</sup></font></td>
  <td class=xl74 style='border-top:none;border-left:none'>22.87평</td>
 </tr>
 <tr height=24 style='mso-height-source:userset;height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=5 class=xl82 width=466 style='width:349pt'>&quot;토지이용규제
  기본법시행령&quot; 제9ㅈ2항각호에 해당되는사항</td>
  <td class=xl77 style='border-top:none'>　</td>
  <td class=xl74 style='border-top:none'>전유면적</td>
  <td class=xl74 style='border-top:none;border-left:none'>129.15 m<font
  class="font12"><sup>2</sup></font></td>
  <td class=xl74 style='border-top:none;border-left:none'>39.06평</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=9 class=xl98 style='border-right:1.0pt solid black'>3. 가임대 보증금
  적용지역 <font class="font13">33.2021.05.11부터 적용되는 광역시(수도권정비계획법에 따른 과밀억제권역에 포함된
  지역과 군자역 제외). 안산시.광주시.</font></td>
 </tr>
 <tr height=23 style='height:17.4pt'>
  <td height=23 colspan=10 style='height:17.4pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td class=xl68 colspan=2 style='mso-ignore:colspan'><span
  style='mso-spacerun:yes'>&nbsp;</span><font class="font14">Ⅲ</font><font
  class="font11">. 감정가역에 대한 표시</font></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=2 class=xl66>가격구분</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black'>가격총액</td>
  <td colspan=3 class=xl81>m<font class="font12"><sup>2</sup></font><font
  class="font10"> 당 가격</font></td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black'>평당 가격</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td rowspan=2 class=xl94 width=116 style='border-bottom:1.0pt solid black;
  border-top:none;width:87pt'>1. 시<span
  style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>가<br>
    <span style='mso-spacerun:yes'>&nbsp;&nbsp; </span>(비준가격)</td>
  <td class=xl74 style='border-top:none;border-left:none'>최저</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'><span style='mso-spacerun:yes'>&nbsp; </span>872,000,000 원</td>
  <td colspan=3 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>5,122,481 원/m<font class="font12"><sup>2</sup></font><font
  class="font10"><span style='mso-spacerun:yes'>&nbsp;</span></font></td>
  <td colspan=2 class=xl81 style='border-right:1.0pt solid black'>16,938,617
  원/평<span style='mso-spacerun:yes'>&nbsp;</span></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td class=xl74 style='border-top:none;border-left:none'>최고</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>1,500,000,000 원</td>
  <td colspan=3 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>8,811,608 원/m<font class="font12"><sup>2</sup></font><font
  class="font10"><span style='mso-spacerun:yes'>&nbsp;</span></font></td>
  <td colspan=2 class=xl81 style='border-right:1.0pt solid black'>29,137,529
  원/평<span style='mso-spacerun:yes'>&nbsp;</span></td>
 </tr>
 <tr height=37 style='mso-height-source:userset;height:27.6pt'>
  <td height=37 style='height:27.6pt'></td>
  <td colspan=2 class=xl92 width=172 style='border-right:1.0pt solid black;
  width:129pt'>2. 실거래가격<br>
    <span style='mso-spacerun:yes'>&nbsp;&nbsp; </span>(등기부상 실거래가)</td>
  <td colspan=2 class=xl90 style='border-right:1.0pt solid black;border-left:
  none'>　</td>
  <td colspan=3 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>　</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>　</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=2 class=xl92 width=172 style='border-right:1.0pt solid black;
  width:129pt'>3. 공동주택가격</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'><span style='mso-spacerun:yes'>&nbsp; </span>601,000,000 원</td>
  <td colspan=3 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>3,531,000 원/m<font class="font12"><sup>2</sup></font><font
  class="font10"><span style='mso-spacerun:yes'>&nbsp;</span></font></td>
  <td colspan=2 class=xl81 style='border-right:1.0pt solid black'>11,674,000
  원/평<span style='mso-spacerun:yes'>&nbsp;</span></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=2 class=xl92 width=172 style='border-right:1.0pt solid black;
  width:129pt'>4. 평가가격</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>1,300,000,000 원</td>
  <td colspan=3 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>7,636,727 원/m<font class="font12"><sup>2</sup></font><font
  class="font10"><span style='mso-spacerun:yes'>&nbsp;</span></font></td>
  <td colspan=2 class=xl81 style='border-right:1.0pt solid black'>25,252,525
  원/평<span style='mso-spacerun:yes'>&nbsp;</span></td>
 </tr>
 <tr height=23 style='height:17.4pt'>
  <td height=23 colspan=10 style='height:17.4pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td class=xl68><span style='mso-spacerun:yes'>&nbsp;</span><font
  class="font14">Ⅳ</font><font class="font11">. 담보제공비율</font></td>
  <td class=xl68></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
 </tr>
 <tr height=24 style='mso-height-source:userset;height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=2 rowspan=2 class=xl82 width=172 style='border-right:1.0pt solid black;
  border-bottom:1.0pt solid black;width:129pt'>등기부상 전용면적</td>
  <td colspan=3 class=xl90 style='border-left:none'>담보제공비율</td>
  <td colspan=2 rowspan=2 class=xl86 style='border-right:1.0pt solid black;
  border-bottom:1.0pt solid black'>담보제공면적</td>
  <td colspan=2 rowspan=2 class=xl86 style='border-right:1.0pt solid black;
  border-bottom:1.0pt solid black'>사유</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td class=xl72 style='border-top:none;border-left:none'>분자</td>
  <td class=xl70 style='border-top:none'>분모</td>
  <td class=xl72 style='border-top:none;border-left:none'>비율</td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=2 class=xl79 width=172 style='border-right:1.0pt solid black;
  width:129pt'>129.15</td>
  <td class=xl72 align=right style='border-top:none;border-left:none'>129.15</td>
  <td class=xl70 align=right style='border-top:none'>129.15</td>
  <td class=xl78 style='border-top:none;border-left:none'>100.00</td>
  <td colspan=2 class=xl78 style='border-right:1.0pt solid black'>129.15</td>
  <td colspan=2 class=xl81 style='border-right:1.0pt solid black'>　</td>
 </tr>
 <![if supportMisalignedColumns]>
 <tr height=0 style='display:none'>
  <td width=70 style='width:53pt'></td>
  <td width=116 style='width:87pt'></td>
  <td width=56 style='width:42pt'></td>
  <td width=120 style='width:90pt'></td>
  <td width=87 style='width:65pt'></td>
  <td width=87 style='width:65pt'></td>
  <td width=82 style='width:61pt'></td>
  <td width=82 style='width:61pt'></td>
  <td width=130 style='width:97pt'></td>
  <td width=153 style='width:115pt'></td>
 </tr>
 <![endif]>
</table>
</div>



<div id="sheet002"  style="display:none;">
<table border=0 cellpadding=0 cellspacing=0 width=983 style='border-collapse:
 collapse;table-layout:fixed;width:736pt'>
 <col width=70 style='width:53pt'>
 <col width=116 style='mso-width-source:userset;mso-width-alt:3712;width:87pt'>
 <col width=56 style='mso-width-source:userset;mso-width-alt:1792;width:42pt'>
 <col width=120 style='mso-width-source:userset;mso-width-alt:3840;width:90pt'>
 <col width=87 span=2 style='mso-width-source:userset;mso-width-alt:2790;
 width:65pt'>
 <col width=82 span=2 style='mso-width-source:userset;mso-width-alt:2611;
 width:61pt'>
 <col width=130 style='mso-width-source:userset;mso-width-alt:4147;width:97pt'>
 <col width=153 style='mso-width-source:userset;mso-width-alt:4889;width:115pt'>
 <tr height=23 style='height:17.4pt'>
  <td height=23 width=70 style='height:17.4pt;width:53pt'><a name="RANGE!A1"></a></td>
  <td class=xl65 width=116 style='width:87pt'><a href="javascript:go1Page();">1Page</a></td>
  <td class=xl65 width=56 style='width:42pt'><a href="javascript:go2Page();">2Page</a></td>
  <td width=120 style='width:90pt'></td>
  <td class=xl65 width=87 style='width:65pt'></td>
  <td class=xl65 width=87 style='width:65pt'></td>
  <td width=82 style='width:61pt'></td>
  <td width=82 style='width:61pt'></td>
  <td width=130 style='width:97pt'></td>
  <td width=153 style='width:115pt'></td>
 </tr>
 <tr height=23 style='height:17.4pt'>
  <td height=23 colspan=10 style='height:17.4pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=37 style='height:27.6pt'>
  <td height=37 style='height:27.6pt'></td>
  <td colspan=9 class=xl120>집합건물 감정서 (집합_아파트) (맥주)</td>
 </tr>
 <tr height=23 style='height:17.4pt'>
  <td height=23 colspan=10 style='height:17.4pt;mso-ignore:colspan'></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 colspan=8 style='height:18.0pt;mso-ignore:colspan'></td>
  <td colspan=2 class=xl123>&lt;&lt;관재미검증&gt;&gt;</td>
 </tr>
 <tr height=23 style='height:17.4pt'>
  <td height=23 style='height:17.4pt'></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td class=xl68 colspan=3 style='mso-ignore:colspan'><span
  style='mso-spacerun:yes'>&nbsp;</span>Ⅴ. 예상1차 최저입착가 및 낙찰가 등의 추정</td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
  <td class=xl67></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=2 class=xl66>가격구분</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black'>가격총액</td>
  <td colspan=3 class=xl81>평방미터당 가격</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black'>평당 가격</td>
 </tr>
 <tr height=24 style='mso-height-source:userset;height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=2 rowspan=2 class=xl124 width=172 style='border-right:1.0pt solid black;
  border-bottom:1.0pt solid black;width:129pt'>1. 제1차 예상 최저입찰가<br>
    <span style='mso-spacerun:yes'>&nbsp;&nbsp; </span>(최종 평가가격)</td>
  <td colspan=2 rowspan=2 class=xl86 style='border-right:1.0pt solid black;
  border-bottom:1.0pt solid black'><span style='mso-spacerun:yes'>&nbsp;
  </span>1,300,000,000 원</td>
  <td colspan=3 rowspan=2 class=xl86 style='border-right:1.0pt solid black;
  border-bottom:1.0pt solid black'>7,636,727 원/m2<span
  style='mso-spacerun:yes'>&nbsp;</span></td>
  <td colspan=2 rowspan=2 class=xl86 style='border-right:1.0pt solid black;
  border-bottom:1.0pt solid black'>25,252,525 원/평<span
  style='mso-spacerun:yes'>&nbsp;</span></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
 </tr>
 <tr height=24 style='height:18.0pt'>
  <td height=24 style='height:18.0pt'></td>
  <td colspan=2 class=xl92 width=172 style='border-right:1.0pt solid black;
  width:129pt'>2. 예상낙찰가</td>
  <td colspan=2 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'><span style='mso-spacerun:yes'>&nbsp;</span>1,092,910,000 원</td>
  <td colspan=3 class=xl66 style='border-right:1.0pt solid black;border-left:
  none'>6,420,196 원/m<font class="font12"><sup>2</sup></font><font
  class="font10"><span style='mso-spacerun:yes'>&nbsp;</span></font></td>
  <td colspan=2 class=xl81 style='border-right:1.0pt solid black'>21,229,798
  원/평<span style='mso-spacerun:yes'>&nbsp;</span></td>
 </tr>
 <![if supportMisalignedColumns]>
 <tr height=0 style='display:none'>
  <td width=70 style='width:53pt'></td>
  <td width=116 style='width:87pt'></td>
  <td width=56 style='width:42pt'></td>
  <td width=120 style='width:90pt'></td>
  <td width=87 style='width:65pt'></td>
  <td width=87 style='width:65pt'></td>
  <td width=82 style='width:61pt'></td>
  <td width=82 style='width:61pt'></td>
  <td width=130 style='width:97pt'></td>
  <td width=153 style='width:115pt'></td>
 </tr>
 <![endif]>
</table>


</div>

</body>
</html>

