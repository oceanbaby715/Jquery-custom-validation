/*！
 * 匹配中文(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=183)
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isChinese", function(value, element) {
	var reg = /^[\u4E00-\u9FA5]+$/;
	return this.optional(element) || (reg.test(value));
}, "请输入中文汉字");