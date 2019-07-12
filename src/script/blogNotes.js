define([
    'jquery'
], function($) {

    //点击按钮ul想左边移动
    $(".form-horizontal button:contains('下一步')").toArray().forEach(function(item, i) {
        $(item).on("click", function() {
            var viewW = $(".left3").width();
            console.log(viewW);
            // console.log(i);
            var distance = -(i + 1) * viewW;
            console.log(distance);
            if (distance < -3360) {
                $(".steps").css("transform", "translate(0)");
            } else {
                $(".steps").css("transform", "translate(" + distance + "px)");
            }

            // $('#main_nei').css("transform", "translate(0px,"+Height+")");
            return false;
        })
    });

    //770-1200的适配


    //1200以上的适配
});