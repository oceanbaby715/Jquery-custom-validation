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
}, "请输入正确的图片地址");