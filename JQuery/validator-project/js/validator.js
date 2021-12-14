$(function () {
    'use strict';

    window.Validator = function (val, rule) {

        this.is_valid = function (new_val) {
            var key;
            if (new_val !== undefined)
                val = new_val;

            for (key in rule) {
                var valid = this['validate_' + key]();
                if (!valid) {
                    return false;
                }
            }
            return true;
        }

        this.validate_max = function () {
            pre_number();
            return val <= rule.max;

        }

        this.validate_min = function () {
            pre_number();
            return val >= rule.min;
        }

        this.validate_maxlength = function () {
            pre_str();
            return val.length <= rule.maxlength;
        }

        this.validate_minlength = function () {
            pre_str();
            return val.length >= rule.minlength;
        }

        this.validate_numeric = function () {
            return $.isNumeric(val);
        }

        this.validate_required = function () {
            if (!rule.required) return true;
            var realVal = $.trim(val);
            if (!realVal && realVal !== 0) {
                return false;
            }
            return true;
        }

        this.validate_pattern = function () {
            var reg = new RegExp(rule.pattern);
            return reg.test(val);
        }

        function pre_number() {
            val = parseFloat(val);
        }

        function pre_str() {
            val = val.toString();
        }
    }
});