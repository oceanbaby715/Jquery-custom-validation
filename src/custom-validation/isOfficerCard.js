/*！
* 验证军官证(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=198)
* 1、开头是1-2个文字
* 2、后面是6-8数字和'-'
*
* Date：2017-03-13
* Author：haiyang
*/
jQuery.validator.addMethod("isOfficerCard", function(value, element) {
	var reg = /^[\u4E00-\u9FA5]{1,2}[\d-]{6,8}$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的军官证号码");