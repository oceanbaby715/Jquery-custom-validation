/**
 * 验证网址(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=196)
 * 1.“https://” 或 “http://” 或 空
 * 2.见域名验证规则 或 IP验证规则
 * 3.网址最长为2000个字符
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isURL", function(value, element) {
	var strRegex="^(https:\/\/|http:\/\/)?" //协议
			+"((([a-zA-Z0-9]+|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\\.){0,3}((com)|(net)|(org)|(gov\\.cn)|(info)|(cc)|(com\\.cn)|(net\\.cn)|(org\\.cn)|(name)|(biz)|(tv)|(cn)|(mobi)|(name)|(sh)|(ac)|(io)|(tw)|(com\\.tw)|(hk)|(com\\.hk)|(ws)|(travel)|(us)|(tm)|(la)|(me\\.uk)|(org\\.uk)|(ltd\\.uk)|(plc\\.uk)|(in)|(eu)|(it)|(jp))" //域名
			+"|" //允许域名或者IP
			+"(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|[1-9])\\.(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\.(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\.(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d))" //ip
			+"(:[0-9]{1,4})?" // 端口- :80
			+ "((/?)|" //如果没有文件名则不需要"/"
        	+ "(/[0-9A-Za-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
    var reg=new RegExp(strRegex);
    var flag=false;
    if (reg.test(value)) {
    	var domainStr=value.replace(reg,"$2");//取出域名部分
    	if (value.length<=2000) {
    		//域名长度不能超过67
    		if (domainStr.length<=67) {
    			flag=true;
    		}
    	}
	}
	return this.optional(element) || flag;
}, "请输入正确网址");