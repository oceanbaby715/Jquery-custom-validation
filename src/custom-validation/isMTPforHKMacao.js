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
}, "请输入正确的回乡证号码");