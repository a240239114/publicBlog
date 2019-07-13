define([
    'jquery',
    'validate'
], function ($, validate) {
    //listSubmit表单验证
    $("form.listSubmit").validate({
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
                required: "请输入keywords"
            }
        }
    });


    //infoSubmit表单提交
    $("form.infoSubmit").validate({
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
                    // console.log(distance);
                    if (distance < -3360) {
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
                    if (distance < -3360) {
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
                    if (distance < -3360) {
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
                    if (distance < -3360) {
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
                    if (distance < -3360) {
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


















    //770-1200的适配
    //1200以上的适配

    //处理提交事件
    // 编码函数： encodeURIComponent()
    // 解码函数： decodeURIComponent()

    var type = decodeURIComponent(window.location.search).slice(1);
    if (type == "首页") {
        //提交到allList









        //提交到详情











    } else if (type == "前端特效") {

    } else if (type == "H5C3") {

    } else if (type == "JS教程") {

    } else if (type == "Vue-cli") {

    } else if (type == "ES6") {

    } else if (type == "BUG") {

    } else { //回到主页

    }

});