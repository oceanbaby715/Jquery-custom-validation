/*！
 * 验证国内座机号码(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=188)
 * 区号-号码-分机号(例如：021-65017738-336)
 * 1.区号以0开头，3位或4位
 * 2.号码由7位或8位数字组成
 * 3.分机号码由1-6位数字组成
 * 4.区号与号码之间可以无连接符，也可以“-”连接
 * 5.分机号可有可无
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isTelphone", function(value, element) {
	var reg = /^(0\d{2,3})?(-)?\d{7,8}(-\d{1,6})?$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的国内座机号码");
