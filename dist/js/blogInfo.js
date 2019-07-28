define([
    'jquery',
    'template'
], function ($,template) {
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
    });

    var id = window.location.search.match(/\d+/g)[0];
    var whereInfo = window.location.search.match(/&.*/g)[0].slice(1);
    console.log(id,whereInfo);

    //获取数据
    $.ajax({
        url:"api/"+whereInfo+"/"+id,
        type:"get",
        success:function(res){
           console.log(res.data); 
           var html = template("ListInfoTpl",res.data[0])
           $(".left1").html(html);
        }
    })
});