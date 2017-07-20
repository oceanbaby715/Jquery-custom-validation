/**
 * 验证IP地址(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=180)
 * 1.iPv4的ip地址都是（1~255）.（0~255）.（0~255）.（0~255）的格式
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isIP", function(value, element) {
	var reg = /^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[1-9])\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的ip地址");
