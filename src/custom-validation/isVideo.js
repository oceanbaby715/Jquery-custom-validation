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
}, "请输入正确的视频地址");