define([
    'jquery',
    'template',
    'prism'
], function ($, template) {//test
    var id = window.location.search.match(/\d+/g)[0];
    var whereInfo = window.location.search.match(/&.*/g)[0].slice(1);
    var where = window.location.search.match(/&.*/g)[0].split("I")[0].slice(1);
    console.log("id=====>"+id);
    console.log("whereInfo=====>"+whereInfo);
    console.log("where=====>"+where)

    var viewWidth = $(window).width();
    if(viewWidth>1200){
        $(".blogListMain").css({"width":"1420px"})
    }


    if (whereInfo == undefined) {
        whereInfo == "allInfo"
    }
    // console.log(id);

    //获取数据
    function LoadPages(whereInfo, id) {

        $.ajax({
            url: "api/" + whereInfo + "/" + id,
            type: "get",
            success: function (res) {}
        }).done(function (res) {
            // console.log(res.data)
            var keywords = res.data.keywords;

            //获取相关文章 
            $.ajax({
                url: "api/relatedArticleList/" + keywords,
                // url:"api/relatedArticleList/111",
                type: "get",
                success: function (data1) {
                    var relatedArticleList = data1.data;
                    res.data.relatedArticleList = relatedArticleList;
                    console.log("relatedArticleList======>" + res.data);
                }
            })

            //获取评论 
            $.ajax({
                url: "api/" + where + "Comments",
                type: "get",
                data: $(this).serialize(),
                success: function (result) {
                    var comments = result.data;
                    res.data.comments = comments;
                    res.data.commentsNum = comments.length;
                    console.log(res.data);

                    var html = template("ListInfoTpl", res.data)
                    $(".left1").html(html);
                    // console.log(Prism);
                    Prism.highlightAll();


                    //上一篇文章的点击事件
                    $("#lastArticle").on("click", function () {
                        console.log("上一篇文章")
                        var lastId = $(this).attr("data-id");
                        console.log("data-id=====>" + lastId);
                        LoadPages(whereInfo, lastId);
                    })


                    //相关文章的点击事件
                    $(".relatedArticles>.article li").map(function (index, item) {
                        // console.log(index, item);

                        $(item).on("click", function () {
                            // console.log("上一篇文章")
                            var lastId = $(this).attr("data-id");
                            console.log("data-id=====>" + lastId);
                            LoadPages(whereInfo, lastId);
                        })

                    })
                }
            }).done(function () {

                $(".left1 p").css({"margin-bottom":"0px"});
                $(".step").css({"margin-top":"20px"});

                //提交评论
                $("#button").on("click", function () {

                    console.log(where);
                    console.log($("#comments").serialize());
                    if(!($("#comments").serialize().length == parseInt(27))){
                        $.ajax({
                            url: "api/" + where + "Comments",
                            type: "post",
                            data: $("#comments").serialize(),
                            success: function (res) {
                                console.log(res);
                                window.location.reload();
                            }
                        })
                    } else{
                        alert("评论不能为空")
                    }




                    console.log("提交事件");
                })

            })

        })
    }


    LoadPages(whereInfo, id);




});