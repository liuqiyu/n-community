$("#remember-me").on('click', function(){
    var n = document.getElementById("remember-me").checked;
    if(n){
        $(".zt").show();
    }else{
        $(".zt").hide();
    }
});

/**
 * 注册
 */
$('.register-submit').on('click', function() {
    var $user = $('#user');
    var $password = $('#password');
    var $password1 = $('#password1');
    if ($user.val().length <=0) {
        alert('请输入用户名！');
        return false;
    }
    if ($password.val() <=0) {
        alert('请输入密码！');
        return false;
    }
    if ($password1.val() <=0) {
        alert('请确认密码！');
        return false;
    }
    if ($password.val() != $password1.val()) {
        alert('两次密码不一样！');
        return false;
    }
    var formData = {
        user: $user.val(),
        password: $password.val(),
        password1: $password1.val(),
    };
    $.ajax({
        type: 'POST',
        url: '/user/register',
        data: formData,
        dataType: "json",
        success: function(data) {
            if (data.code === 200) {
                alert(data.message);
                location.href = '/user/login';
            } else {
                alert(data.message);
            }
        },
    });
});

/**
 * 登录
 */
$('.login-submit').on('click', function() {
    var $user = $('#user');
    var $password = $('#password');
    var formData = {
        user: $user.val(),
        password: $password.val(),
    };
    $.ajax({
        type: 'POST',
        url: '/user/login',
        data: formData,
        dataType: "json",
        success: function(data) {
            if (data.code === 200) {
                location.href = '/user/index';
            } else {
                alert(data.message);
            }
        },
    });
});

/**
 *注销
 */
$('.logout-submit').on('click', function() {
    $.ajax({
        type: 'get',
        url: '/user/logout',
        data: formData,
        dataType: "json",
        success: function(data) {
            if (data.code === 200) {
                location.href = '/user/index';
            } else {
                alert(data.message);
            }
        },
    });
});