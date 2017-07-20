/*！
 * 中国护照验证规则(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=200)
 * 1. P开头+7位数
 * 2. D开头
 * 3. E开头+8位
 * 4. S开头+7位数 或 +8位数
 * 5. G开头+8位数
 * 6. 14开头+7位数
 * 7. 15开头+7位数
 * 8. 开头字母大小写都可以
 *
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isChinesePassport", function (value, element) {
	var reg = /^((1[45]\d{7})|([G|g]\d{8})|([P|p]\d{7})|([S|s]\d{7,8})|([D|d]\d+)|([E|e]\d{8}))$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的护照号码");