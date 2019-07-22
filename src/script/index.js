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
                console.log($(this).attr('data-id'));
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
    function LoadPages(where, whereInfo) {
        //默认显示第一页
        $.ajax({
            url: "api/" + where + "/1",
            type: "get",
            success: function (res) {
                // console.log(res.data);

                //    console.log($);
                // console.log(template);
                //    console.log(pagination);
                var html = template("paginnationTpl", {
                    data: res.data
                })
                // console.log(html)
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
                pageCount: 50,
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
                            console.log(res.data);

                            //    console.log($);
                            // console.log(template);
                            //    console.log(pagination);
                            var html = template("paginnationTpl", {
                                data: res.data
                            })
                            // console.log(html)
                            $(".knowledgeList").html(html);
                        }
                    }).done(function () {
                        turnBlogListInfo(whereInfo);
                    })
                }
            });
        }

        loadPages();
    }

    //第一次加载页面的时候显示第一页
    LoadPages('allList');

    //给a添加点击事件,加载不同的数据
    $(".navigation a").each(function (index, item) {
        $(item).on("click", function () {
            var whereList = $(item).attr("data-where");
            var whereinfo = $(item).attr("data-whereinfo");
            console.log(whereinfo);
            console.log(whereList);
            $('.screen').css("transform", "translate(-50%)");
            // window.location.pathname = "none";
            // window.location.serach = "";
            LoadPages(whereList, whereinfo);
        })
    })

    //点击bewater页面,相框向左滑动
    $(".bewater").on("click", function () {
        console.log("11111");;
        $('.screen').css("transform", "translate(-50%)");
        // $(".bewater").css({"width":0});
    })

    if (window.location.search) {//blogNotes页面跳转过来加载分页区域,则无需bewater
        // $(".bewater").css({"width":0});
        $(".screen").css({"transform":"translate(-50%)"})
        var where = decodeURIComponent(window.location.search).slice(1, 8);
        var whereInfo = decodeURIComponent(window.location.search).slice(9, 16);
        // console.log(where,whereInfo);
        LoadPages(where, whereInfo);
    }

    //770以下的适配
    var flag = false;
    $(".icon-fenlei").on('click', function () {
        $(".youxiao").css("transform", "translate(0)")
        flag = true;
        console.log(flag);
        if (flag) {
            console.log('2222');
            $(".youxiao").on('click', function () {
                console.log('11111');
                $(".youxiao").css("transform", "translate(-40vw)");
            })
        }
        return false;
    })
    //770-1200的适配
    //1200以上的适配

});