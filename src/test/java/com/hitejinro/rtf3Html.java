//package com.hitejinro;
//
//import oracle.jdbc.OracleResultSet;
//import oracle.sql.CLOB;
//
//import javax.swing.*;
//import javax.swing.text.BadLocationException;
//import javax.swing.text.EditorKit;
//import java.io.*;
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.ResultSet;
//import java.sql.Statement;
//
//public class rtf3Html {
//	static final String DB_URL = "jdbc:oracle:thin:@//192.168.101.141:1521/DEVDW";
//	static final String USER = "xxesprd";
//	static final String PASS = "es#22prd";
//
//	static final String QUERY = " SELECT                      " +
//								"     APPRSL_YEAR,            " +
//								"     APPRSL_SN,              " +
//								"     HQ_BHF_SE_CD,           " +
//								"     REPRT_SE,                " +
//								"     STATEMATTER          " +
//								" FROM                        " +
//								"     RVS_CMMNREPRT_STATEMATTER    ";
//
//	static final String QUERY2_1 = " SELECT  STATEMATTER  " +
//								"  FROM   RVS_CMMNREPRT_STATEMATTER    " +
//								"  WHERE   " +
//								"     APPRSL_YEAR = '";
//
//	static final String QUERY2_2 = "'     AND APPRSL_SN = '";
//
//	static final String QUERY2_3 = "'     AND HQ_BHF_SE_CD = '";
//
//	static final String QUERY2_4 = "'     AND REPRT_SE = '";
//
//	static final String QUERY2_5 = "' FOR UPDATE ";
//
//
//	static final String UPDATE_QUERY_01 =  " UPDATE RVS_CMMNREPRT_STATEMATTER    " +
//											" SET                            " +
//											"     STATEMATTER = empty_clob() ";
//
//	static final String UPDATE_QUERY_02 =  " WHERE                          " +
//											"         APPRSL_YEAR = '";
//
//	static final String UPDATE_QUERY_03 =  "'     AND APPRSL_SN = '";
//
//	static final String UPDATE_QUERY_04 =  "'     AND HQ_BHF_SE_CD = '";
//
//	static final String UPDATE_QUERY_05 =  "'     AND REPRT_SE = '";
//
//	public static void main(String[] args)  {
//		String apprslYear, apprslSn, hqBhfSeCd, rtfText, reprtSe = "";
//
//		try {
//			Class.forName("oracle.jdbc.OracleDriver");
//			Connection con = DriverManager.getConnection(DB_URL, USER, PASS);
//
//
//			Statement stmt = con.createStatement();
//			Statement stmt2 = con.createStatement();
//			Statement stmt3 = con.createStatement();
//			ResultSet rs = stmt.executeQuery(QUERY);
//
//
//			System.out.println("조회쿼리=>" + QUERY);
//
//			while(rs.next()) {
//				apprslYear = rs.getString("APPRSL_YEAR");
//				apprslSn = rs.getString("APPRSL_SN");
//				hqBhfSeCd = rs.getString("HQ_BHF_SE_CD");
//				reprtSe = rs.getString("REPRT_SE");
//				rtfText = rs.getString("STATEMATTER");
//
//				if(rtfText!= null && rtfText.indexOf("rtf1") >= 0) {
//					System.out.println(rtfText);
//					rtfText = convertToHtml(rtfText);
//
////					Encoder encode = Base64.getEncoder();
////					rtfText = new String(encode.encode(rtfText.getBytes()));
//
//					// DB에 넣어준다.
//					String updateSql
//					= UPDATE_QUERY_01 + UPDATE_QUERY_02 + apprslYear + UPDATE_QUERY_03 + apprslSn + UPDATE_QUERY_04 + hqBhfSeCd + UPDATE_QUERY_05 + reprtSe + "'";
//					System.out.println(updateSql);
//					int rCnt = stmt2.executeUpdate(updateSql);
//
//					con.setAutoCommit(false);
//					ResultSet rs2 = stmt3.executeQuery(QUERY2_1 + apprslYear + QUERY2_2 + apprslSn + QUERY2_3 + hqBhfSeCd + QUERY2_4 + reprtSe + QUERY2_5);
//					if (rs2.next()) {
//						CLOB cl = ((OracleResultSet)rs2).getCLOB("STATEMATTER");
//
//						 // 스트림을 이용한 값 저장
//						 BufferedWriter writer = new BufferedWriter(cl.getCharacterOutputStream());
//						 writer.write(rtfText.toString());
//						 writer.close();
//					}
//					con.commit();
//					con.setAutoCommit(true);
//					System.out.println("HTML 전환(" + rCnt + ") 성공!");
//				}
//
//			}
//
//		} catch(Exception e) {
//			System.out.println(e.getMessage());
//		}
//		// TODO Auto-generated method stub
//
//
//
//	}
//
//	public static String convertToHtml(String rtfText) throws Exception {
//
//		String htmlText = rtfToHtml(new StringReader(rtfText));
//		String outputStr = new String(htmlText.getBytes("8859_1"), "KSC5601");
////		String outputStr = new String(htmlText.getBytes("8859_1"), "UTF-8");
//	//		HTML <pre></pre> 태그 추가 jsoup 라이브러리가 필요
//	//		outputStr = outputStr.replaceAll(regex, replacement)
//		Document doc = Jsoup.parse(outputStr);
//
//		Elements spanContents = doc.getElementsByTag("span");
//		Element styleTag = doc.getElementsByTag("style").get(0);
//		styleTag.html(new StringBuffer("<!--").append("\r\n").append(".default{ ").append("\r\n")
//				.append("\t margin-top:0px;").append("\r\n")
//				.append("\t margin-bottom:0px;").append("\r\n")
//				.append("}").append("\r\n").append(" -->").append("\r\n").toString());
//
//		for(Element spanEle : spanContents) {
//			//wholeText 로  공백 포함된 문자를 가져와서 text() 나 html로 시작하는 값 앞까지만 &nbsp; 로 변환
//			String spanWholeText = spanEle.wholeText();
//			String spanText = spanEle.text().length() >= 3 ? spanEle.text().substring(0, 3) : spanEle.text();
//	//			System.out.println("spanText==>" + spanText + "|");
//	//			System.out.println("spanText.length()==>" + spanText.length() + "|");
//	//			System.out.println("spanWholeText==>" + spanWholeText + "|");
//			int idx = spanWholeText.indexOf(spanText, 0) == -1 ? 0 : spanWholeText.indexOf(spanText, 0);
//			spanWholeText = idx == 0 ? spanWholeText : spanWholeText.substring(0, idx);
//	//			spanWholeText = spanWholeText.replaceAll("\r\n", "<br>");
//	//			System.out.println("spanWholeText.indexOf('\\n')==>" + spanWholeText.indexOf("\n") + "|");
//			int sIdx = (spanWholeText.length() < 2 || spanWholeText.indexOf("\n", 2) == -1) ? spanWholeText.length() : spanWholeText.indexOf("\n", 2);
//			spanWholeText = spanWholeText.substring(0, sIdx);
//			String spanHtml = spanEle.html();
//	//			System.out.println("spanHtml.indexOf(\"<u>\")==>" + spanHtml.indexOf("<u>") + "|");
//			if(spanHtml.indexOf("<u>") > -1) {
//				spanEle.html(spanHtml.substring(spanHtml.indexOf("<u>")));
//			} else {
//				spanWholeText = spanWholeText.replaceAll(" ", "&nbsp;");
//				spanEle.html(new StringBuffer(spanWholeText).append(spanEle.html()).toString());
//			}
//	//			System.out.println(spanEle.html());
//		}
//
////		System.out.println(doc.toString());
//		return doc.toString();
//	}
//
//	/**
//	 * 워드패드 데이터를 Swing API 를 사용하여 HTML 로 변환한다.
//	 * @param rtf
//	 * @return
//	 * @throws IOException
//	 */
//	public static String rtfToHtml(Reader rtf) throws IOException {
//	    JEditorPane p = new JEditorPane();
//	    p.setContentType("text/rtf");
//	    EditorKit kitRtf = p.getEditorKitForContentType("text/rtf");
//	    try {
//	        kitRtf.read(rtf, p.getDocument(), 0);
//	        kitRtf = null;
//	        EditorKit kitHtml = p.getEditorKitForContentType("text/html");
//	        Writer writer = new StringWriter();
//	        kitHtml.write(writer, p.getDocument(), 0, p.getDocument().getLength());
//	        return writer.toString();
//	    } catch (BadLocationException e) {
//	        e.printStackTrace();
//	    }
//	    return null;
//	}
//
//}
