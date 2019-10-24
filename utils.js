// 发送验证码倒计时  --> send_msg()


// 验证码倒计时  click_ele:点击的按钮(jquery对象) , click_class:点击后的类名  
function send_msg(click_ele, click_class) {
    var second = 6;
    click_ele.on("click", get_code);

    function get_code(event) {
        click_ele.unbind("click");
        click_ele.hasClass(click_class) ? '' : click_ele.addClass(click_class);
        click_ele.text("已发送(" + second-- + ")")
        var interval_sign = setInterval(function () {
            if (second < 0) {
                click_ele.text("获取验证码");
                click_ele.removeClass(click_class);
                clearInterval(interval_sign);
                second = 6;
                click_ele.on("click", get_code);
            } else {
                // console.log($(".get_code").hasClass(click_class));
                // click_ele.hasClass(click_class) ? '' : click_ele.addClass(click_class);
                click_ele.text("已发送(" + second-- + ")");
            }
        }, 1000)
    }
}