define([
    'jquery',
    'pagination'
], function ($, pagination) {



    $(".M-box3").pagination({
        pageCount: 5,
        jump: true,
        showData: 5, //每页显示的条数
        coping: true,
        mode: "fixed",
        count: 4,
        homePage: "首页",
        endPage: "末页",
        prevContent: "上页",
        nextContent: "下页",
        callback: function (api) {}
    });


    var flag = false;
    //770以下的适配
    $(".icon-fenlei").on('click', function () {
        $(".total").css("transform", "translate(0)")
        flag = true;
        console.log(flag);
        if (flag) {
            console.log('2222');
            $(".total").on('click', function () {
                console.log('11111');
                $(".total").css("transform", "translate(-40vw)");
            })
        }
        return false;
    })



    //770-1200的适配


    //1200以上的适配
});