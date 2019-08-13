define(["jquery", "template"], function ($, template) {
    // console.log('22222');
    //静止.body .total1左右滑动
    $('.body').css({
        "overflow-x": "hidden"
    });

    $('.total1').css({
        "overflow-x": "hidden"
    });


    //770px以下 点击分类按钮 分类出来
    var flag = false;
    $(".icon-fenlei").on('click', function () {
        $(".total1").css("transform", "translate(0)")
        // document.body.style.position = 'fixed';
        $('.body').css({
            "overflow-x": "hidden"
        });

        $('.body').css({
            "overflow-y": "hidden"
        });
    
        $('.total1').css({
            "overflow-x": "hidden"
        });

        $('.total1').css({
            "overflow-y": "hidden"
        });

        $('body').css({
            "overflow-x": "hidden"
        });
        
        $('body').css({
            "overflow-y": "hidden"
        });


        flag = true;
        console.log(flag);
        if (flag) {
            console.log('2222');
            $(".total1").on('click', function (event) {
                event.stopPropagation();
                window.location.reload();
                
            })
        }
        return false;
    })


    //发起请求就让小球显示
    $(document).ajaxStart(function () {
        $(".wrap").css({
            "display": "block"
        });

        $(".ball").css({
            "display": "block"
        });

        //禁用滚动条
        $(".body").css({
            "overflow-y": "hidden"
        });
    })


    $(document).ajaxStop(function () {
        $(".ball").css({
            "display": "none"
        });
        $(".wrap").css({
            "display": "none"
        });

        //开启滚动条
        $(".body").css({
            "overflow-y": "auto"
        });

    })


    //最近更新
    $.ajax({
        url: "api/recentlyList",
        type: "get",
        success: function (data) {
            var html = template("recentlyTpl", data);
            // console.log("最近更新=====>"+data);
            $(".update>.bottom").html(html);
        }
    }).done(function () {
        //最近更新的页面跳转
        $("#recentlyArticle>.item1").map(function (index, item) {

            $(item).on("click", function () {
                console.log($(item).attr("data-id"));
                var id = $(item).attr("data-id");
                window.location.href = `blogListInfo?${id}&allInfo`;
            })
        })
    })


    //随机文章
    $.ajax({
        url: "api/randomList",
        type: "get",
        success: function (res) {
            // console.log(res.data);
            var html = template("randomTpl", {
                data: res.data
            });
            // console.log(html);
            $("#randomArticle").html(html);
        }
    }).done(function () { //随机事件li跳转  
        $(".moatext_wave").moatext({
            effects: ["lens", "wave", "opacity"],
            values: {
                "opacity": {
                    "base": "1.0",
                    "enter": "0.1",
                    "leave": "1.0"
                },
                "wave": {
                    "enter": ["-50px", "20px"]
                }
            },
            duration: 2000,
            easing: "swing"
        });

        $("#randomArticle p").mouseenter(function () {
            $(this).css({
                "color": "blue"
            })
        })

        $("#randomArticle p").mouseleave(function () {
            $(this).css({
                "color": "black"
            })
        })

        $("#randomArticle>li").map(function (index, item) {
            //    console.log(index,item)
            $(item).on("click", function () { //传递id&allInfo
                //    console.log("11111");
                var id = $(item).attr("data-id");
                //    console.log(id);

                window.location.href = `blogListInfo?${id}&allInfo`
            })
        })
    })


    //精彩评论
    $.ajax({
        url: "api/wonderfulComments",
        type: "get",
        success: function (data) {
            // console.log("data.url=====>"+data.data.url);
            var html = template("wonderfulTpl", data);

            // $(".item4 .pic").css('background-image',`url(${data.url})`);
            // console.log(html);
            $("#wonderfulComments").html(html);
        }
    })
});