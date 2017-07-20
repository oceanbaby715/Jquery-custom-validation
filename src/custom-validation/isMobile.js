/*！
 * 国内手机号码验证(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=185)
 * 1.11位纯数字
 * 2.开头是13、14[5/7]、15[0/1/2/3/4/6/7/8/9]、17[0/6/7/8]、18
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isMobile", function(value, element) {
	var length = value.length;
	var reg = /^(((13[0-9]{1})|(14[5|7]{1})|(15[0|1|2|3|5|6|7|8|9]{1})|(17[0|3|6|7|8]{1})|(18[0-9]{1}))+\d{8})$/;
	return this.optional(element) || (length == 11 && reg.test(value));
}, "请输入正确的手机号码");