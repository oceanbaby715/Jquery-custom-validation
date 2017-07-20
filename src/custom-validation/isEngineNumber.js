/*！
* 验证汽车发动机号码(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=204)
* 1、发动机号最少5位，只能包含数字、大小写字母、及"."、"*"、空格、"/"、"-"
*
* Date：2017-03-13
* Author：haiyang
*/
jQuery.validator.addMethod("isEngineNumber", function(value, element) {
	var reg = /^([A-Z0-9-.*\s\/]{5,})$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的发动机号码");