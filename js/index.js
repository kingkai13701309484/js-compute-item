var out = document.getElementById('conter'),
	he = document.getElementById('head'),
	lis = document.getElementsByTagName("td"),

	number1='', 
	clear=false, 
	char=''; //存放字符
// calculator = new Calculator();

// function Calculator() {

// 判断字符串的样式，将他们计算
function jisuan(num, num1, char) {
	var res = '';

	switch (char) {
		case "+":
			res = num + num1;

			break;
		case "-":
			res = (num * 1e20 - num1 * 1e20) / 1e20;

			break;
		case "×":
			res = num * num1;

			break;
		case "÷":

			if (num1 == 0) {
                alert('你好0不能作为分母'); 
                res = num / num1;
			}else {
				res = num / num1;
			}
			break;
		case "％":
			res = num % num1;

			break;
		
	}
	return res=parseFloat(res.toFixed(8));
}
// }

// 获取用户每次点击下的内容，并进行判断存储
out.addEventListener('click', function(e) {

	var s = e.target.innerText; //鼠标点击下的每一个字符

    switch (s) {
        case "=":
            he.innerText= jisuan(parseFloat(number1-0), parseFloat(he.innerText), char);
            number1 = "";
            char = "";
            clear = true;
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            clear = true;
            if (number1.length != 0) {
                he.innerText = jisuan(parseFloat(number1), parseFloat(he.innerText), char);
            }
            number1=he.innerText;
            char = s;
            break;
        case "cos":
            clear = true;
            number1 = he.innerText;
            he.innerText = Math.cos(parseFloat(number1)).toFixed(9);
            break;
        case "sin":
            clear = true;
            number1 = he.innerText;
            he.innerText = Math.sin(parseFloat(number1)).toFixed(9);
            
            break;
        case "清空":
            he.innerText= '';
            number1 = "";
            char = "";
            break;
        case ".":
            var numF = he.innerText;
            if (parseFloat(numF) == (numF + ".")) {
                he.innerText = he.innerText + ".";
            } else if (numF == "") {
                he.innerText = "0.";
            }
            break;
        default:
            if (clear) {
                he.innerText= parseFloat(s);
                clear = false;
            } else {
                he.innerText = parseFloat(he.innerText+ s);
            }
            break;
    }

})
























