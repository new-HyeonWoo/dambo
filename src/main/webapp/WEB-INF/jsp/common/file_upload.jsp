<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="https://unpkg.com/filepond@^4/dist/filepond.css" rel="stylesheet" />
    <script src="https://unpkg.com/filepond@^4/dist/filepond.js"></script>
<title></title>
</head>

<body>
    <input type="file" />
    <button id="addFile">파일업로드를 진행해주세요.</button>
    <script type="text/javascript">
        const kindCode = '<%=request.getAttribute("kindCode")%>'
        const inputElement = document.querySelector('input[type="file"]');

        const pond = FilePond.create(inputElement);
        pond.setOptions({
            labelIdle: '<b>드래그 또는 클릭해주세요.</b>',
            server: {
                process: {
                    url: '/ezgen/files/upload?kindCode=' + kindCode,
                    method: 'POST',
                    withCredentials: false,
                    headers: {},
                    timeout: 7000,
                    onload: null,
                    onerror: null,
                    ondata: formData => {
                        $("#addFile").attr('disabled', false);
                        $("#addFile").text("등록");

                        return formData;
                    },
                    onerror: (response) => {
                        alert(JSON.parse(response).message);
                    }
                },
            }
        })

        $(document).ready(function () {
            $("#addFile").attr('disabled', true);
            $("#addFile").on({
                click: function() {
                    oncompleate(pond.getFiles()[0].file);
                    window.close();
                }
            })
        });
    </script>
</body>
</html>