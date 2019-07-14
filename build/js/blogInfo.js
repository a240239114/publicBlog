define([
    'jquery'
], function ($) {
    //发起请求就执行,li之间的间距变小
    $(document).ajaxStart(function () {
        $('.wrap').show();
        // $('.wrap').show();   
        // $(".knowledgeList li").animate({
        //     "margin-bottom": "20px",
        //     "opacity": 1
        // }, 3000)
    });

    //发起请求结束就执行,li之间的间距变小
    $(document).ajaxStop(function () {
        $('.wrap').hide();
    });
});