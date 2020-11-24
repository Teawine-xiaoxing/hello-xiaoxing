$(function () {
    $('#gotoRegi').click(function () {
        $('.regiBox').show();
        $('.loginBox').hide();
    });
    // 去登录
    $('#gotoLogin').click(function () {
        $('.regiBox').hide();
        $('.loginBox').show();
    })
});
let form = layui.from;
let layer = layui.layer;


// 表单校验
form.verify({
    pass: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
    repass: function (value, item) {
        let pwd = $('.regiBox input[name = password]').val();
        if (value !== pwd) {
            return '两次输入的密码不一致';
        }
    },
});

// 注册的ajax代码
$('#regiForm').on('submit', function (e) {
    e.preventDefault();
    let data = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: '/api/reguser',
        data,
        success: function (res) {
            if (res.status !== 0) {
                return layer.msg('注册失败！' + res.message);
            }

        }
    })
})