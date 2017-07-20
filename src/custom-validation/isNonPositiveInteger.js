/*！
 * 验证匹配非正整数（负整数 + 0）
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNonPositiveInteger", function(value, element) {
	var reg = /^-[1-9]\d*|0$/;
	return this.optional(element) || (reg.test(value));
}, "请输入非正整数");