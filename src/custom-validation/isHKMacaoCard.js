/*！
 * 验证港澳通行证(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=199)
 * 1. 开头是大写的英文'C'或者'W'
 * 2. 后面是8位数字
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isHKMacaoCard", function (value, element) {
	var reg = /^[CW]\d{8}$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的港澳通行证号码");