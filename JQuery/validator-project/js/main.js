$(function () {
    'use strict';

    /*选中页面中所有的data-rule*/

    /*解析每个input的验证规则 */

    /*验证 */
    var input = $()
    var validator = new Validator('hihi', {
        max: 100,
        min: 18,
        maxlength: 3,
        minlength: 2,
        pattern: "^[a-z0-9]*$"
    })

    var result = validator.validate_pattern();
    console.log('result:',result)
});