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
        document.body.style.position='fixed';
        flag = true;
        console.log(flag);
        if (flag) {
            console.log('2222');
            $(".total1").on('click', function () {
                console.log('11111');
                $(".total1").css("transform", "translate(-40vw)");
                document.body.style.position='initial';
            })
        }
        return false;
    })

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
    // var translateX = Math.abs($('.screen').css("transform").replace(/[^0-9\-,]/g,'').split(',')[4]);
    // console.log(translateX);
    // if(translateX == 0){
    //   $('body').css({ 
    //         "overflow-x":"hidden",
    //         "overflow-y":"hidden"       
    //   });
    // }
    
});