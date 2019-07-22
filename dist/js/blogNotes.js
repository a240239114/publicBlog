define(["jquery","validate","jqueryform"],function(o,t,e){o(".navigation a").each(function(t,n){o(n).on("click",function(){console.log(o(this).attr("data-where"));var t=o(this).attr("data-where"),e=o(this).attr("data-whereinfo");window.location.href="index?"+t+"&"+e,console.log(n)})}),o(document).ajaxStart(function(){o(".wrap").show()}),o(document).ajaxStop(function(){o(".wrap").hide()});function n(s){o("form.listSubmit").validate({submitHandler:function(t){var n=0;o("#listSubmit").bind("click",function e(){1<=n||(o.ajax({url:"/api/allList",type:"POST",data:o("form.listSubmit").serialize(),beforeSend:function(){o("#listSubmit").off("click"),alert("数据已经提交，请耐心等待")},success:function(t){alert(t.msg),o("#listSubmit").bind("click",e),n+=1,o("form.listSubmit input[type='text']").val("").focus()}}),o.ajax({url:"/api/"+s+"List",type:"POST",data:o("form.listSubmit").serialize(),beforeSend:function(){o("#listSubmit").off("click"),alert("数据已经提交，请耐心等待")},success:function(t){alert(t.msg),o("#listSubmit").bind("click",e),n+=1,o("form.listSubmit input[type='text']").val("").focus()}}))})},rules:{keywords:{required:!0,minlength:2},showImg:{required:!0,url:!0},tittle:{required:!0,minlength:5},content:{required:!0,minlength:10},date:{required:!0,date:!0},temperature:{required:!0,number:!0},surport:{required:!0}},messages:{keywords:{required:"请输入keywords",minlength:"关键字必需由两个字母组成"},showImg:{required:"请输入showImg",url:"请输入正确的图片地址"},tittle:{required:"请输入tittle",minlength:"标题必需由五个字符组成"},content:{required:"请输入content",minlength:"描述内容必需由十个字符组成"},date:{required:"请输入date",date:"请输入正确的日期格式"},temperature:{required:"请输入temperature",number:"请输入数字"},surport:{required:"请输入点赞数量哦"}}}),o("form.infoSubmit").validate({submitHandler:function(t){if(50!=o("form.step1").serialize().length&&31!=o("form.infoSubmit").serialize().length){function n(t){return e.serialize(t)}var e={serialize:function(t){var e={};return o.each(t,function(){e[this.name]?(e[this.name].push||(e[this.name]=[e[this.name]]),e[this.name].push(this.value||"")):e[this.name]=this.value||""}),e}},i=[];o(".steps .form-horizontal").each(function(t,e){50!=o(e).serialize().length&&i.push(n(o(e).serializeArray()))}),console.log(i);var r=0;o("#infoSubmit").bind("click",function e(){if(!(1<=r)){var t=n(o("form.infoSubmit").serializeArray());t.steps=i,console.log(t),o.ajax({url:"/api/allInfo",type:"POST",data:t,beforeSend:function(){o("#infoSubmit").off("click"),alert("数据已经提交，请耐心等待")},success:function(t){alert(t.msg),o("#infoSubmit").bind("click",e),r+=1,o("form.infoSubmit")[0].reset(),o(".steps .step1")[0].reset(),o(".steps .step2")[0].reset(),o(".steps .step3")[0].reset(),o(".steps .step4")[0].reset(),o(".steps .step5")[0].reset(),o("form.infoSubmit input[type='text']").val("").focus()},error:function(){console.log(i)}}),o.ajax({url:"/api/"+s+"Info",type:"POST",data:t,beforeSend:function(){o("#infoSubmit").off("click"),alert("数据已经提交，请耐心等待")},success:function(t){alert(t.msg),o("#infoSubmit").bind("click",e),r+=1,o("form.infoSubmit")[0].reset(),o(".steps .step1")[0].reset(),o(".steps .step2")[0].reset(),o(".steps .step3")[0].reset(),o(".steps .step4")[0].reset(),o(".steps .step5")[0].reset(),o("form.infoSubmit input[type='text']").val("").focus()},error:function(){console.log(i)}})}})}else alert("请填写step1")},rules:{keywords:{required:!0,minlength:2},tittle:{required:!0,minlength:5},date:{required:!0,date:!0},looked:{required:!0,number:!0}},messages:{keywords:{required:"请输入keywords",minlength:"关键字必需由两个字母组成"},tittle:{required:"请输入tittle",minlength:"标题必需由五个字符组成"},date:{required:"请输入date",date:"请输入正确的日期格式"},looked:{required:"请输入浏览量",number:"请输入数字"}}}),o("form.step1").validate({submitHandler:function(){o(".form-horizontal button:contains('下一步')").toArray().forEach(function(t,n){o(t).on("click",function(){var t=o(".left3").width(),e=-(n+1)*t;return e<-4*t?o(".steps").css("transform","translate(0)"):o(".steps").css("transform","translate("+e+"px)"),!1})}),o(".form-horizontal button:contains('下一步')").click(function(){o(".form-horizontal button:contains('下一步')").unbind()})},rules:{step:{required:!0,number:!0},tittle:{required:!0,minlength:5},descTop:{minlength:2},img:{required:!0,url:!0},wordpress:{minlength:20},descBottom:{minlength:2}},messages:{step:{required:"请输入步骤数字",number:"请输入数字"},tittle:{required:"请输入tittle",minlength:"标题必需由五个字符组成"},descTop:{minlength:"关键字必需由两个字母组成"},img:{required:"请输入img",url:"请输入正确的图片地址"},wordpress:{minlength:"关键字必需由两个字母组成"},descBottom:{minlength:"关键字必需由两个字母组成"}}}),o("form.step2").validate({submitHandler:function(){o(".form-horizontal button:contains('下一步')").toArray().forEach(function(t,n){o(t).on("click",function(){var t=o(".left3").width(),e=-(n+1)*t;return e<-4*t?o(".steps").css("transform","translate(0)"):o(".steps").css("transform","translate("+e+"px)"),!1})}),o(".form-horizontal button:contains('下一步')").click(function(){o(".form-horizontal button:contains('下一步')").unbind()})},rules:{step:{required:!0,number:!0},tittle:{minlength:5},descTop:{minlength:2},img:{url:!0},wordpress:{minlength:20},descBottom:{minlength:2}},messages:{step:{required:"请输入步骤",number:"请输入数字"},tittle:{minlength:"标题必需由五个字符组成"},descTop:{minlength:"关键字必需由两个字母组成"},img:{url:"请输入正确的图片地址"},wordpress:{minlength:"关键字必需由两个字母组成"},descBottom:{minlength:"关键字必需由两个字母组成"}}}),o("form.step3").validate({submitHandler:function(){o(".form-horizontal button:contains('下一步')").toArray().forEach(function(t,n){o(t).on("click",function(){var t=o(".left3").width(),e=-(n+1)*t;return e<-4*t?o(".steps").css("transform","translate(0)"):o(".steps").css("transform","translate("+e+"px)"),!1})}),o(".form-horizontal button:contains('下一步')").click(function(){o(".form-horizontal button:contains('下一步')").unbind()})},rules:{step:{number:!0},tittle:{minlength:5},descTop:{minlength:2},img:{url:!0},wordpress:{minlength:20},descBottom:{minlength:2}},messages:{step:{number:"请输入数字"},tittle:{minlength:"标题必需由五个字符组成"},descTop:{minlength:"关键字必需由两个字母组成"},img:{url:"请输入正确的图片地址"},wordpress:{minlength:"关键字必需由两个字母组成"},descBottom:{minlength:"关键字必需由两个字母组成"}}}),o("form.step4").validate({submitHandler:function(){o(".form-horizontal button:contains('下一步')").toArray().forEach(function(t,n){o(t).on("click",function(){var t=o(".left3").width(),e=-(n+1)*t;return e<-4*t?o(".steps").css("transform","translate(0)"):o(".steps").css("transform","translate("+e+"px)"),!1})}),o(".form-horizontal button:contains('下一步')").click(function(){o(".form-horizontal button:contains('下一步')").unbind()})},rules:{step:{number:!0},tittle:{minlength:5},descTop:{minlength:2},img:{url:!0},wordpress:{minlength:20},descBottom:{minlength:2}},messages:{step:{number:"请输入数字"},tittle:{minlength:"标题必需由五个字符组成"},descTop:{minlength:"关键字必需由两个字母组成"},img:{url:"请输入正确的图片地址"},wordpress:{minlength:"关键字必需由两个字母组成"},descBottom:{minlength:"关键字必需由两个字母组成"}}}),o("form.step5").validate({submitHandler:function(){o(".form-horizontal button:contains('下一步')").toArray().forEach(function(t,n){o(t).on("click",function(){var t=o(".left3").width(),e=-(n+1)*t;return e<-4*t?o(".steps").css("transform","translate(0)"):o(".steps").css("transform","translate("+e+"px)"),!1})}),o(".form-horizontal button:contains('下一步')").click(function(){o(".form-horizontal button:contains('下一步')").unbind()})},rules:{step:{number:!0},tittle:{minlength:5},descTop:{minlength:2},img:{url:!0},wordpress:{minlength:20},descBottom:{minlength:2}},messages:{step:{number:"请输入数字"},tittle:{minlength:"标题必需由五个字符组成"},descTop:{minlength:"关键字必需由两个字母组成"},img:{url:"请输入正确的图片地址"},wordpress:{minlength:"关键字必需由两个字母组成"},descBottom:{minlength:"关键字必需由两个字母组成"}}})}var i=decodeURIComponent(window.location.search).slice(1);"首页"==i?(o("form.listSubmit").validate({submitHandler:function(t){var n=0;o("#listSubmit").bind("click",function e(){1<=n||o.ajax({url:"/api/allList",type:"POST",data:o("form.listSubmit").serialize(),beforeSend:function(){o("#listSubmit").off("click"),alert("数据已经提交，请耐心等待")},success:function(t){alert(t.msg),o("#listSubmit").bind("click",e),n+=1,o("form.listSubmit input[type='text']").val("").focus()}})})},rules:{keywords:{required:!0,minlength:2},showImg:{required:!0,url:!0},tittle:{required:!0,minlength:5},content:{required:!0,minlength:10},date:{required:!0,date:!0},temperature:{required:!0,number:!0},surport:{required:!0}},messages:{keywords:{required:"请输入keywords",minlength:"关键字必需由两个字母组成"},showImg:{required:"请输入showImg",url:"请输入正确的图片地址"},tittle:{required:"请输入tittle",minlength:"标题必需由五个字符组成"},content:{required:"请输入content",minlength:"描述内容必需由十个字符组成"},date:{required:"请输入date",date:"请输入正确的日期格式"},temperature:{required:"请输入temperature",number:"请输入数字"},surport:{required:"请输入点赞数量哦"}}}),o("form.infoSubmit").validate({submitHandler:function(t){if(50!=o("form.step1").serialize().length&&31!=o("form.infoSubmit").serialize().length){function n(t){return e.serialize(t)}var e={serialize:function(t){var e={};return o.each(t,function(){e[this.name]?(e[this.name].push||(e[this.name]=[e[this.name]]),e[this.name].push(this.value||"")):e[this.name]=this.value||""}),e}},i=[];o(".steps .form-horizontal").each(function(t,e){50!=o(e).serialize().length&&i.push(n(o(e).serializeArray()))}),console.log(i);var r=0;o("#infoSubmit").bind("click",function e(){if(!(1<=r)){var t=n(o("form.infoSubmit").serializeArray());t.steps=i,console.log(t),o.ajax({url:"/api/allInfo",type:"POST",data:t,beforeSend:function(){o("#infoSubmit").off("click"),alert("数据已经提交，请耐心等待")},success:function(t){alert(t.msg),o("#infoSubmit").bind("click",e),r+=1,o("form.infoSubmit")[0].reset(),o(".steps .step1")[0].reset(),o(".steps .step2")[0].reset(),o(".steps .step3")[0].reset(),o(".steps .step4")[0].reset(),o(".steps .step5")[0].reset(),o("form.infoSubmit input[type='text']").val("").focus()},error:function(){console.log(i)}})}})}else alert("请填写step1")},rules:{keywords:{required:!0,minlength:2},tittle:{required:!0,minlength:5},date:{required:!0,date:!0},looked:{required:!0,number:!0}},messages:{keywords:{required:"请输入keywords",minlength:"关键字必需由两个字母组成"},tittle:{required:"请输入tittle",minlength:"标题必需由五个字符组成"},date:{required:"请输入date",date:"请输入正确的日期格式"},looked:{required:"请输入浏览量",number:"请输入数字"}}}),o("form.step1").validate({submitHandler:function(){o(".form-horizontal button:contains('下一步')").toArray().forEach(function(t,n){o(t).on("click",function(){var t=o(".left3").width(),e=-(n+1)*t;return e<-4*t?o(".steps").css("transform","translate(0)"):o(".steps").css("transform","translate("+e+"px)"),!1})}),o(".form-horizontal button:contains('下一步')").click(function(){o(".form-horizontal button:contains('下一步')").unbind()})},rules:{step:{required:!0,number:!0},tittle:{required:!0,minlength:5},descTop:{minlength:2},img:{required:!0,url:!0},wordpress:{minlength:20},descBottom:{minlength:2}},messages:{step:{required:"请输入步骤数字",number:"请输入数字"},tittle:{required:"请输入tittle",minlength:"标题必需由五个字符组成"},descTop:{minlength:"关键字必需由两个字母组成"},img:{required:"请输入img",url:"请输入正确的图片地址"},wordpress:{minlength:"关键字必需由两个字母组成"},descBottom:{minlength:"关键字必需由两个字母组成"}}}),o("form.step2").validate({submitHandler:function(){o(".form-horizontal button:contains('下一步')").toArray().forEach(function(t,n){o(t).on("click",function(){var t=o(".left3").width(),e=-(n+1)*t;return e<-4*t?o(".steps").css("transform","translate(0)"):o(".steps").css("transform","translate("+e+"px)"),!1})}),o(".form-horizontal button:contains('下一步')").click(function(){o(".form-horizontal button:contains('下一步')").unbind()})},rules:{step:{required:!0,number:!0},tittle:{minlength:5},descTop:{minlength:2},img:{url:!0},wordpress:{minlength:20},descBottom:{minlength:2}},messages:{step:{required:"请输入步骤",number:"请输入数字"},tittle:{minlength:"标题必需由五个字符组成"},descTop:{minlength:"关键字必需由两个字母组成"},img:{url:"请输入正确的图片地址"},wordpress:{minlength:"关键字必需由两个字母组成"},descBottom:{minlength:"关键字必需由两个字母组成"}}}),o("form.step3").validate({submitHandler:function(){o(".form-horizontal button:contains('下一步')").toArray().forEach(function(t,n){o(t).on("click",function(){var t=o(".left3").width(),e=-(n+1)*t;return e<-4*t?o(".steps").css("transform","translate(0)"):o(".steps").css("transform","translate("+e+"px)"),!1})}),o(".form-horizontal button:contains('下一步')").click(function(){o(".form-horizontal button:contains('下一步')").unbind()})},rules:{step:{number:!0},tittle:{minlength:5},descTop:{minlength:2},img:{url:!0},wordpress:{minlength:20},descBottom:{minlength:2}},messages:{step:{number:"请输入数字"},tittle:{minlength:"标题必需由五个字符组成"},descTop:{minlength:"关键字必需由两个字母组成"},img:{url:"请输入正确的图片地址"},wordpress:{minlength:"关键字必需由两个字母组成"},descBottom:{minlength:"关键字必需由两个字母组成"}}}),o("form.step4").validate({submitHandler:function(){o(".form-horizontal button:contains('下一步')").toArray().forEach(function(t,n){o(t).on("click",function(){var t=o(".left3").width(),e=-(n+1)*t;return e<-4*t?o(".steps").css("transform","translate(0)"):o(".steps").css("transform","translate("+e+"px)"),!1})}),o(".form-horizontal button:contains('下一步')").click(function(){o(".form-horizontal button:contains('下一步')").unbind()})},rules:{step:{number:!0},tittle:{minlength:5},descTop:{minlength:2},img:{url:!0},wordpress:{minlength:20},descBottom:{minlength:2}},messages:{step:{number:"请输入数字"},tittle:{minlength:"标题必需由五个字符组成"},descTop:{minlength:"关键字必需由两个字母组成"},img:{url:"请输入正确的图片地址"},wordpress:{minlength:"关键字必需由两个字母组成"},descBottom:{minlength:"关键字必需由两个字母组成"}}}),o("form.step5").validate({submitHandler:function(){o(".form-horizontal button:contains('下一步')").toArray().forEach(function(t,n){o(t).on("click",function(){var t=o(".left3").width(),e=-(n+1)*t;return e<-4*t?o(".steps").css("transform","translate(0)"):o(".steps").css("transform","translate("+e+"px)"),!1})}),o(".form-horizontal button:contains('下一步')").click(function(){o(".form-horizontal button:contains('下一步')").unbind()})},rules:{step:{number:!0},tittle:{minlength:5},descTop:{minlength:2},img:{url:!0},wordpress:{minlength:20},descBottom:{minlength:2}},messages:{step:{number:"请输入数字"},tittle:{minlength:"标题必需由五个字符组成"},descTop:{minlength:"关键字必需由两个字母组成"},img:{url:"请输入正确的图片地址"},wordpress:{minlength:"关键字必需由两个字母组成"},descBottom:{minlength:"关键字必需由两个字母组成"}}})):"前端特效"==i?n("texiao"):"H5C3"==i?n("H5C3"):"JS教程"==i?n("js"):"Vue-cli"==i?n("vueCli"):"ES6"==i?n("es6"):"BUG"==i?n("bug"):window.location.href="./index"});