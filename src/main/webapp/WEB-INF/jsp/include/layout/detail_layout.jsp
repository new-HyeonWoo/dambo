<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles"  prefix="tiles"%>
<!DOCTYPE html>
<html>
<head>
    <tiles:insertAttribute name="loadFile"/>
</head>
<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed bg-gray-200">
	<div class="d-flex flex-column flex-root">
		<div class="page d-flex flex-row flex-column-fluid">
			<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">						
				<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
					<div class="d-flex flex-column-fluid">
						<div id="kt_content_container" class="container-fluid">
							<div class="row gy-5">
								<tiles:insertAttribute name="body"/>
							</div>
						</div>	
					</div>
				</div>				
			</div>
		</div>
	</div>
	<tiles:insertAttribute name="foot"/>		
</body>
</html>