define(["jquery","pagination"],function(n,i){n(".M-box3").pagination({pageCount:5,jump:!0,showData:5,coping:!0,mode:"fixed",count:4,homePage:"首页",endPage:"末页",prevContent:"上页",nextContent:"下页",callback:function(n){}}),n(".total").on("click",function(){n(".aside").animate({width:0},2,"linear",function(){}),n(".total").animate({width:"100vw"},2,"linear")}),n(".icon-fenlei").on("click",function(){return n(".aside").animate({width:"40vw"},2,"linear"),n(".total").animate({width:"140vw"},2,"linear"),!1})});