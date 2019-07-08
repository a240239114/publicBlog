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


    //770以下的适配

    // $('.total').on('click', function () {
    //     // alert('哈师大');
    //     $('.aside').animate({
    //         width: 0
    //     }, 2,'linear',function(){
    //         // $('.aside>ul').hide();
    //     });

    //     $('.total').animate({
    //         width: '100vw'
    //     }, 2,'linear');


    //     // return false   
    // })

    // $('.icon-fenlei').on('click', function () {
    //     // alert('哈师大');
    //     $('.aside').animate({
    //         width: '40vw'
    //     }, 2,'linear');

    //     $('.total').animate({
    //         width: '140vw'
    //     },2,'linear');

    //     return false  
    // })

    //770-1200的适配


    //1200以上的适配
});