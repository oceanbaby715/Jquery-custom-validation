//验证提示中文
$.extend($.validator.messages, {
	required : "必选字段",
	remote : "请修正该字段",
	email : "请输入正确格式的电子邮件",
	url : "请输入合法的网址",
	date : "请输入合法的日期",
	dateISO : "请输入合法的日期 (ISO).",
	number : "请输入合法的数字",
	digits : "只能输入整数",
	creditcard : "请输入合法的信用卡号",
	equalTo : "请再次输入相同的值",
	accept : "请输入拥有合法后缀名的字符串",
	maxlength : jQuery.validator.format("请输入一个 长度最多是 {0} 的字符串"),
	minlength : jQuery.validator.format("请输入一个 长度最少是 {0} 的字符串"),
	rangelength : jQuery.validator.format("请输入 一个长度介于 {0} 和 {1} 之间的字符串"),
	range : jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
	max : jQuery.validator.format("请输入一个最大为{0} 的值"),
	min : jQuery.validator.format("请输入一个最小为{0} 的值")
});;
/*！
 * 验证音频格式(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=179)
 * 1. 以".+音频格式后缀名"结尾
 * 2. 音频名称由任意字符组成，但是不能为空
 * 3. 音频路径由任意字符组成，可以为空
 * 4. 音频格式后缀名只能是下面表格中的类型 
 *	cda
 *	WAV
 *	AIFF
 *	AU
 *	MPEG
 *	MP3
 *	MPEG-4
 *	MIDI
 *	WMA
 *	VQF
 *	Ogg
 *	AMR
 * 
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isAudio", function (value, element) {
	var reg = /^[^\s](.*)+\.(cda|wav|aiff|au|mpeg|mp3|midi|wma|vqf|ogg|amr)$/i;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的音频地址");;
/*！
 * 匹配中文(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=183)
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isChinese", function(value, element) {
	var reg = /^[\u4E00-\u9FA5]+$/;
	return this.optional(element) || (reg.test(value));
}, "请输入中文汉字");;
/*！
 * 中国护照验证规则(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=200)
 * 1. P开头+7位数
 * 2. D开头
 * 3. E开头+8位
 * 4. S开头+7位数 或 +8位数
 * 5. G开头+8位数
 * 6. 14开头+7位数
 * 7. 15开头+7位数
 * 8. 开头字母大小写都可以
 *
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isChinesePassport", function (value, element) {
	var reg = /^((1[45]\d{7})|([G|g]\d{8})|([P|p]\d{7})|([S|s]\d{7,8})|([D|d]\d+)|([E|e]\d{8}))$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的护照号码");;
/*！
 * 验证日期（年-月-日）(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=193)
 * 1. 年-月-日  例如：2017-02-28
 * 2. 月只能是从1-12
 * 3. 日只能从1-31
 * 4. 匹配出二月份（28天或29天）
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isDate", function (value, element) {
	var reg = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29))$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的日期，格式为年-月-日");;
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
}, "请输入正确的域名");;
/*！
 * 验证驾驶证号码
 * 1、驾驶证号码即身份证号码
 *
 * Date：2017-03-13
 * Author：haiyang
 */
jQuery.validator.addMethod("isDriverNumber", function(value, element) {
	function IdentityCodeValid(code) { 
        var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
        //var tip = "";
        var pass= true;
        
        //判断格式是否正确
        if(!code || !/^\d{6}((((1[6-9]|[2-9]\d)\d{2})(0[13578]|1[02])(0[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})(0[13456789]|1[012])(0[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})02(0[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))0229))\d{3}(\d|x|X)$/i.test(code)){
            tip = "身份证号格式错误";
            pass = false;
        }
        //判断前两位的地址编码是否正确
       	else if(!city[code.substr(0,2)]){
            //tip = "地址编码错误";
            pass = false;
        }
        else{
            //18位身份证需要验证最后一位校验位
            if(code.length == 18){
                code = code.split('');
                //∑(ai×Wi)(mod 11)
                //加权因子
                var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                //校验位
                var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                var sum = 0;
                var ai = 0;
                var wi = 0;
                for (var i = 0; i < 17; i++)
                {
                    ai = code[i];
                    wi = factor[i];
                    sum += ai * wi;
                }
                var last = parity[sum % 11];
                if(parity[sum % 11] != code[17]){
                    //tip = "校验位错误";
                    pass =false;
                }
            }
        }
        return pass;
    }
	return this.optional(element) || IdentityCodeValid(value);
}, "请输入正确的驾驶证号码");;
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
}, "请输入正确格式的电子邮件");;
/*！
* 验证汽车发动机号码(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=204)
* 1、发动机号最少5位，只能包含数字、大小写字母、及"."、"*"、空格、"/"、"-"
*
* Date：2017-03-13
* Author：haiyang
*/
jQuery.validator.addMethod("isEngineNumber", function(value, element) {
	var reg = /^([A-Z0-9-.*\s\/]{5,})$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的发动机号码");;
/*！
* 验证由26个英文字母组成的字符串
*
* Date：2017-03-03
* Author：haiyang
*/
jQuery.validator.addMethod("isEnglishLetter", function(value, element) {
	var reg = /^[A-Za-z]+$/;
	return this.optional(element) || (reg.test(value));
}, "请输入英文字母");;
/*！
* 验证匹配浮点数
* Date：2017-03-03
* Author：haiyang
*/
jQuery.validator.addMethod("isFloat", function(value, element) {
	var reg = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/;
	return this.optional(element) || (reg.test(value));
}, "请输入浮点数");;
//
/*！
 * 验证完整日期（年-月-日 时:分:秒）(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=195)
 * 1.年-月-日 时:分：秒
 * 2.月只能是从01-12
 * 2.日只能从01-31
 * 2.匹配出二月份（28天或29天）
 * 2.小时支持12小时制和24小时制
 * 2.分钟00-59
 * 2.秒00-59
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isFullDate", function(value, element) {
	var reg = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29)) (0\d|1\d|2[0-4]):([0|1|2|3|4|5]\d):([0|1|2|3|4|5]\d)$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的时间，格式为年-月-日 时:分:秒");;
/*！
 * 验证港澳通行证(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=199)
 * 1. 开头是大写的英文'C'或者'W'
 * 2. 后面是8位数字
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isHKMacaoCard", function (value, element) {
	var reg = /^[CW]\d{8}$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的港澳通行证号码");;
/*！
 * 验证第二代身份证(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=186)
 * 1.参考上面链接
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isIdCardNo", function(value, element) {
	function IdentityCodeValid(code) { 
        var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
        //var tip = "";
        var pass= true;
        
        //判断格式是否正确
        if(!code || !/^\d{2}(0[1-9]|[1-9][0-9])\d{2}((((1[6-9]|[2-9]\d)\d{2})(0[13578]|1[02])(0[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})(0[13456789]|1[012])(0[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})02(0[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))0229))\d{3}(\d|x|X)$/i.test(code)){
            tip = "身份证号格式错误";
            pass = false;
        }
        //判断前两位的地址编码是否正确
       	else if(!city[code.substr(0,2)]){
            //tip = "地址编码错误";
            pass = false;
        }
        else{
            //18位身份证需要验证最后一位校验位
            if(code.length == 18){
                code = code.split('');
                //∑(ai×Wi)(mod 11)
                //加权因子
                var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                //校验位
                var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                var sum = 0;
                var ai = 0;
                var wi = 0;
                for (var i = 0; i < 17; i++)
                {
                    ai = code[i];
                    wi = factor[i];
                    sum += ai * wi;
                }
                var last = parity[sum % 11];
                if(parity[sum % 11] != code[17]){
                    //tip = "校验位错误";
                    pass =false;
                }
            }
        }
        return pass;
    }
	return this.optional(element) || IdentityCodeValid(value);
}, "请输入正确的身份证号码");
;
/*！
 * 验证图片格式(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=174)
 * 1. 以".+图片格式后缀名"结尾
 * 2. 图片名称由任意字符组成，但是不能为空
 * 3. 图片路径由任意字符组成，可以为空
 * 4. 图片格式后缀名只能是下面表格中的类型
 *
 *
 *jpeg
 *jpg
 *bmp
 *gif
 *ico
 *svg
 *png
 *psd
 *pcx
 * dxf
 * cdr
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isImage", function (value, element) {
	var reg = /^[^\s](.*)+\.(jpg|bmp|gif|ico|svg|jpeg|png|psd|pcx|dxf|cdr)$/i;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的图片地址");;
/*！
* 验证整数
* Date：2017-03-03
* Author：haiyang
*/
jQuery.validator.addMethod("isInteger", function(value, element) {
	var reg = /^-?[1-9]\d*$/;
	return this.optional(element) || (reg.test(value));
}, "请输入整数");;
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
;
/*！
* 验证由26个小写英文字母组成的字符串
*
* Date：2017-03-03
* Author：haiyang
*/
jQuery.validator.addMethod("isLowercaseEnglishLetter", function(value, element) {
	var reg = /^[a-z]+$/;
	return this.optional(element) || (reg.test(value));
}, "请输入小写英文字");;
/*！
 * 验证中等强度密码(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=227)
 * 1.密码为七位及以上
 * 2.大小字母、数字三项中有两项
 * 3.特殊字符可有可无
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isMediumPassword", function(value, element) {
	var reg = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
	return this.optional(element) || reg.test(value);
}, "密码不能小于7位，必须包含字母、数字、特殊字符三项中的两项");;
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
	var reg = /^(((13[0-9]{1})|(14[57]{1})|(15[012356789]{1})|(17[03678]{1})|(18[0-9]{1})|(19[89]{1})|(16[6]{1}))+\d{8})$/;
	return this.optional(element) || (length == 11 && reg.test(value));
}, "请输入正确的手机号码");;
/*！
 * 金额验证规则(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=181)
 * 1. 正数无符号，负数 - 号
 * 2. 大于0的整数，最左边一位只能为1-9的数字
 * 3. 0、1、2位小数
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isMoney", function (value, element) {
	var reg = /^-?((0(\.\d{1,2})?)|([1-9]\d*(\.\d{1,2})?))$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的金额");;
/*！
 * 回乡证验证规则(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=202)
 * 1. 共11位
 * 2. 第1位为字母,'H'：字头签发给香港居民 'M'：字头签发给澳门居民
 * 3. 第2-9位,前8位数字为通行证持有人的终身号
 * 4. 第10-11位,后2位数字表示换证次数。
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isMTPforHKMacao", function (value, element) {
	var reg = /^([HM])\d{10}$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的回乡证号码");;
/*！
 * 匹配负浮点数
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNegativeFloat", function(value, element) {
	var reg = /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/;
	return this.optional(element) || (reg.test(value));
}, "请输入负浮点数");;
/*！
 * 验证负整数
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNegtiveInteger", function(value, element) {
	var reg = /^-[1-9]\d*$/;
	return this.optional(element) || (reg.test(value));
}, "请输入负整数");;
/*！
 * 验证匹配非负浮点数（正浮点数 + 0）
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNonNegativeFloat", function(value, element) {
	var reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$/;
	return this.optional(element) || (reg.test(value));
}, "请输入非负浮点数");;
/*！
 * 验证匹配非负整数（正整数 + 0）
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNonNegtiveInteger", function(value, element) {
	var reg = /^[1-9]\d*|0$/;
	return this.optional(element) || (reg.test(value));
}, "请输入非负整数");;
/*！
 * 验证匹配非正浮点数（负浮点数 + 0）
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNonPositiveFloat", function(value, element) {
	var reg = /^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$/;
	return this.optional(element) || (reg.test(value));
}, "请输入非正浮点数");;
/*！
 * 验证匹配非正整数（负整数 + 0）
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNonPositiveInteger", function(value, element) {
	var reg = /^-[1-9]\d*|0$/;
	return this.optional(element) || (reg.test(value));
}, "请输入非正整数");;
/*！
 * 验证由数字和26个英文字母组成的字符串
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNumAndLetters", function(value, element) {
	var reg = /^[A-Za-z0-9]+$/;
	return this.optional(element) || (reg.test(value));
}, "请输入数字和英文字母");;
/*！
 * 验证由数字、26个英文字母或者下划线组成的字符串
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isNumAndLettersAndUnderline", function(value, element) {
	var reg = /^\w+$/;
	return this.optional(element) || (reg.test(value));
}, "请输入数字、英文字母或者下划线");;
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
}, "请输入正确的军官证号码");;
/*！
 * 验证第一代身份证(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=187)
 * 1.参考上面链接
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isOldIdCardNo", function(value, element) {
	function IdentityCodeValid(code) { 
        var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
        //var tip = "";
        var pass= true;
        
        //判断格式是否正确
        if(!code || !/^\d{2}(0[1-9]|[1-9][0-9])\d{2}\d{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])\d{3}$/i.test(code)){
            tip = "身份证号格式错误";
            pass = false;
        }
        //判断前两位的地址编码是否正确
       	else if(!city[code.substr(0,2)]){
            //tip = "地址编码错误";
            pass = false;
        }
        return pass;
    }
	return this.optional(element) || IdentityCodeValid(value);
}, "请输入正确的身份证号码");
;
/*！
 * 验证匹配正浮点数
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isPositiveFloat", function(value, element) {
	var reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正浮点数");;
/*！
 * 验证正整数
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isPositiveInteger", function(value, element) {
	var reg = /^[1-9]\d*$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正整数");;
/*！
 * 验证QQ号(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=171)
 * 1.5-11位纯数字
 * 2.开头不能为0
 * 3.qq号码10000开始的
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isQQ", function(value, element) {
	var reg=/^[1-9][0-9]{4,10}$/;
	return this.optional(element) || reg.test(value);
}, "请输入正确的QQ号码");;
/*！
 * 验证强密码(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=191)
 * 1.长度大于8
 * 2.必须是字母大写，字母小写，数字，特殊字符组成
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isStrongPassword", function(value, element) {
	var reg = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g"); 
	return this.optional(element) || reg.test(value);
}, "密码不能小于8位，必须是字母大写和小写、数字、特殊符4中组成");;
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
;
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
}, "请输入正确的时间，格式为时:分:秒");;
/*！
 * 验证台胞证(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=201)
 * 1. 8位数字或者10位数字
 * 2. 最后可以有括号，也可以没有
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isTWCompatriotsCard", function (value, element) {
	var reg = /^\d{8,10}(\([A-Z,0-9]{1}\))?$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的台胞证号码");;
/*！
* 验证由26个大写英文字母组成的字符串
*
* Date：2017-03-03
* Author：haiyang
*/
jQuery.validator.addMethod("isUppercaseEnglishLetter", function(value, element) {
	var reg = /^[A-Z]+$/;
	return this.optional(element) || (reg.test(value));
}, "请输入大写英文字母");;
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
}, "请输入正确网址");;
/*！
* 验证车牌号(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=197)
* 1、【常规车牌号】仅允许以汉字开头，后面可录入六个字符，由大写英文字母和阿拉伯数字组成。如：粤B12345
* 2、【最后一个为汉字的车牌】允许以汉字开头，后面可录入六个字符，前五位字符，由大写英文字母和阿拉伯数字组成，而最后一个字符为汉字，汉字包括“挂”、“学”、“警”、“港”、“澳”。如：粤Z1234港
* 3、【新军车牌】以两位为大写英文字母开头，后面以5位阿拉伯数字组成。如：BA12345。
* 4、【绿色车牌号（新能源车专用车牌）】2017年新车牌类型，仅允许以汉字开头，后面可录入七个字符，由大写英文字母和阿拉伯数字组成。如：粤B123456
* 
*
* Date：2017-03-13
* Author：haiyang
*/
jQuery.validator.addMethod("isVehicleNumber", function(value, element) {
	var reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
	var reg2 =/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{6}$/;
	return this.optional(element) || (reg.test(value)) || reg2.test(value);
}, "请输入正确的车牌号");;
/*！
 * 验证视频格式(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=178)
 * 1. 以".+音频格式后缀名"结尾
 * 2. 视频名称由任意字符组成，但是不能为空
 * 3. 视频路径由任意字符组成，可以为空
 * 4. 视频格式后缀名只能是下面表格中的类型 
 *	avi
 *	mov
 *	asf
 *	wmv
 *	navi
 *	3gp
 *	ra
 *	rm
 *	ram
 *	rmvb
 *	mkv
 *	flv
 *  mp4
 *
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isVideo", function (value, element) {
	var reg = /^[^\s](.*)+\.(avi|mov|asf|wmv|navi|3gp|ra|rm|ram|rmvb|mkv|flv|mp4)$/i;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的视频地址");;
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
}, "请输入正确的车架号");;
/*！
 * 验证弱密码(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=192)
 * 1.长度是6位以下
 * 2.就算字母、数字、特殊字符三项都包括，强度也是弱的
 *
 * Date：2017-03-14
 * Author：haiyang
 */
jQuery.validator.addMethod("isWeakPassword", function(value, element) {
	var reg = new RegExp("(?=.{6,}).*", "g"); 
	return this.optional(element) || reg.test(value);
}, "密码太弱，请重新输入");;
/*！
 * 验证微信账号(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=173)
 * 1. 6-20位
 * 2. 字母、数字、下划线或减号
 * 3. 以字母开头
 *
 * Date：2017-03-13
 * Author：david_wang
 */
jQuery.validator.addMethod("isWeixin", function (value, element) {
	var reg = /^[a-zA-z](\w|_|-){5,19}$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的微信账号");;
/*！
 * 国内验证邮政编码(http://192.168.0.60:3000/showdoc-master/index.php?s=/23&page_id=172)
 * 1.6位纯数字
 *
 * Date：2017-03-03
 * Author：haiyang
 */
jQuery.validator.addMethod("isZipCode", function(value, element) {
	var reg = /^[0-9]{6}$/;
	return this.optional(element) || (reg.test(value));
}, "请输入正确的邮政编码");