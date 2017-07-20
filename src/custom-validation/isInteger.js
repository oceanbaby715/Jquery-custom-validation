/*！
* 验证整数
* Date：2017-03-03
* Author：haiyang
*/
jQuery.validator.addMethod("isInteger", function(value, element) {
	var reg = /^-?[1-9]\d*$/;
	return this.optional(element) || (reg.test(value));
}, "请输入整数");