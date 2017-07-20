/*！
* 验证由26个小写英文字母组成的字符串
*
* Date：2017-03-03
* Author：haiyang
*/
jQuery.validator.addMethod("isLowercaseEnglishLetter", function(value, element) {
	var reg = /^[a-z]+$/;
	return this.optional(element) || (reg.test(value));
}, "请输入小写英文字");