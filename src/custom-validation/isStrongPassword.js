/*！
 * 验证强密码(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=191)
 * 1.长度大于8
 * 2.必须是字母大写，字母小写，数字，特殊字符组成
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isStrongPassword", function(value, element) {
	var reg = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g"); 
	return this.optional(element) || reg.test(value);
}, "密码不能小于8位，必须是字母大写和小写、数字、特殊符4中组成");