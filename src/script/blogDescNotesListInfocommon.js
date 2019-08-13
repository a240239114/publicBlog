define([
    'jquery',
    'dependency'
], function ($, factory) {
    //770px以下 点击侧边栏回到主页
    $(".aside li").each(function (index, item) {
        $(item).on("click", function (event) {
            event.stopPropagation();
            var where = $(this).attr("data-where");
            var whereinfo = $(this).attr("data-whereinfo");
            window.location.href = "index?" + where + "&" + whereinfo;
        })
    })

    //770px以上  点击li跳转到主页
    $(".navigation a").each(function (index, item) {
        // console.log(index,item);
        $(item).on("click", function () {
            // console.log($(this).attr("data-where"));
            var where = $(this).attr("data-where");
            var whereinfo = $(this).attr("data-whereinfo");
            window.location.href = "index?" + where + "&" + whereinfo;
            // console.log(item);
            // $(".screen").css({"transform":"translate(-50%)"})
        })
    })



    //页面加载事件
});