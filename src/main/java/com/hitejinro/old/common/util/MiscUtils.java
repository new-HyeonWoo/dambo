//package com.hitejinro.old.common.util;
//
//import com.google.gson.Gson;
//import org.json.JSONArray;
//import org.json.JSONObject;
//import org.json.simple.parser.JSONParser;
//
//import java.io.File;
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//
//public class MiscUtils {
//  public static String getCurrentDatetime() {
//    java.util.Date dt = new java.util.Date();
//    java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//    //  return sdf.format(dt).split(" ")[0];
//    return sdf.format(dt);
//  }
//
//  public static String getCurrentDate() {
//    java.util.Date dt = new java.util.Date();
//    java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//    return sdf.format(dt).split(" ")[0];
//    //  return sdf.format(dt);
//  }
//
//  public static java.sql.Date getCurrentSqlDatetime() {
//    return new java.sql.Date(new java.util.Date().getTime());
//  }
//
//  public static java.sql.Timestamp getCurrentSqlTimestamp() {
//    return new java.sql.Timestamp(System.currentTimeMillis());
//  }
//
//  // list: List<DTO>, return: JSONArray(list)
//  public static JSONArray ListToJSONArray(Object list) {
//    String json_list = new Gson().toJson(list);
//    JSONArray json_array = new JSONArray(json_list);
//    System.out.println(json_array);
//    return new JSONArray(json_array);
//  }
//
//  // obj: DTO, return: JSONObject(DTO)
//  public static JSONObject ObjectToJSONObject(Object obj) {
//    String json_obj = new Gson().toJson(obj);
//    return new JSONObject(json_obj);
//  }
//
//  // input: stringified json array return: JSONArray
//  public static JSONArray JSONArrayfromStringifiedJsonArray(String sjarray) throws Exception {
//    return (JSONArray) new JSONParser().parse(sjarray);
//  }
//
//  public static void copyFile(String srcPath, String destPath) throws IOException {
//    Path srcFile = Paths.get(srcPath);
//    Path destFile = Paths.get(destPath);
//
//    copyFileNIO(srcFile, destFile);
//  }
//
//  public static void copyFileNIO(Path src, Path dest) throws IOException {
//    Files.copy(src, dest);
//  }
//
//  // File copy function
//  public static void copyFileUsingJava7Files(File source, File dest) throws IOException {
//    Files.copy(source.toPath(), dest.toPath());
//  }
//
//  public static String readFirstStringFromText(String filepath) throws IOException {
//    Path path = Paths.get(filepath);
//
//    return Files.readAllLines(path).get(0);
//  }
//}
