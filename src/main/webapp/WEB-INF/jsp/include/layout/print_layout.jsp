<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles"  prefix="tiles"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<title>하이트진로 | 담보감정시스템</title>
	<meta charset="utf-8" />
	<meta name="description" content="설명 자리" />
	<meta name="keywords" content="키워드 자리" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta property="og:locale" content="ko-KR" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="하이트진로 담보감정 시스템" />
	<meta property="og:url" content="https://@@@.com" />
	<meta property="og:site_name" content="하이트진로" />
	<link rel="canonical" href="https://@@@.com" />
	<link rel="shortcut icon" href="<c:url value="/resources/media/logos/favicon.ico"/>" />		
	
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />	
	<link href="<c:url value="/resources/plugins/global/plugins.bundle.css"/>" rel="stylesheet" type="text/css"/>
	<link href="<c:url value="/resources/css/style.bundle.css"/>" rel="stylesheet" type="text/css"/>
	<link href="<c:url value="/resources/css/style.custom.css"/>" rel="stylesheet" type="text/css"/>
	<link href="<c:url value="/resources/plugins/custom/jstree/jstree.bundle.css"/>" rel="stylesheet" type="text/css" />
	<style type="text/css" media="print">
		@page {
		    size: auto;  /* auto is the initial value */
		    margin: 0;  /* this affects the margin in the printer settings */
		}
	</style>
</head>
<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed">
	<div class="d-flex flex-column flex-root">
		<div class="page d-flex flex-row flex-column-fluid">
			<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
				<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
					<div class="d-flex align-items-center gap-4 justify-content-end mb-2 container-fluid">
						<a href="#" onclick="javascript:_내용보기()" id="search" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder">
							<i class="fas fa-file-alt"></i>
							내용 보기
						</a>
						<a href="#" onclick="javascript:_수정()" id="update" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder">
							<i class="fas fa-file-alt"></i>
							수정하기
						</a>
						<a href="#" onclick="javascript:printPage();" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder">
							<i class="fas fa-print"></i>
							프린트
						</a>
					</div>
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
    <script>

        var initBodyHtml;

        function printPage() {
            window.print();
        }

        function beforePrint() {
            initBodyHtml = document.body.innerHTML;
            document.body.innerHTML = document.getElementById('print').innerHTML;
        }
        function afterPrint() {
            document.body.innerHTML = initBodyHtml;
        }

        window.onbeforeprint = beforePrint;
        window.onafterprint = afterPrint;

    </script>
</body>
</html>