/*
 *现登录框拖拽功能
 */
(function() {
	var middleBox = document.getElementById("middleBox");
	var oform = middleBox.getElementsByTagName("form")[0];

	oform.onmousedown = function(e) {
		oform.style.cursor = "move";
		var e = e || window.event;
		var left = e.pageX - oform.offsetLeft;
		var top = e.pageY - oform.offsetTop;

		document.onmousemove = function(e) {
			var e = e || window.event;
			var l = e.pageX - left;
			var t = e.pageY - top;
			if(l <= 0) {
				l = 0;
			} else if(l >= middleBox.offsetWidth - oform.offsetWidth) {
				l = middleBox.offsetWidth - oform.offsetWidth
			}
			if(t <= 0) {
				t = 0;
			} else if(t > middleBox.offsetHeight - oform.offsetHeight) {
				t = middleBox.offsetHeight - oform.offsetHeight;
			}
			oform.style.left = l + 'px';
			oform.style.top = t + 'px';
		}
		document.onmouseup = function() {
			document.onmousemove = null;
			oform.onmouseup = null;
		}
	}
})();
/*
 * 正则验证
 */
(function() {
	var middleBox = document.getElementById("middleBox");
	var oform = middleBox.getElementsByTagName("form")[0];
	var inputs = oform.getElementsByTagName("input");
	var oerror = document.getElementById("error");
	console.log(inputs[2]);
	var success = false;
	var phoneNum = /^1(([358]\d)|(47)|(66)|(7[013678]))\d{8}$/;
	var email = /^[a-z0-9A-Z]+@[a-z0-9A-Z]+\.[a-zA-Z]+$/;
	inputs[2].onclick = function(e) {
		var e = e || window.event;
		var cont = inputs[0].value;
		var cont2 = inputs[1].value;
		var state1 = phoneNum.test(cont);
		var state2 = email.test(cont);
		if(cont == '') {
			oerror.style.display = "block";
			oerror.innerHTML = "请输入您的账户名";
			success = false;
		} else if(cont != null) {
			if(!(state1 || state2)) {
				oerror.style.display = "block";
				oerror.innerHTML = "请您输入正确的手机号码或者邮箱地址";
				success = false;
			} else if(state1 || state2) {
				oerror.style.display = "none";
				success = true;
			}
		}
		if(success == false) {
			e.preventDefault();
		} else if(success == true) {
			if(cont2 == '') {
				success == false;
				oerror.style.display = "block";
				oerror.innerHTML = "请您输入密码";
				e.preventDefault();
			} else if(cont2 != null) {
				return true;
			}
		}
	}
})();