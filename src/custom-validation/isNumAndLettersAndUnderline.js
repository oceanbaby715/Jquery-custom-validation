/*！
 * 验证由数字、26个英文字母或者下划线组成的字符串
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNumAndLettersAndUnderline", function(value, element) {
	var reg = /^\w+$/;
	return this.optional(element) || (reg.test(value));
}, "请输入数字、英文字母或者下划线");