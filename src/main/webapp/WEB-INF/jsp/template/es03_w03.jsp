<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <style>
        .hide { display:none; }
    </style>

    <meta charset="UTF-8">
    <script defer src="../../../resources/js/custom/grid/template.js"></script>
</head>
<body>
    <script id="감정현황_CrossTab_건수_템플릿" type="text/x-handlebars-template">
        <div class="d-flex justify-content-start">
            <div class="min-w-150px">
                <div class="border rounded p-2 text-center bg-secondary text-nowrap">
                    <div class="h-20px"></div>
                </div>
                <div class="border rounded p-2 text-center bg-secondary text-nowrap">
                    <div class="fs-7">건수</div>
                </div>
            </div>
            {{#each .}}
                {{>감정현황_CrossTab_건수_템플릿_ROW index=@index}}
            {{/each}}
        </div>	
    </script>
    
    <script id="감정현황_CrossTab_건수_템플릿_ROW" type="text/x-handlebars-template">
        <div class="min-w-100px">
            <div class="border rounded p-2 text-center bg-secondary text-nowrap">
                <div class="fs-7">
                   {{ notField name="년도" value=년도 index=index options='{"textType": "text-center"}' }}
                </div>
            </div>
            <div class="border rounded p-2 text-end min-w-100 fs-7">
                {{ notField name="건수" value=건수 index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}
            </div>
        </div>
    </script>

    <script id="감정현황_CrossTab_평가금액_템플릿" type="text/x-handlebars-template">
        <div class="d-flex justify-content-start">
            <div class="min-w-150px">
                <div class="border rounded p-2 text-center bg-secondary text-nowrap">
                    <div class="h-20px"></div>
                </div>
                <div class="border rounded p-2 text-center bg-secondary text-nowrap">
                    <div class="fs-7">평가금액</div>
                </div>
            </div>
            {{#each .}}
                {{>감정현황_CrossTab_평가금액_템플릿_ROW index=@index}}
            {{/each}}
        </div>	
    </script>
    
    <script id="감정현황_CrossTab_평가금액_템플릿_ROW" type="text/x-handlebars-template">
        <div class="min-w-200px">
            <div class="border rounded p-2 text-center bg-secondary text-nowrap">
                <div>
                   {{ notField name="년도" value=년도 index=index options='{"textType": "text-center"}' }}
                </div>
            </div>
            <div class="border rounded p-2 text-end min-w-100 fs-7">
                {{ notField name="건수" value=건수 index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}
            </div>
        </div>
    </script>

</body>    