/*！
 * 验证邮箱格式(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=170)
 * 1、名称(@符合前面的部分)只能由26个英文字母、0-9数字、"-"（英文中的连词号）、"_"(下划线)、"."（英文点）组成； "-"、"_"、"."不能用作开头和结尾；最长为64个字符
 * 2、域名
 *
 * Date：2017-03-14
 * Author：haiyang
 */
$.validator.addMethod("isEmail", function(value, element) {
	var reg =/^([a-zA-Z0-9]{1,63}|[a-zA-Z0-9][a-zA-Z0-9-_.]{0,62}[a-zA-Z0-9])@(([a-zA-Z0-9]+|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.){0,3}((com)|(net)|(org)|(gov\.cn)|(info)|(cc)|(com\.cn)|(net\.cn)|(org\.cn)|(name)|(biz)|(tv)|(cn)|(mobi)|(name)|(sh)|(ac)|(io)|(tw)|(com\.tw)|(hk)|(com\.hk)|(ws)|(travel)|(us)|(tm)|(la)|(me\.uk)|(org\.uk)|(ltd\.uk)|(plc\.uk)|(in)|(eu)|(it)|(jp))$/;
	var flag=false;
	if (reg.test(value)) {
		var arry= value.split("@");
		if (arry[1].length<=67) {
			flag=true;
		}
	}
	return this.optional(element) || flag;
}, "请输入正确格式的电子邮件");