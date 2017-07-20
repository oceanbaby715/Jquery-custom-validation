/*！
 * 验证匹配非正浮点数（负浮点数 + 0）
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNonPositiveFloat", function(value, element) {
	var reg = /^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$/;
	return this.optional(element) || (reg.test(value));
}, "请输入非正浮点数");