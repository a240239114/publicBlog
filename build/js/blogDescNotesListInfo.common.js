define([
    'jquery',
    'dependency'
], function ($, factory) {
    'use strict';
    //770p以下 点击侧边栏回到主页
    $(".aside li").each(function (index, item) {
        // console.log(index,item);
        console.log(item);

        $(item).on("click", function () {
            console.log($(this).attr("data-where"));
            console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
            var where = $(this).attr("data-where");
            var whereinfo = $(this).attr("data-whereinfo");
            window.location.href = "index?" + where + "&" + whereinfo;
            // window.location.reload();
            console.log(item);
            // $(".screen").css({"transform":"translate(-50%)"})
        })
    })
});