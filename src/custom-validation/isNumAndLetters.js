/*！
 * 验证由数字和26个英文字母组成的字符串
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNumAndLetters", function(value, element) {
	var reg = /^[A-Za-z0-9]+$/;
	return this.optional(element) || (reg.test(value));
}, "请输入数字和英文字母");