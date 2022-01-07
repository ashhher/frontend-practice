$(function () {
    'use strict';

    /*选中页面中所有的data-rule*/
    var $inputs = $('[data-rule]')

    var $form = $('#signup')
    var inputs = [];

    $inputs.each(function (index, node) {
        /*解析+验证每个input的规则 */
        var input = new Input(node);
        inputs.push(input);
    })

    $form.on('submit', function (e) {
        e.preventDefault();
        $inputs.trigger('blur'); //显示所有有误信息
        for(var index in inputs) {
            var item = inputs[index];
            var valid = item.validator.is_valid(); //验证是否有误
            if (!valid) {
                alert('输入格式有误！');
                return;
            }
        }
        signup();
    })

    function signup() {
        alert('注册成功！');
        // $.post('/api/signup', {...})
    }
});