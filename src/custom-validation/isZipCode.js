/*！
 * 国内验证邮政编码(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=172)
 * 1.6位纯数字
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isZipCode", function(value, element) {
	var reg = /^[0-9]{6}$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的邮政编码");