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
