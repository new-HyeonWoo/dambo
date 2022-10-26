<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles"  prefix="tiles"%>
<!DOCTYPE html>
<html>
<head>
    <tiles:insertAttribute name="loadFile"/>
</head>
<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed" style="--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px">
	<div class="d-flex flex-column flex-root">
		<div class="page d-flex flex-row flex-column-fluid">
			<tiles:insertAttribute name="left"/>
			<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
				<tiles:insertAttribute name="header"/>
				<tiles:insertAttribute name="body"/>
			</div>
		</div>
	</div>
	<tiles:insertAttribute name="foot"/>		
</body>
</html>