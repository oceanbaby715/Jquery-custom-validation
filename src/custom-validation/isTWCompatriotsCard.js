/*！
 * 验证台胞证(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=201)
 * 1. 8位数字或者10位数字
 * 2. 最后可以有括号，也可以没有
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isTWCompatriotsCard", function (value, element) {
	var reg = /^\d{8,10}(\([A-Z,0-9]{1}\))?$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的台胞证号码");