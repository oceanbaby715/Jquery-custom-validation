/*！
 * 验证车架号(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=203)
 * 1、长度为17位，只能含有数字和除I、O、Q以外的字母，并且字母全为大写
 * 2、不能为17位连续相同的数字或字母
 *
 * Date：2017-03-13
 * Author：haiyang
 */
jQuery.validator.addMethod("isVIN", function(value, element) {
	var reg = /^[\dABCDEFGHJKLMNPRSTUVWXYZ]{17}$/;
	var reg2 = /^([\dABCDEFGHJKLMNPRSTUVWXYZ])\1{16}$/;
	return this.optional(element) || (reg.test(value)) && !reg2.test(value);
}, "请输入正确的车架号");