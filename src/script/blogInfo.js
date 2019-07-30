define([
    'jquery',
    'template'
], function ($, template) {
    var id = window.location.search.match(/\d+/g)[0];
    var whereInfo = window.location.search.match(/&.*/g)[0].slice(1);
    var where = window.location.search.match(/&.*/g)[0].slice(1, 4);
    // console.log(id, whereInfo);
    if(whereInfo == undefined){
        whereInfo == "allInfo"
    }
    console.log(id);

    //获取数据
    $.ajax({
        url: "api/" + whereInfo + "/" + id,
        type: "get",
        success: function (res) {}
    }).done(function (res) {
        console.log(res.data)
        var keywords = res.data.keywords;

        //获取相关文章 
        $.ajax({
            url: "api/relatedArticleList/" + keywords,
            // url:"api/relatedArticleList/111",
            type: "get",
            success: function (data1) {
                var relatedArticleList = data1.data;
                // console.log(relatedArticleList);
                res.data.relatedArticleList = relatedArticleList;
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
                console.log(res.data);

                var html = template("ListInfoTpl", res.data)
                $(".left1").html(html);
            }
        }).done(function () {
            //提交评论
            $("#button").on("click", function () {

                console.log(where);
                console.log($("#comments").serialize());
                $.ajax({
                    url: "api/" + where + "Comments",
                    type: "post",
                    data:$("#comments").serialize(),
                    success: function (res) {
                        console.log(res);
                        window.location.reload();
                    }
                })


                console.log("提交事件");
            })

 
        })

    })

});