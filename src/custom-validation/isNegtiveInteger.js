/*！
 * 验证负整数
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNegtiveInteger", function(value, element) {
	var reg = /^-[1-9]\d*$/;
	return this.optional(element) || (reg.test(value));
}, "请输入负整数");