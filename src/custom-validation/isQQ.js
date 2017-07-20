/*！
 * 验证QQ号(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=171)
 * 1.5-11位纯数字
 * 2.开头不能为0
 * 3.qq号码10000开始的
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isQQ", function(value, element) {
	var reg=/^[1-9][0-9]{4,10}$/;
	return this.optional(element) || reg.test(value);
}, "请输入正确的QQ号码");