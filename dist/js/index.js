define(["jquery","template","pagination"],function(i,e,o){function c(t){i(".knowledgeList>li").each(function(o,n){i(n).on("click",function(){console.log(i(this).attr("data-id"));var o=t,n=i(this).attr("data-id");window.location.href="blogListInfo?"+n+"&"+o})}),i(".knowledgeList>li img").toArray().forEach(function(o){i(o).on("click",function(){console.log(i(this).attr("data-id"));var o=t,n=i(this).attr("data-id");window.location.href="blogListInfo?"+n+"&"+o})}),i(".knowledgeList>li a").toArray().forEach(function(o){i(o).on("click",function(){console.log(i(this).attr("data-id"));var o=t,n=i(this).attr("data-id");window.location.href="blogListInfo?"+n+"&"+o})})}function a(t,a){i.ajax({url:"api/"+t+"/1",type:"get",success:function(o){var n=e("paginnationTpl",{data:o.data});i(".knowledgeList").html(n)}}).done(function(){c(a)}),i(".M-box3").pagination({current:0,mode:"fixed",count:5,pageCount:50,jump:!0,coping:!0,homePage:"首页",endPage:"末页",prevContent:"上页",nextContent:"下页",callback:function(o){var n=o.getCurrent();i.ajax({url:"api/"+t+"/"+n,type:"get",success:function(o){console.log(o.data);var n=e("paginnationTpl",{data:o.data});i(".knowledgeList").html(n)}}).done(function(){c(a)})}})}i(document).ajaxStart(function(){i(".wrap").show()}),i(document).ajaxStop(function(){i(".wrap").hide(),i(".knowledgeList li").animate({"margin-bottom":"20px",opacity:1},3e3)}),a("allList"),i(".navigation a").each(function(o,t){i(t).on("click",function(){var o=i(t).attr("data-where"),n=i(t).attr("data-whereinfo");console.log(n),console.log(o),i(".screen").css("transform","translate(-50%)"),a(o,n)})}),i(".bewater").on("click",function(){console.log("11111"),i(".screen").css("transform","translate(-50%)")}),window.location.search&&(i(".screen").css({transform:"translate(-50%)"}),a(decodeURIComponent(window.location.search).slice(1,8),decodeURIComponent(window.location.search).slice(9,16)));var n=!1;i(".icon-fenlei").on("click",function(){return i(".youxiao").css("transform","translate(0)"),n=!0,console.log(n),n&&(console.log("2222"),i(".youxiao").on("click",function(){console.log("11111"),i(".youxiao").css("transform","translate(-40vw)")})),!1})});