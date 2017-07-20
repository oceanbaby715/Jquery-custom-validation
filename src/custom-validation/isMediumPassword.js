/*！
 * 验证中等强度密码(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=227)
 * 1.密码为七位及以上
 * 2.大小字母、数字三项中有两项
 * 3.特殊字符可有可无
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isMediumPassword", function(value, element) {
	var reg = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
	return this.optional(element) || reg.test(value);
}, "密码不能小于7位，必须包含字母、数字、特殊字符三项中的两项");