window.onload = function () {

    //获取首屏高度赋值给外层包裹器
    var firstWrap = document.querySelector(".firstWrap");
    var srcondWrap = document.querySelector(".srcondWrap");
    var thirdWrap = document.querySelector(".thirdWrap");
    firstWrap.style.height = document.documentElement.clientHeight + "px";
    srcondWrap.style.height = document.documentElement.clientHeight + "px";
    thirdWrap.style.height = document.documentElement.clientHeight + "px";
    var lis = document.querySelectorAll(".liWrap>ul>li");
    var answerIndex = "";
    var flag = true;
    //点击不同答案跳转到不同页，并给点击的选项加背景色
    //跳到第二页
    $('body').on('touchstart',
        '.firstLi>dl .secondDd',
        function (e) {
            btnHidden();
            $(e.target).addClass("active");
            setTimeout(function () {
                $(".liWrap>ul>li").removeClass("contentShow");
                $(".liWrap>ul>.secondLi").addClass("contentShow");
            }, 200)
        })
    // 跳到第三页
    $('body').on('touchstart',
        '.firstLi>dl .firstDd, .secondLi>dl .firstDd',
        function (e) {
            btnHidden();
            $(e.target).addClass("active");
            setTimeout(function () {
                $(".liWrap>ul>li").removeClass("contentShow");
                $(".liWrap>ul>.thirdLi").addClass("contentShow");
            }, 200)
        })
    // 跳到第四页
    $('body').on('touchstart',
        '.firstLi>dl .thirdDd, .secondLi>dl .secondDd, .thirdLi>dl .firstDd',
        function (e) {
            btnHidden();
            $(e.target).addClass("active");
            setTimeout(function () {
                $(".liWrap>ul>li").removeClass("contentShow");
                $(".liWrap>ul>.fourthLi").addClass("contentShow");
            }, 200)
        })
    // 跳到第五页
    $('body').on('touchstart',
        '.firstLi>dl .fourthDd, .secondLi>dl .fourthDd, .thirdLi>dl .fourthDd, .fourthLi>dl .firstDd',
        function (e) {
            btnHidden();
            $(e.target).addClass("active");
            setTimeout(function () {
                $(".liWrap>ul>li").removeClass("contentShow");
                $(".liWrap>ul>.fifthLi").addClass("contentShow");
            }, 200)
        })
    // 跳到第六页
    $('body').on('touchstart',
        '.secondLi>dl .thirdDd, .thirdLi>dl .thirdDd, .fourthLi>dl .secondDd, .fifthLi>dl .firstDd',
        function (e) {
            btnHidden();
            $(e.target).addClass("active");
            setTimeout(function () {
                $(".liWrap>ul>li").removeClass("contentShow");
                $(".liWrap>ul>.sixthLi").addClass("contentShow");
            }, 200)
        })
    // 跳到第七页
    $('body').on('touchstart',
        '.thirdLi>dl .secondDd, .fourthLi>dl .thirdDd, .fifthLi>dl .secondDd, .sixthLi>dl .firstDd',
        function (e) {
            btnHidden();
            $(e.target).addClass("active");
            setTimeout(function () {
                $(".liWrap>ul>li").removeClass("contentShow");
                $(".liWrap>ul>.seventhLi").addClass("contentShow");
            }, 200)
        })
    //选中A
    $('body').on('touchstart',
        '.fifthLi>dl .thirdDd, .seventhLi>dl .firstDd',
        function (e) {
            btnShow();
            $(e.target).addClass("active");
            $(".firstWrap .btn").on("touchstart", function () {
                if (flag) {
                    flag = false;
                    setTimeout(function () {
                        fromShow();
                        answerIndex = "A";
                        flag = true;
                    }, 320)
                }
            })
        })
    //选中B
    $('body').on('touchstart',
        '.fourthLi>dl .fourthDd, .fifthLi>dl .fourthDd, .sixthLi>dl .secondDd, .seventhLi>dl .secondDd',
        function (e) {
            btnShow();
            $(e.target).addClass("active");
            $(".firstWrap .btn").on("touchstart", function () {
                if (flag) {
                    flag = false;
                    setTimeout(function () {
                        fromShow();
                        answerIndex = "B";
                        flag = true;
                    }, 320)
                }
            })
        })
    //选中C
    $('body').on('touchstart',
        '.sixthLi>dl .thirdDd, .seventhLi>dl .thirdDd',
        function (e) {
            btnShow();
            $(e.target).addClass("active");
            $(".firstWrap .btn").on("touchstart", function () {
                if (flag) {
                    flag = false;
                    setTimeout(function () {
                        fromShow();
                        answerIndex = "C";
                        flag = true;
                    }, 320)
                }
            })
        })
    //选中D
    $('body').on('touchstart',
        '.sixthLi>dl .fourthDd, .seventhLi>dl .fourthDd',
        function (e) {
            btnShow();
            $(e.target).addClass("active");
            $(".firstWrap .btn").on("touchstart", function () {
                if (flag) {
                    flag = false;
                    setTimeout(function () {
                        fromShow();
                        answerIndex = "D";
                        flag = true;
                    }, 320)
                }
            })
        })

    //清除提交按钮样式
    function btnHidden() {
        $(".firstWrap .btn").css("display", "none");
        $(".liWrap dd").removeClass("active");
    }
    //提交按钮显示，清除选项默认
    function btnShow() {
        $(".liWrap dd").removeClass("active");
        $(".firstWrap .btn").css("display", "block");
    }
    //点击提交以后，表单页显示
    function fromShow() {
        $(".firstWrap").css("display", "none");
        $(".srcondWrap").css("display", "block");
        $(".thirdWrap").css("display", "none");
    }

    Zepto(function ($) {
        //封装弹窗插件方法
        function myAlert(msg) {
            layer.open({
                content: msg,
                time: 2 //2秒后自动关闭
            });
        }

        function checkMobile() {
            var tel = $('#mobile').val(),
                reg = /^1[0-9]{10}$/;
            if (!tel) {
                myAlert('请输入手机号');
                return false;
            }
            if (!reg.test(tel)) {
                myAlert('请输入正确的手机号');
                return false;
            }
            return true;
        }

        function sendCode(el, data) {
            var url = 'http://m.ieduchina.com/index.php?m=activity&c=index&a=send_h5_mobile_yzm';
            $.post(url, data, function (data) {
                if (data.status == 1) {
                    var iCount = 60,
                        $this = $(el),
                        timer = null;
                    $this.addClass('disabled');
                    $this.html(iCount + "s后重试");
                    timer = setInterval(function () {
                        iCount--;
                        if (iCount == 0) {
                            clearInterval(timer);
                            count_down = false;
                            $this.removeClass("disabled").html("获取验证码");
                        } else {
                            $this.html(iCount + "s后重试");
                        }
                    }, 1000);
                    
                    myAlert('验证码已发送，请注意查收');
                } else if (data.status == 2) {
                    count_down = false;
                    myAlert(data.info)
                } else {
                    count_down = false;
                    myAlert('请重试')
                }
            }, 'json');

        }
        var count_down = false
        $(".get-code").on('click', function () {
            if (count_down) return
            if (checkMobile()) {
                count_down = true;
                var tel = $('#mobile').val();
                sendCode(this, {
                    tel: tel,
                    activity_id: 98
                });
            }
        })
        //查看答案
        var lock = false;
        $("#sub-btn").on('click', function () {
            var $this = $(this);
            /* */
            var name = $('#name').val();
            if (!name) {
                myAlert('请输入姓名');
                return;
            }

            var nameReg = /^[(\u4e00-\u9fa5)A-Za-z]{2,20}$/;
            if (!nameReg.test(name)) {
                myAlert('请输入正确的姓名');
                return;
            }
            var grade = $('#grade').val();;
            if (!grade) {
                myAlert('请选择年级');
                return;
            }
            //手机号验证
            if (!checkMobile()) {
                return;
            }
            var code = $('#verify').val();
            if (!code) {
                myAlert('请输入验证码');
                return;
            }
            var data = {
                name: name,
                grade: grade,
                tel: $('#mobile').val(),
                code: code,
                activity_id: 98
            }
            var centerTextLi = document.querySelectorAll(".thirdWrap .centerBg li");
            var centerText = "centerText" + answerIndex;
            var ajaxurl = 'http://m.ieduchina.com/index.php?m=activity&c=index&a=ajax_baoming';
            $.ajax({
                url: ajaxurl,
                dataType: "json",
                data: data,
                type: "POST",
                success: function (result) {
                    if (result.status == 1) {
                        $(".firstWrap").css("display", "none");
                        $(".srcondWrap").css("display", "none");
                        $(".thirdWrap").css("display", "block");
                        for (var i = 0; i < centerTextLi.length; i++) {
                            centerTextLi[i].style.display = "none";
                        }
                        $("." + centerText).css("display","block");
                    } else {
                        myAlert(result.info);
                        lock = false;
                    }
                }
            });
        })
    });
}