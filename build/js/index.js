define(["jquery", "template", "pagination"], function ($, template, pagination) {

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
        // $('.wrap').show();   
        $(".knowledgeList li").animate({
            "margin-bottom": "20px",
            "opacity": 1
        }, 3000)
    });

    //添加详情的跳转事件
    function turnBlogListInfo(whereInfo) {
        // 获取当前li的data-id
        $(".knowledgeList>li").each(function (i, ele) {
            //    console.log(ele);
            $(ele).on('click', function () {
                console.log($(this).attr('data-whereInfo'));
                var method = whereInfo;

                var id = $(this).attr('data-id');
                window.location.href = 'blogListInfo?' + id + '&' + method;
            })
        })

        $(".knowledgeList>li img").toArray().forEach(function (element) {
            $(element).on('click', function () {
                console.log($(this).attr('data-id'));
                var method = whereInfo;
                var id = $(this).attr('data-id');
                window.location.href = 'blogListInfo?' + id + '&' + method;
            })
        });


        $(".knowledgeList>li a").toArray().forEach(function (element) {
            $(element).on('click', function () {
                console.log($(this).attr('data-id'));
                var method = whereInfo
                var id = $(this).attr('data-id');
                window.location.href = 'blogListInfo?' + id + '&' + method;
            })
        });
    }
    //加载页面
    async function LoadPages(where, whereInfo) {
        // var count;
        //查询当前list总共多少条
        var count =  await $.ajax({ url: "api/" + where,type: "get"});
            count = Math.ceil(count.data.length/8);

        console.log(count);


        //默认显示第一页
        $.ajax({
            url: "api/" + where + "/1",
            type: "get",
            success: function (res) {
                var html = template("paginnationTpl", {
                    data: res.data
                })
                $(".knowledgeList").html(html);
            }
        }).done(function () {
            turnBlogListInfo(whereInfo);
        })

        //根据索引获取数据
        function loadPages(pageall) {
            $(".M-box3").pagination({
                current: 0,
                mode: "fixed",
                count: 5,
                pageCount:count,
                jump: true,
                coping: true,
                homePage: "首页",
                endPage: "末页",
                prevContent: "上页",
                nextContent: "下页",
                callback: function (api) {
                    var index = api.getCurrent();
                    //根据索引获取数据
                    $.ajax({
                        url: "api/" + where + "/" + index,
                        type: "get",
                        success: function (res) {
                            var html = template("paginnationTpl", {
                                data: res.data
                            })
                            $(".knowledgeList").html(html);
                            console.log("res.data.length=====>" + res.data.length)
                        }
                    }).done(function () {
                        turnBlogListInfo(whereInfo);
                    })
                }
            });
        }

        loadPages();
    }

    //给770px以上的头部导航的a添加点击事件,加载不同的数据
    $(".navigation a").each(function (index, item) {
        $(item).on("click", function () {
            var whereList = $(item).attr("data-where");
            var whereinfo = $(item).attr("data-whereinfo");
            console.log(whereinfo);
            $('.screen').css("transform", "translate(-50%)");
            LoadPages(whereList, whereinfo);
        })
    })

    //给770px以下左侧导航的li添加点击事件加载数据
    $(".aside li").each(function (index, item) {
        $(item).on("click", function () {
            var whereList = $(item).attr("data-where");
            var whereinfo = $(item).attr("data-whereinfo");
            LoadPages(whereList, whereinfo);
        })
    })


    //点击bewater页面,相框向左滑动
    $(".bewater").on("click", function () {
        console.log("11111");;
        $('.screen').css("transform", "translate(-50%)");
    })


    //770以下的适配,点击分类按钮
    var flag = false;
    $(".icon-fenlei").on('click', function () {
        $(".youxiao").css("transform", "translate(0)")
        document.body.style.position = 'fixed';
        flag = true;
        console.log(flag);
        if (flag) {
            console.log('2222');
            $(".youxiao").on('click', function () {
                console.log('11111');
                $(".youxiao").css("transform", "translate(-40vw)");
                document.body.style.position = 'initial';
            })
        }
        return false;
    })

    //页面加载事件
    //第一次加载页面的时候显示第一页
    LoadPages('allList');

    //blogNotes页面跳转过来加载分页区域,则无需bewater,根据search加载数据
    if (window.location.search) {
        // $(".bewater").css({"width":0});
        console.log("search");
        $(".screen").css({
            "transform": "translate(-50%)"
        })
        var where = decodeURIComponent(window.location.search).slice(1, 8);
        var whereInfo = decodeURIComponent(window.location.search).slice(9, 16);
        LoadPages(where, whereInfo);
    }


    if (document.body.clientWidth <= 770 && window.location.search) {
        // window.location.reload();
        $(".screen").css({
            "transform": "translate(0vw)"
        })
    }


    //视口发生变化就执行
    $(window).resize(function () {
        window.location.reload();
    });


});