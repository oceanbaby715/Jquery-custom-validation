/*！
* 验证由26个英文字母组成的字符串
*
* Date：2017-03-03
* Author：haiyang
*/
jQuery.validator.addMethod("isEnglishLetter", function(value, element) {
	var reg = /^[A-Za-z]+$/;
	return this.optional(element) || (reg.test(value));
}, "请输入英文字母");