define(["jquery"], function ($) {
    //点击搜索按钮,收索区域出现
    $(".search").on("click", function () {
        console.log('1111111');
        $(".row").css({
            "display": "block"
        });
    })

    //770px以下 点击分类按钮 分类出来
    var flag = false;
    $(".icon-fenlei").on('click', function () {
        $(".total1").css("transform", "translate(0)")
        flag = true;
        console.log(flag);
        if (flag) {
            console.log('2222');
            $(".total1").on('click', function () {
                console.log('11111');
                $(".total1").css("transform", "translate(-40vw)");
            })
        }
        return false;
    })
    // $(".youxiao").css("transform", "translate(0)");


    //发起请求就让小球显示
    $(document).ajaxStart(function(){
        // console.log('1111111111111111111111111111');
        $(".ball").css({"display":"block"});
    })


    $(document).ajaxStop(function(){
        // console.log('1111111111111111111111111111');
        $(".ball").css({"display":"none"});
    })


    //页面加载事件
    
});