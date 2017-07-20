/**
 * 验证域名(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=190)
 * 1.仅支持数字、英文和“-”（英文中的连词号），"-"不能用作开头和结尾
 * 2.最长 67 个字符 ( 包括后缀 .com 、.top、.net 、 .org 等 )
 * 3.各级域名之间用实点（.）连接 ，最少两级域名，如：qq.com，最多四级域名，如：haiyang.vip.qq.com
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isDomain", function(value, element) {
    var reg =/^(([a-zA-Z0-9]+|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.){0,3}((com)|(net)|(org)|(gov\.cn)|(info)|(cc)|(com\.cn)|(net\.cn)|(org\.cn)|(name)|(biz)|(tv)|(cn)|(mobi)|(name)|(sh)|(ac)|(io)|(tw)|(com\.tw)|(hk)|(com\.hk)|(ws)|(travel)|(us)|(tm)|(la)|(me\.uk)|(org\.uk)|(ltd\.uk)|(plc\.uk)|(in)|(eu)|(it)|(jp))$/;
	return this.optional(element) || (reg.test(value)) && value.length<=67;
}, "请输入正确的域名");