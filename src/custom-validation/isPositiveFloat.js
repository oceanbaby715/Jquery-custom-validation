/*！
 * 验证匹配正浮点数
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isPositiveFloat", function(value, element) {
	var reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正浮点数");