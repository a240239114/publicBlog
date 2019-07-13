define([
    'jquery',
    'validate',
    'jqueryform'
], function ($, validate, jqueryform) {
    var posturl = '192.168.31.93:8000';
    //表单验证
    function submitValidate() {
        //infoSubmit表单验证
        $("form.listSubmit").validate({
            submitHandler: function () {

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


        //infoSubmit表单提交
        $("form.infoSubmit").validate({
            submitHandler: function () {

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

        var flag = false;

        //step1Submit表单提交
        $("form.step1").validate({
            submitHandler: function () {

                //点击按钮ul想左边移动
                $(".form-horizontal button:contains('下一步')").toArray().forEach(function (item, i) {
                    $(item).on("click", function () {
                        var viewW = $(".left3").width();
                        // console.log(viewW);
                        // console.log(i);
                        var distance = -(i + 1) * viewW;
                        console.log(distance);
                        if (distance < -viewW*4) {
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
                        if (distance < -viewW*4) {
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
                        if (distance < -viewW*4) {
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
                        if (distance < -viewW*4) {
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
                        if (distance < -viewW*4) {
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
    if (type == "首页") {

        //listSubmit
        $("form.listSubmit").validate({
            submitHandler: function (form) {
                var counts = 0;

                function submitUserInfo() {
                    if (counts >= 1) return;
                    $.ajax({
                        url: "/api/allList",
                        type: "POST",
                        data: $("form.listSubmit").serialize(),
                        beforeSend: function () {
                            // 解绑事件,用户再次点击就不会对用户的操作有任何反应
                            $("#listSubmit").off("click");
                            alert("数据已经提交，请耐心等待");
                        },
                        success: function (res) {
                            alert(res.msg);
                            // window.location.href = "/blogNotes?首页";
                            // 再次绑定事件，上一次数据提交到服务器后，用户可以再次提交数据
                            $("#listSubmit").bind("click", submitUserInfo);
                            counts = counts + 1;
                            //清除内容
                            // $('form.listSubmit')[0].reset();
                            // window.location.reload();  
                            $("form.listSubmit input[type='text']").val("").focus();
                        }
                    })
                }

                $("#listSubmit").bind("click", submitUserInfo);
                // return false;

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
                var counts = 0;

                function submitUserInfo() {
                    if (counts >= 1) return;
                    $.ajax({
                        url: "/api/allInfo",
                        type: "POST",
                        data: $("form.infoSubmit").serialize(),
                        beforeSend: function () {
                            // 解绑事件,用户再次点击就不会对用户的操作有任何反应
                            $("#infoSubmit").off("click");
                            alert("数据已经提交，请耐心等待");
                        },
                        success: function (res) {
                            alert(res.msg);
                            // window.location.href = "/blogNotes?首页";
                            // 再次绑定事件，上一次数据提交到服务器后，用户可以再次提交数据
                            $("#infoSubmit").bind("click", submitUserInfo);
                            counts = counts + 1;
                            //清除内容
                            // $('form.infoSubmit')[0].reset();
                            // window.location.reload();  
                            $("form.infoSubmit input[type='text']").val("").focus();
                        }
                    })
                }

                $("#infoSubmit").bind("click", submitUserInfo);
                // return false;

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
                        var viewW = $(".left3").width();
                        // console.log(viewW);
                        // console.log(i);
                        var distance = -(i + 1) * viewW;
                        // console.log(distance);
                        if (distance < -4*viewW) {
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
                        if (distance < -4*viewW) {
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
                        if (distance < -4*viewW) {
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
                        if (distance < -4*viewW) {
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
                        if (distance < -4*viewW) {
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




    } else if (type == "前端特效") {} else if (type == "H5C3") {} else if (type == "JS教程") {} else if (type == "Vue-cli") {} else if (type == "ES6") {} else if (type == "BUG") {} else { //回到主页
    }

});