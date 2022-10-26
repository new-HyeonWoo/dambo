$(function() {

    $('#start_datePicekr').daterangepicker({
        singleDatePicker: true,
        locale: {
            "format": "YYYY-MM-DD",
            "separator": " ~ ",
            "applyLabel": "확인",
            "cancelLabel": "취소",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
            "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        },
        startDate: document.getElementById('start_datePicekr').value,
    }, function (start, end, label){
    	document.getElementById('start_datePicekr').value = start.format('YYYY-MM-DD');
    	document.getElementById('startDt').value = start.format('YYYYMMDD');
    });

    $('#end_datePicekr').daterangepicker({
        singleDatePicker: true,
        locale: {
            "singleDatePicker": true,
            "format": "YYYY-MM-DD",
            "separator": " ~ ",
            "applyLabel": "확인",
            "cancelLabel": "취소",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
            "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        },
        startDate: document.getElementById('end_datePicekr').value,
    }, function (start, end, label){
        document.getElementById('end_datePicekr').value = start.format('YYYY-MM-DD');
        document.getElementById('endDt').value = start.format('YYYYMMDD');
    });
    
});