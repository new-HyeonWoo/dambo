<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>

<script type="text/javaScript" language="javascript" defer="defer">
	function menu_button(type, flag){
		location.href="<c:url value='/"+type+"/"+flag+".do'/>";
	};

	function fn_logout_button(){
		var retVal = confirm("로그아웃 하시겠습니까?");

		var retVals = confirm("지금 보고 있는 웹 페이지에서 탭을 닫으려고 합니다.이 탭을 닫으시겠습니까?");

		if(retVal == true){
			if(retVals == true){
				var userAgent = navigator.userAgent;
				if (userAgent.indexOf("Firefox") != -1
						|| userAgent.indexOf("Chrome") != -1) {
					window.location.href = "about:blank";
				} else {
					window.opener = null;
					window.open("", "_self");
					window.close();
				}
			}
		}

	}
</script>

<div id="kt_aside" class="aside aside-dark aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
	<div class="aside-logo flex-column-auto" id="kt_aside_logo">
		<a href="javascript:menu_button('es01','es01_w01')">
			<img alt="Logo" src="<c:url value="/resources/media/logos/logo-text.svg"/>" class="h-15px logo" />
		</a>
		<div id="kt_aside_toggle" class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize">
			<span class="svg-icon svg-icon-1 rotate-180">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="currentColor" />
					<path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="currentColor" />
				</svg>
			</span>
		</div>
	</div>
	
	<div class="aside-menu flex-column-fluid">
		<div class="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
			<div class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true" data-kt-menu-expand="false">
				<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
					<span class="menu-link">
						<span class="menu-title">
							<c:out value="${userName}"/><c:out value="(${userDept})"/> 님
						</span>
					</span>
					<div class="menu-sub menu-sub-accordion menu-active-bg">
						<div class="menu-item">
							<a class="menu-link" href="javascript:fn_logout_button();">
								<span class="menu-bullet">
									<span class="bullet bullet-dot"></span>
								</span>
								<span class="menu-title">로그아웃</span>
							</a>
						</div>
					</div>
				</div>
				<c:forEach var="menuListHeader" items="${menuHeaderList}" varStatus="status">
					<div class="menu-item">
						<div class="menu-content pt-5 pb-3">
							<span class="text-muted ls-1"><i class="bi bi-stickies"></i> ${menuListHeader.grpName}</span>
						</div>
					</div>
					<c:forEach var="menuList" items="${menuList}" varStatus="status">
						<c:if test="${menuListHeader.grpId eq menuList.grpId}">
							<div id="${menuList.srcValue}" <c:if test="${menuList.menuId eq menu_id}">class="menu-item here show"</c:if><c:if test="${menuList.menuId ne menu_id}">class="menu-item"</c:if> >
								<a class="menu-link" href="javascript:menu_button('${menuList.srcType}','${menuList.srcValue}','${menuList.menuId}');">
									<span class="menu-icon">
										<c:choose>
											<c:when test="${menuList.menuId eq '911'}"><i class="bi bi-pin-map fs-3"></i></c:when>
											<c:when test="${menuList.menuId eq '912'}"><i class="bi bi bi-search fs-3"></i></c:when>
											<c:when test="${menuList.menuId eq '921'}"><i class="bi bi-patch-check fs-3"></i></c:when>
											<c:when test="${menuList.menuId eq '922'}"><i class="bi bi bi-search fs-3"></i></c:when>
											<c:when test="${menuList.menuId eq '923'}"><i class="bi bi-stickies fs-3"></i></c:when>
											<c:when test="${menuList.menuId eq '931'}"><i class="bi bi bi-search fs-3"></i></c:when>
											<c:when test="${menuList.menuId eq '932'}"><i class="bi bi bi-search fs-3"></i></c:when>
											<c:when test="${menuList.menuId eq '933'}"><i class="bi bi-file-earmark-bar-graph fs-3"></i></c:when>
											<c:when test="${menuList.menuId eq '941'}"><i class="bi bi-code-slash fs-3"></i></c:when>
											<c:when test="${menuList.menuId eq '942'}"><i class="bi bi-person-badge fs-3"></i></c:when>
											<c:when test="${menuList.menuId eq '948'}"><i class="bi bi-gear fs-3"></i></c:when>
											<c:when test="${menuList.menuId eq '949'}"><i class="bi bi-file-earmark-plus fs-3"></i></c:when>
											<c:otherwise><i class="bi bi-file-earmark-plus fs-3"></i></c:otherwise>
										</c:choose>
									</span>
									<span class="menu-title">${menuList.menuName}</span>
									<span class="menu-arrow"></span>
								</a>
							</div>
						</c:if>
					</c:forEach>
				</c:forEach>		
			</div>
		</div>
	</div>
</div>