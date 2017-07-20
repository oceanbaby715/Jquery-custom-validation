/*！
* 验证由26个大写英文字母组成的字符串
*
* Date：2017-03-03
* Author：haiyang
*/
jQuery.validator.addMethod("isUppercaseEnglishLetter", function(value, element) {
	var reg = /^[A-Z]+$/;
	return this.optional(element) || (reg.test(value));
}, "请输入大写英文字母");