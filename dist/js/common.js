define(["jquery", "template"], function ($, template) {

    //770px以下 点击分类按钮 分类出来
    var flag = false;
    $(".icon-fenlei").on('click', function () {
        $(".total1").css("transform", "translate(0)")
        document.body.style.position = 'fixed';
        flag = true;
        console.log(flag);
        if (flag) {
            console.log('2222');
            $(".total1").on('click', function () {
                console.log('11111');
                $(".total1").css("transform", "translate(-40vw)");
                document.body.style.position = 'initial';
            })
        }
        return false;
    })


    //发起请求就让小球显示
    $(document).ajaxStart(function () {
        $(".ball").css({
            "display": "block"
        });
    })


    $(document).ajaxStop(function () {
        $(".ball").css({
            "display": "none"
        });
    })


    //最近更新
    $.ajax({
        url: "api/recentlyList",
        type: "get",
        success: function (data) {
            var html = template("recentlyTpl", data);
            // console.log(html);
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
            var html = template("wonderfulTpl", data);
            // console.log(data);
            // console.log(html);
            $("#wonderfulComments").html(html);
        }
    })
});