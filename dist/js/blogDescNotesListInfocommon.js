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


    $("body").css({
        "overflow-y": "hidden"
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



    //720px以下(手机端) 关于博客的跳转事件
    $("#aboutBlog").on("click", function () {
        window.location.href = './blogDesc'
    })

    //获取视口的宽度
    var viewWidth = document.body.clientWidth;
    var left = -574;
    // console.log("viewWidth======>" + viewWidth);
    // console.log("left======>" + left);
    $(".mp").css({
        left: `${left}px`
    });



    // console.log("滚动条事件")
    var scrollTop = $(document).scrollTop();
    var viewHeight = $(window).height();
    var top = scrollTop + viewHeight * 0.85;
    // console.log("top======>"+top);

    //设置音乐盒子的Top值

    $(".mp").css({
        top: `${top}px`
    });


    if (viewWidth > 770) {
        var count = 1;

        //获取视口的宽度
        var viewWidth = document.body.clientWidth;
        var left = -574;
        // console.log("viewWidth======>" + viewWidth);
        // console.log("left======>" + left);
        $(".mp").css({
            left: `${left}px`
        });




        $(".mp-toggle").on("click", function () {
            console.log("播放器点击事件  count=====>" + count);

            if (count % 2 != 0) { //奇数
                $(".mp").animate({
                    left: "0vw"
                });
                // numSubmit++;
            }

            if (count % 2 == 0) { //偶数
                $(".mp").animate({
                    left: `${left}px`
                });
            }


            count++;
        })

    } else if (viewWidth < 599) {
        $("body").css({
            "overflow-y": "auto"
        })
        var count = 1;
        // var left = -0.56*viewWidth;
        // var left = -0.545 * viewWidth;
        var left = -0.56 * viewWidth;

        console.log("leftImportant===========>" + left)


        $(".mp").animate({
            left: `${left}px`
        });

        $(".mp-toggle").on("click", function () {
            console.log("播放器点击事件  count=====>" + count);

            if (count % 2 != 0) { //奇数
                $(".mp").animate({
                    left: "40vw"
                });
                // numSubmit++;
            }



            if (count % 2 == 0) { //偶数
                $(".mp").animate({
                    left: `${left}px`
                });
            }




            count++;
        })
    } else { //599---770
        $("body").css({
            "overflow-y": "auto"
        })

        var count = 1;
        // var left = -0.56*viewWidth;
        // var left = -0.545*viewWidth;
        var left = -(574 - 0.4 * viewWidth);

        console.log("leftImportant===========>" + left)


        $(".mp").animate({
            left: `${left}px`
        });

        $(".mp-toggle").on("click", function () {
            console.log("播放器点击事件  count=====>" + count);

            if (count % 2 != 0) { //奇数
                $(".mp").animate({
                    left: "40vw"
                });
                // numSubmit++;
            }



            if (count % 2 == 0) { //偶数
                $(".mp").animate({
                    left: `${left}px`
                });
            }




            count++;
        })

    }



    if (viewWidth <= 770) {
        $(window).scroll(function () {
            // console.log("滚动条事件")
            var scrollTop = $(document).scrollTop();
            var viewHeight = $(window).height();
            var top = scrollTop + viewHeight * 0.85;
            // console.log("top======>"+top);

            //设置音乐盒子的Top值

            $(".mp").css({
                top: `${top}px`
            });
        })
    }



});