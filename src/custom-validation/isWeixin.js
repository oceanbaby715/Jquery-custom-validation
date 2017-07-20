/*！
 * 验证微信账号(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=173)
 * 1. 6-20位
 * 2. 字母、数字、下划线或减号
 * 3. 以字母开头
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isWeixin", function (value, element) {
	var reg = /^[a-zA-z](\w|_|-){5,19}$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的微信账号");