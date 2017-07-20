/*！
 * 验证时间（时:分:秒）(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=194)
 * 1. 时:分：秒  列如：11:09:10
 * 2. 小时支持12小时制和24小时制
 * 3. 分钟0-59
 * 4. 秒0-59
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isTime", function (value, element) {
	var reg = /^([01][0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的时间，格式为时:分:秒");