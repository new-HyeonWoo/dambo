package com.hitejinro.old.menu.model;


public class MenuBaseEntity{
	private String grp_id ="";
	private String grp_name ="";
	private String menu_id ="";
	private String menu_name ="";
	private String src_path ="";
	private String use_yn ="";
	private String src_type ="";
	private String src_value ="";

	private String user_r ="";
	private String user_id ="";
	
	public String getGrp_id() {
		return grp_id;
	}
	public void setGrp_id(String grp_id) {
		this.grp_id = grp_id;
	}
	public String getGrp_name() {
		return grp_name;
	}
	public void setGrp_name(String grp_name) {
		this.grp_name = grp_name;
	}
	public String getMenu_id() {
		return menu_id;
	}
	public void setMenu_id(String menu_id) {
		this.menu_id = menu_id;
	}
	public String getMenu_name() {
		return menu_name;
	}
	public void setMenu_name(String menu_name) {
		this.menu_name = menu_name;
	}
	public String getSrc_path() {
		return src_path;
	}
	public void setSrc_path(String src_path) {
		this.src_path = src_path;
	}
	public String getUse_yn() {
		return use_yn;
	}
	public void setUse_yn(String use_yn) {
		this.use_yn = use_yn;
	}
	public String getSrc_type() {
		return src_type;
	}
	public void setSrc_type(String src_type) {
		this.src_type = src_type;
	}
	public String getSrc_value() {
		return src_value;
	}
	public void setSrc_value(String src_value) {
		this.src_value = src_value;
	}

	public String getUser_r() {
		return user_r;
	}
	public void setUser_r(String user_r) {
		this.user_r = user_r;
	}

	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
}
