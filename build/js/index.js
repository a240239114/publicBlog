define(["jquery","template", "pagination"], function ($, template, pagination) {

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

    //获取主页?的参数
    var type = decodeURIComponent(window.location.search).slice(1);
    // console.log(type);

    //添加跳转事件
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
    function LoadPages(where,whereInfo){
        //默认显示第一页
        $.ajax({
            url: "api/"+where+"/1",
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
                        url: "api/"+where+"/" + index,
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

    if (type == "首页") {
        LoadPages('allList','allInfo');
    } else if (type == "前端特效") {
        LoadPages('texiaoList','texiaoInfo');
    } else if (type == "H5C3") {
        LoadPages('h5c3List','h5c3Info');
    } else if (type == "JS教程") {
        LoadPages('jsList');
    } else if (type == "Vue-cli") {
        LoadPages('vueCliList','vueCliInfo');
    } else if (type == "ES6") {
        LoadPages('es6List','es6Info');
    } else if (type == "BUG") {
        LoadPages('bugList','bugInfo');
    }


    //770以下的适配
    var flag = false;
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