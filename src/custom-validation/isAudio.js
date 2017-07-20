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
}, "请输入正确的音频地址");