define([
    "jquery",
    'validate',
    'jqueryform'
], function ($, validate, jqueryform) {
    var posturl = '192.168.31.93:8000';

    var infoAndListSubmitAll = true;

    //提交数据
    async function submitData(where) {



        $(".listSubmit #keywords").blur(function () {
            var val = $(this).val();
            console.log(val);

            $(".infoSubmit #keywords").val(`${val}`);
        });


        $(".listSubmit #tittle").blur(function () {
            var val = $(this).val();
            console.log(val);

            $(".infoSubmit #tittle").val(`${val}`);
        });


        $(".listSubmit #date").blur(function () {
            var val = $(this).val();
            console.log(val);

            $(".infoSubmit #date").val(`${val}`);
        });


        $(".listSubmit #content").blur(function () {
            var val = $(this).val();
            console.log(val);

            $(".infoSubmit #content").val(`${val}`);
        });




        var ListCount = await $.ajax({
            url: `/api/${where}List/count/count`,
            type: "get"
        });
        ListCount = ListCount.data;


        var InfoCount = await $.ajax({
            url: `/api/${where}Info/count/count`,
            type: "get"
        });
        InfoCount = InfoCount.data;



        //listSubmit
        $("form.listSubmit").validate({
            submitHandler: function (form) { //表单验证插件,已经禁止默认刷新事件
                console.log("提交前")
                console.log(ListCount == InfoCount)
                console.log(ListCount - 1 == InfoCount)

                if (ListCount == InfoCount) {
                    // ListCount++;
                    var counts = 0;
                    infoAndListSubmitAll = false;
                    // console.log("infoAndListSubmitAll=====>" + infoAndListSubmitAll);

                    function submitUserInfo() {
                        if (counts >= 1) return;
                        var data = $("form.listSubmit").serialize();
                        var whereData = data + "&where=" + where;
                        //   console.log(whereData);

                        $.ajax({ //提交到allList
                            url: "/api/allList",
                            type: "POST",
                            data: whereData,
                            beforeSend: function () {
                                // 解绑事件,用户再次点击就不会对用户的操作有任何反应
                                // $("#listSubmit").off("click");
                                // alert("数据已经提交，请耐心等待");
                            },
                            success: function (res) {

                                ListCount++;
                                console.log("ListCount in ajax=========>" + ListCount)

                                $("form.listSubmit input[type='text']").val("");
                                $("form.listSubmit textarea").val("");

                                $("#listSubmit").off("click");

                                console.log(ListCount == InfoCount)
                                console.log(ListCount - 1 == InfoCount)

                                // alert(res.msg);
                                // window.location.href = "/blogNotes?首页";
                                // 再次绑定事件，上一次数据提交到服务器后，用户可以再次提交数据
                                // $("#listSubmit").bind("click", submitUserInfo);
                                // counts = counts + 1;
                                //清除内容
                                // $('form.listSubmit')[0].reset();
                                // window.location.reload();  
                            }
                        })



                        $.ajax({ //提交到whereList
                            url: "/api/" + where + 'List',
                            type: "POST",
                            data: data,
                            beforeSend: function () {
                                // 解绑事件,用户再次点击就不会对用户的操作有任何反应
                                // $("#listSubmit").off("click");
                                // alert("数据已经提交，请耐心等待");
                            },
                            success: function (res) {
                                // alert(res.msg);
                                // window.location.href = "/blogNotes?首页";
                                // 再次绑定事件，上一次数据提交到服务器后，用户可以再次提交数据
                                // $("#listSubmit").bind("click", submitUserInfo);
                                // counts = counts + 1;
                                //清除内容
                                // $('form.listSubmit')[0].reset();
                                // window.location.reload();  
                                $("form.listSubmit input[type='text']").val("");
                                $("form.listSubmit textarea").val("");
                            }
                        })
                    }

                    //提交按钮绑定submitUserInfo
                    $("#listSubmit").bind("click", submitUserInfo);
                } else {
                    alert("请先填写完成上一个详情")
                }
            },
            rules: {
                keywords: {
                    required: true,
                    minlength: 2
                },
                showImg: {
                    required: true,
                    url: true
                },
                tittle: {
                    required: true,
                    minlength: 5
                },
                content: {
                    required: true,
                    minlength: 10
                },
                date: {
                    required: true,
                    date: true
                },

                temperature: {
                    required: true,
                    number: true
                },
                surport: {
                    required: true
                },
            },
            messages: {
                keywords: {
                    required: "请输入keywords",
                    minlength: "关键字必需由两个字母组成"
                },
                showImg: {
                    required: "请输入showImg",
                    url: "请输入正确的图片地址"
                },
                tittle: {
                    required: "请输入tittle",
                    minlength: "标题必需由五个字符组成"
                },
                content: {
                    required: "请输入content",
                    minlength: "描述内容必需由十个字符组成"
                },
                date: {
                    required: "请输入date",
                    date: "请输入正确的日期格式"
                },
                temperature: {
                    required: "请输入temperature",
                    number: "请输入数字"
                },
                surport: {
                    required: "请输入点赞数量哦"
                }
            }
        });

        //infoSubmit
        $("form.infoSubmit").validate({
            submitHandler: function (form) {
                if ($("form.step1").serialize().length != 51 && $("form.infoSubmit").serialize().length != 41 && ListCount - 1 == InfoCount) { //先判断step1和提交详情的内容都不是空

                    // infoAndListSubmitAll = true;
                    // console.log("infoAndListSubmitAll=====>" + infoAndListSubmitAll);

                    //序列化函数返回新数据
                    function transData(data) {
                        var newData = trans.serialize(data);
                        return newData;
                    }

                    //定义把数组变成对象的序列化函数
                    var trans = {
                        serialize: function (obj) {
                            var o = {};
                            $.each(obj, function () {
                                if (o[this.name]) {
                                    if (!o[this.name].push) {
                                        o[this.name] = [o[this.name]];
                                    }
                                    o[this.name].push(this.value || "");
                                } else {
                                    o[this.name] = this.value || "";
                                }
                            });
                            return o;
                        }
                    }

                    var steps = [];
                    //把step整合到steps中
                    $(".steps .form-horizontal").each(function (i, item) {
                        // console.log(item);
                        if ($(item).serialize().length == 51) return
                        console.log(" $(item).serialize()=======>" + $(item).serializeArray());
                        //把序列化后的step存放在steps数组中
                        steps.push(transData($(item).serializeArray()));
                    })
                    // console.log(steps);

                    var counts = 0;
                    // console.log('111111111111111111');
                    function submitUserInfo() {
                        if (counts >= 1) return;
                        //序列化详情提交
                        var Data = transData($("form.infoSubmit").serializeArray());
                        //添加steps属性
                        Data.steps = steps;
                        console.log(Data);
                        var whereData = Data;
                        whereData.where = where;
                        console.log(whereData);

                        $.ajax({ //提交到allInfo
                            url: "/api/allInfo",
                            type: "POST",
                            data: whereData,
                            beforeSend: function () {
                                // 解绑事件,用户再次点击就不会对用户的操作有任何反应
                                // $("#infoSubmit").off("click");
                                // alert("数据已经提交，请耐心等待");
                            },
                            success: function (res) {
                                InfoCount++;
                                console.log("InfoCount in allInfo ajax=======>"+InfoCount)

                                console.log(ListCount == InfoCount)
                                console.log(ListCount - 1 == InfoCount)
                                // alert(res.msg);
                                // window.location.href = "/blogNotes?首页";
                                // 再次绑定事件，上一次数据提交到服务器后，用户可以再次提交数据
                                // $("#infoSubmit").bind("click", submitUserInfo);
                                // counts = counts + 1;
                                //清除内容
                                $('form.infoSubmit')[0].reset();
                                $(".steps .step1")[0].reset();
                                $(".steps .step2")[0].reset();
                                $(".steps .step3")[0].reset();
                                $(".steps .step4")[0].reset();
                                $(".steps .step5")[0].reset();
                                // window.location.reload();  
                                $("form.infoSubmit input[type='text']").val("").focus();
                                $("form.listSubmit textarea").val("");


                                $("#infoSubmit").off("click");
                            },
                            error: function () {
                                // console.log(steps);
                                console.log("allInfo失败")
                            }
                        })



                        $.ajax({ //提交到where
                            url: "/api/" + where + "Info",
                            type: "POST",
                            data: Data,
                            beforeSend: function () {
                                // 解绑事件,用户再次点击就不会对用户的操作有任何反应
                                // $("#infoSubmit").off("click");
                            },
                            success: function (res) {
                                // alert(res.msg);
                                // window.location.href = "/blogNotes?首页";
                                // 再次绑定事件，上一次数据提交到服务器后，用户可以再次提交数据
                                // $("#infoSubmit").bind("click", submitUserInfo);
                                // counts = counts + 1;
                                //清除内容
                                $('form.infoSubmit')[0].reset();
                                $(".steps .step1")[0].reset();
                                $(".steps .step2")[0].reset();
                                $(".steps .step3")[0].reset();
                                $(".steps .step4")[0].reset();
                                $(".steps .step5")[0].reset();
                                $("form.infoSubmit input[type='text']").val("").focus();
                                $("form.listSubmit textarea").val("");



                                $("#infoSubmit").off("click");
                                window.location.reload();
                            },
                            error: function () {
                                // console.log(steps);
                                console.log("whereInfo失败")
                            }
                        })



                    }

                    $("#infoSubmit").bind("click", submitUserInfo);

                } else { //step1为空
                    alert("您step1或者上一个List没有填写哦");
                }
            },
            rules: {
                keywords: {
                    required: true,
                    minlength: 2
                },
                tittle: {
                    required: true,
                    minlength: 5
                },
                date: {
                    required: true,
                    date: true
                },
                looked: {
                    required: true,
                    number: true
                }
            },
            messages: {
                keywords: {
                    required: "请输入keywords",
                    minlength: "关键字必需由两个字母组成"
                },
                tittle: {
                    required: "请输入tittle",
                    minlength: "标题必需由五个字符组成"
                },
                date: {
                    required: "请输入date",
                    date: "请输入正确的日期格式"
                },
                looked: {
                    required: "请输入浏览量",
                    number: "请输入数字"
                }
            }
        });

        //step1Submit表单提交
        $("form.step1").validate({
            submitHandler: function () {

                //点击按钮ul想左边移动
                $(".form-horizontal button:contains('下一步')").toArray().forEach(function (item, i) {
                    $(item).on("click", function () {
                        // console.log("下一步");
                        var viewW = $(".left3").width();
                        var distance = -(i + 1) * viewW;
                        if (distance < -4 * viewW) {
                            $(".steps").css("transform", "translate(0)");
                        } else {
                            $(".steps").css("transform", "translate(" + distance + "px)");
                        }
                        return false;
                    })
                });

                //点击下一步移除绑定事件
                $(".form-horizontal button:contains('下一步')").click(function () {
                    $(".form-horizontal button:contains('下一步')").unbind();
                })

            },
            rules: {
                step: {
                    required: true,
                    number: true
                },
                tittle: {
                    required: true,
                    minlength: 5
                },
                descTop: {
                    minlength: 2
                },
                img: {
                    required: true,
                    url: true
                },
                wordpress: {
                    minlength: 20
                },
                descBottom: {
                    minlength: 2
                }
            },
            messages: {
                step: {
                    required: "请输入步骤数字",
                    number: "请输入数字"
                },
                tittle: {
                    required: "请输入tittle",
                    minlength: "标题必需由五个字符组成"
                },
                descTop: {
                    minlength: "关键字必需由两个字母组成"
                },
                img: {
                    required: "请输入img",
                    url: "请输入正确的图片地址"
                },
                wordpress: {
                    minlength: "关键字必需由两个字母组成"
                },
                descBottom: {
                    minlength: "关键字必需由两个字母组成"
                }
            }
        });

        //step2Submit表单提交
        $("form.step2").validate({
            submitHandler: function () {
                //点击按钮ul想左边移动
                $(".form-horizontal button:contains('下一步')").toArray().forEach(function (item, i) {
                    $(item).on("click", function () {
                        var viewW = $(".left3").width();
                        var distance = -(i + 1) * viewW;
                        if (distance < -4 * viewW) {
                            $(".steps").css("transform", "translate(0)");
                        } else {
                            $(".steps").css("transform", "translate(" + distance + "px)");
                        }
                        return false;
                    })
                });

                //点击下一步移除绑定事件
                $(".form-horizontal button:contains('下一步')").click(function () {
                    $(".form-horizontal button:contains('下一步')").unbind();
                })
            },
            rules: {
                step: {
                    required: true,
                    number: true
                },
                tittle: {
                    minlength: 5
                },
                descTop: {
                    minlength: 2
                },
                img: {
                    url: true
                },
                wordpress: {
                    minlength: 20
                },
                descBottom: {
                    minlength: 2
                }
            },
            messages: {
                step: {
                    required: "请输入步骤",
                    number: "请输入数字"
                },
                tittle: {
                    minlength: "标题必需由五个字符组成"
                },
                descTop: {
                    minlength: "关键字必需由两个字母组成"
                },
                img: {
                    url: "请输入正确的图片地址"
                },
                wordpress: {
                    minlength: "关键字必需由两个字母组成"
                },
                descBottom: {
                    minlength: "关键字必需由两个字母组成"
                }
            }
        });

        //step3Submit表单提交
        $("form.step3").validate({
            submitHandler: function () {
                //点击按钮ul想左边移动
                $(".form-horizontal button:contains('下一步')").toArray().forEach(function (item, i) {
                    $(item).on("click", function () {
                        var viewW = $(".left3").width();
                        // console.log(viewW);
                        // console.log(i);
                        var distance = -(i + 1) * viewW;
                        // console.log(distance);
                        if (distance < -4 * viewW) {
                            $(".steps").css("transform", "translate(0)");
                        } else {
                            $(".steps").css("transform", "translate(" + distance + "px)");
                        }

                        // $('#main_nei').css("transform", "translate(0px,"+Height+")");
                        return false;
                    })
                });

                //点击下一步移除绑定事件
                $(".form-horizontal button:contains('下一步')").click(function () {
                    $(".form-horizontal button:contains('下一步')").unbind();
                })
            },
            rules: {
                step: {
                    number: true
                },
                tittle: {
                    minlength: 5
                },
                descTop: {
                    minlength: 2
                },
                img: {
                    url: true
                },
                wordpress: {
                    minlength: 20
                },
                descBottom: {
                    minlength: 2
                }
            },
            messages: {
                step: {
                    number: "请输入数字"
                },
                tittle: {
                    minlength: "标题必需由五个字符组成"
                },
                descTop: {
                    minlength: "关键字必需由两个字母组成"
                },
                img: {
                    url: "请输入正确的图片地址"
                },
                wordpress: {
                    minlength: "关键字必需由两个字母组成"
                },
                descBottom: {
                    minlength: "关键字必需由两个字母组成"
                }
            }
        });

        //step4Submit表单提交
        $("form.step4").validate({
            submitHandler: function () {
                //点击按钮ul想左边移动
                $(".form-horizontal button:contains('下一步')").toArray().forEach(function (item, i) {
                    $(item).on("click", function () {
                        var viewW = $(".left3").width();
                        // console.log(viewW);
                        // console.log(i);
                        var distance = -(i + 1) * viewW;
                        // console.log(distance);
                        if (distance < -4 * viewW) {
                            $(".steps").css("transform", "translate(0)");
                        } else {
                            $(".steps").css("transform", "translate(" + distance + "px)");
                        }

                        // $('#main_nei').css("transform", "translate(0px,"+Height+")");
                        return false;
                    })
                });


                //点击下一步移除绑定事件
                $(".form-horizontal button:contains('下一步')").click(function () {
                    $(".form-horizontal button:contains('下一步')").unbind();
                })
            },
            rules: {
                step: {
                    number: true
                },
                tittle: {
                    minlength: 5
                },
                descTop: {
                    minlength: 2
                },
                img: {
                    url: true
                },
                wordpress: {
                    minlength: 20
                },
                descBottom: {
                    minlength: 2
                }
            },
            messages: {
                step: {
                    number: "请输入数字"
                },
                tittle: {
                    minlength: "标题必需由五个字符组成"
                },
                descTop: {
                    minlength: "关键字必需由两个字母组成"
                },
                img: {
                    url: "请输入正确的图片地址"
                },
                wordpress: {
                    minlength: "关键字必需由两个字母组成"
                },
                descBottom: {
                    minlength: "关键字必需由两个字母组成"
                }
            }
        });

        //step5Submit表单提交
        $("form.step5").validate({
            submitHandler: function () {
                //点击按钮ul想左边移动
                $(".form-horizontal button:contains('下一步')").toArray().forEach(function (item, i) {
                    $(item).on("click", function () {
                        var viewW = $(".left3").width();
                        // console.log(viewW);
                        // console.log(i);
                        var distance = -(i + 1) * viewW;
                        // console.log(distance);
                        if (distance < -4 * viewW) {
                            $(".steps").css("transform", "translate(0)");
                        } else {
                            $(".steps").css("transform", "translate(" + distance + "px)");
                        }

                        // $('#main_nei').css("transform", "translate(0px,"+Height+")");
                        return false;
                    })
                });


                //点击下一步移除绑定事件
                $(".form-horizontal button:contains('下一步')").click(function () {
                    $(".form-horizontal button:contains('下一步')").unbind();
                })
            },
            rules: {
                step: {
                    number: true
                },
                tittle: {
                    minlength: 5
                },
                descTop: {
                    minlength: 2
                },
                img: {
                    url: true
                },
                wordpress: {
                    minlength: 20
                },
                descBottom: {
                    minlength: 2
                }
            },
            messages: {
                step: {
                    number: "请输入数字"
                },
                tittle: {
                    minlength: "标题必需由五个字符组成"
                },
                descTop: {
                    minlength: "关键字必需由两个字母组成"
                },
                img: {
                    url: "请输入正确的图片地址"
                },
                wordpress: {
                    minlength: "关键字必需由两个字母组成"
                },
                descBottom: {
                    minlength: "关键字必需由两个字母组成"
                }
            }
        });
    }

    //770-1200的适配
    //1200以上的适配

    //处理提交事件
    // 编码函数： encodeURIComponent()
    // 解码函数： decodeURIComponent()

    var type = decodeURIComponent(window.location.search).slice(1);
    if (type == "前端特效") {
        submitData('texiao');
    } else if (type == "H5C3") {
        submitData('H5C3');
    } else if (type == "JS教程") {
        submitData('js');
    } else if (type == "Vue-cli") {
        submitData('vueCli');
    } else if (type == "ES6") {
        submitData('es6');
    } else if (type == "BUG") {
        submitData('bug');
    } else { //回到主页
        window.location.href = "./index";
    }

});