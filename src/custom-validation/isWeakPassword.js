/*！
 * 验证弱密码(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=192)
 * 1.长度是6位以下
 * 2.就算字母、数字、特殊字符三项都包括，强度也是弱的
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isWeakPassword", function(value, element) {
	var reg = new RegExp("(?=.{6,}).*", "g"); 
	return this.optional(element) || reg.test(value);
}, "密码太弱，请重新输入");