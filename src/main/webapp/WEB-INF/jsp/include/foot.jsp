<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<script>
	// WinPopup JS
	function DetailWindowPop(url, name){
		var options = 'top=10, left=10, width=1900, height=1000, status=no, menubar=no, toolbar=no, resizable=no';
		window.open(url, name, options);
	}
</script>

   	<script>
			$('#kt_docs_jstree_customicons').jstree({
				"core" : {
					"themes" : {
						"responsive": false
					}
				},
				"types" : {
					"default" : {
						"icon" : "fa fa-folder text-warning"
					},
					"file" : {
						"icon" : "fa fa-file  text-warning"
					}
				},
				"plugins": ["types"]
			});

			// handle link clicks in tree nodes(support target="_blank" as well)
			$('#kt_docs_jstree_customicons').on('select_node.jstree', function(e,data) {
				var link = $('#' + data.selected).find('a');
				if (link.attr("href") != "#" && link.attr("href") != "javascript:;" && link.attr("href") != "") {
					if (link.attr("target") == "_blank") {
						link.attr("href").target = "_blank";
					}
					document.location.href = link.attr("href");
					return false;
				}
			});
	</script>