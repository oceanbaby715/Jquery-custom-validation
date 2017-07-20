/*！
 * 验证匹配非负整数（正整数 + 0）
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNonNegtiveInteger", function(value, element) {
	var reg = /^[1-9]\d*|0$/;
	return this.optional(element) || (reg.test(value));
}, "请输入非负整数");