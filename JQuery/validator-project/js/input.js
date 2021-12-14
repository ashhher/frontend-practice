$(function () {
    'use strict';

    window.Input = function (selector) {
        var $ele,
            $error_ele,
            rule = {
                required: true,
            },
            me = this;


        this.load_validator = function () {
            var val = this.get_val();
            this.validator = new Validator(val, rule);
        }

        this.get_val = function () {
            return $ele.val();
        }

        function init() {
            find_ele();
            find_error_ele();
            parse_rule();
            me.load_validator();
            listen();
        }

        function find_ele() {
            if (selector instanceof jQuery) {
                $ele = selector;
            } else {
                $ele = $(selector);
            }
        }

        function find_error_ele() {
            $error_ele = $('#' + $ele.attr('name') + '-input-error');
        }

        function parse_rule() {
            var rule_str = $ele.data('rule');
            if (!rule_str) return;

            var rule_arr = rule_str.split('|');

            for (var i = 0; i < rule_arr.length; i++) {
                var item_str = rule_arr[i];
                var item_arr = item_str.split(':');
                rule[item_arr[0]] = JSON.parse(item_arr[1]);
            }
        }

        function listen() {
            $ele.on('blur', function () {
                var valid = me.validator.is_valid(me.get_val());
                console.log("valid:", valid);
                if (valid) {
                    $error_ele.hide();
                } else {
                    $error_ele.show();
                }
            })
        }



        init();
    }
});