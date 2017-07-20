/*！
 * 金额验证规则(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=181)
 * 1. 正数无符号，负数 - 号
 * 2. 大于0的整数，最左边一位只能为1-9的数字
 * 3. 0、1、2位小数
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isMoney", function (value, element) {
	var reg = /^-?((0(\.\d{1,2})?)|([1-9]\d*(\.\d{1,2})?))$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的金额");