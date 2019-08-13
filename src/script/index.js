define(["jquery", "template", "pagination", "lunbo"], function ($, template, pagination) {
    'use strict';
    $("a").css("text-decoration", "none");

    //发起请求就执行,li之间的间距变小
    $(document).ajaxStart(function () {});

    //发起请求结束就执行,li之间的间距变小,测试
    $(document).ajaxStop(function () {
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


    //点击删除按钮 删除allList/allInfo/xxList/xxInfo
    function reMove() {
        $(".icon-jiahaocu").map(function (index, item) {
            $(item).on("click", function () {
                console.log($(item).attr("data-where"));
                console.log($(item).attr("data-tittle"));
                var where = $(item).attr("data-where");
                var tittle = $(item).attr("data-tittle");
                console.log("api/allList/tittle/${tittle}==============>" + `api/allList/tittle/${tittle}`);

                console.log("删除事件")
                //根据tittle删除 allList
                $.ajax({
                    url: `api/allList/tittle/${tittle}`,
                    type: "delete",
                    success: function (res) {
                        console.log(res);
                    }
                })

                //根据tittle删除 allInfo
                $.ajax({
                    url: `api/allInfo/tittle/${tittle}`,
                    type: "delete",
                    success: function (res) {
                        console.log(res);
                    }
                })

                //根据tittle删除 whereList
                $.ajax({
                    url: `api/${where}List/tittle/${tittle}`,
                    type: "delete",
                    success: function (res) {
                        console.log(res);
                    }
                })

                //根据tittle删除 whereInfo
                $.ajax({
                    url: `api/${where}Info/tittle/${tittle}`,
                    type: "delete",
                    success: function (res) {
                        console.log(res);
                    }
                })

                LoadPages(`${where}List`, `${where}Info`);
                return false;
            })
        })
    }

    var onceFlag = true;

    //加载页面
    async function LoadPages(where, whereInfo) {
        // var count;
        //查询当前list总共多少条
        var count = await $.ajax({
            url: "api/" + where,
            type: "get"
        });
        var listCount = count.data.length;
        count = Math.ceil(count.data.length / 8);

        console.log("onceFlag======>" + onceFlag)

        // console.log(count);
        //根据路由获取where
        if (window.location.search.length == 22 && onceFlag) {
            var whereParms = window.location.href.split('?')[1].split('L')[0];
            where = whereParms + "List";
            whereInfo = whereParms + "Info";
            onceFlag = false;
        }

        console.log("where=====>" + where);

        // $('.screen').css("transform", "translate(-50%)");


        //默认显示第一页
        $.ajax({
            url: "api/" + where + "/index/1",
            // url: "api/"+where,
            type: "get",
            success: function (res) {
                // console.log(where);
                var html = template("paginnationTpl", {
                    data: res.data
                })
                $(".knowledgeList").html(html);
            }
        }).done(function () {
            console.log("whereInfo=====>" + whereInfo);

            //添加跳转事件
            turnBlogListInfo(whereInfo);
            //添加删除事件
            reMove();
        })

        //初始化分页插件
        function loadPages(pageall) {
            $(".M-box3").pagination({
                current: 0,
                mode: "fixed",
                count: 5,
                pageCount: count,
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
                        url: "api/" + where + "/index/" + index,
                        type: "get",
                        success: function (res) {
                            var html = template("paginnationTpl", {
                                data: res.data
                            })
                            $(".knowledgeList").html(html);
                            // console.log("res.data.length=====>" + res.data.length)
                            console.log(res);
                        }
                    }).done(function () {

                        turnBlogListInfo(whereInfo);
                        //添加删除事件
                        reMove();
                    })
                }
            });
        }

        // console.log(listCount);

        if (listCount >= 8) { //初始化分页插件
            // console.log("111111111111");
            loadPages();
        }
    }

    //给770px以上的头部导航的a添加点击事件,加载不同的数据
    $(".navigation a").each(function (index, item) {
        $(item).on("click", function () {
            // window.location.href = '/';
            console.log("向左移动")

            var whereList = $(item).attr("data-where");
            var whereinfo = $(item).attr("data-whereinfo");
            console.log(whereinfo + "=========" + whereList);
            $('.screen').css("transform", "translate(-50%)");
            LoadPages(whereList, whereinfo);
        })
    })

    //给770px以下左侧导航的li添加点击事件加载数据
    $(".aside li").each(function (index, item) {
        $(item).on("click", function (event) {
            var whereList = $(item).attr("data-where");
            var whereinfo = $(item).attr("data-whereinfo");
            LoadPages(whereList, whereinfo);

        })
    })


    //点击bewater页面,相框向左滑动
    $(".bewater").on("click", function () {
        // console.log("11111");;
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
                window.location.reload();
            })
        }
        return false;
    })

    //页面加载事件
    //第一次加载页面的时候显示第一页
    LoadPages('allList', "allInfo");

    var onceFlag = true;

    //blogNotes页面跳转过来加载分页区域,则无需bewater,根据search加载数据
    if (window.location.search) {
        // $(".bewater").css({"width":0});
        // console.log("search");
        // onceFlag = false;
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
    // $(window).resize(function () {
    //     window.location.reload();
    // });

    //点击搜索按钮,收索区域出现
    $(".search").on("click", function () {
        // console.log('1111111');
        $(".row").css({
            "display": "block"
        });
        return false;
    }).on("mouseenter", function () {
        console.log("鼠标划过事件")
        $("a").css("text-decoration", "none");
    })

    //点击document收索框消失
    $(document).on("click", function () {
        // console.log("document");
        //收索框消失
        $('.row').css({
            "display": "none"
        })
        // return false;
    })

    //取消点击收索框的冒泡事件
    $('.row').on("click", function () {
        return false;
    })

    $("main").scroll(function () {
        console.log("scroll")
    })



    //点击收索框 收索框消失 执行收索功能
    $('.input-group-btn').on('click', function () {
        console.log('2222222');
        //收索框消失
        $('.row').css({
            "display": "none"
        })

        //获取输入框的内容
        var keywords = $(".form-control").val();
        console.log("keywords======>" + keywords)

        //加载数据
        LoadPages(`relatedArticleList/${keywords}`, "allInfo")

        //清空文本框
        $(".form-control").val('')
        return false;
    })


    //其他页面跳转过来时的收索功能
    if (window.location.search.split("=")[0].slice(1) == "keywords") {
        var keywords = window.location.search.split("=")[1];
        LoadPages(`relatedArticleList/${keywords}`, "allInfo");
    }


    // //720px以下(手机端) 关于博客的跳转事件
    // $("#aboutBlogIndexHtml").on("click", function () {
    //     window.location.href = './blogDesc'
    // })


});