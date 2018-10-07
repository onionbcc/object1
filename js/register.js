(function() {
	var clickToReg = document.getElementById("clickToReg");
	var shade = document.getElementById("shade");
	var oform = document.getElementsByTagName("form")[0];
	var close = document.getElementById("close");
	console.log(shade);
	clickToReg.onclick = function() {
		oform.style.display = "block";
		console.log(document.body.clientWidth + "+" + document.body.clientHeight);
		shade.style.display = "block";
		shade.style.width = document.body.clientWidth + 'px';
		shade.style.height = document.body.clientHeight + 'px';
	}
	close.onclick = function() {
		shade.style.display = "none";
		oform.style.display = "none";
	}
})();

/*
 *注册框的验证工作
 */
(function() {
	//获取需要的节点
	var box = document.getElementById("box");
	var butt = document.getElementById("button");
	var cont = document.getElementById("cont");
	var bgcolor = document.getElementById("bgcolor");
	//初始的验证状态为失败
	success = false;
	//添加事件的对象
	butt.onmousedown=function(e){
		var e = e||window.event;
		//鼠标按下之前必须清除按钮和背景色的过渡效果，不然当验证不成功时想要再次滑动滑块就会有延迟
		butt.style.transition = "";
		bgcolor.style.transition = "";
		//鼠标在按钮上的坐标
		var dx = e.pageX - butt.offsetLeft;
		var dy = e.pageY - butt.offsetTop;
		//验证成功的距离
		var success = box.offsetWidth - butt.offsetWidth;
		document.onmousemove = function(e) {
			var e = e || window.event;
			var x = e.pageX - dx;
			if(x < 0) {
				x = 0;
			} else if(x > box.offsetWidth - butt.offsetWidth) {
				x = box.offsetWidth - butt.offsetWidth;
			}
			butt.style.left = x + 'px';
			bgcolor.style.width = x + 'px';
			if(x == box.offsetWidth - butt.offsetWidth) {
				success = true;
				cont.innerHTML = "验证成功";
				cont.style.color = "#fff";
				butt.innerHTML = "❤";
				document.onmousemove = null;
				//成功后不能再继续往回拉按钮
				butt.onmousedown = null;
				console.log(success);
			}
		}
		document.onmouseup = function(e) {
			if(success == true) {
				return true;
			} else {
				butt.style.left = 0;
				bgcolor.style.width = 0;
				butt.style.transition = "left 1s ease 0s";
				bgcolor.style.transition = "left 1s ease 0s";
			}
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}
	var oform = document.getElementsByTagName("form")[0];
	var phone = oform.getElementsByTagName("input")[0];
	var oerror = document.getElementById("error");
	var regButton = oform.getElementsByTagName("button")[0];
	var phoneNum = /^1(([358]\d)|(47)|(66)|(7[013678]))\d{8}$/;
	var pass = false;
	regButton.onclick = function(e) {
		var e = e || window.event;
		var content = phone.value;
		if(content == '') {
			oerror.style.display = "block";
			oerror.innerHTML = "您输入的手机号码不能为空";
			pass = false;
		} else if(content != '') {
			if(!phoneNum.test(content)) {
				oerror.style.display = "block";
				oerror.innerHTML = "您输入的手机号码格式不正确";
				pass = false;
			} else if(phoneNum.test(content)) {
				oerror.style.display = "none";
				pass = true;
			}
		}
//		console.log(success);
//		if(pass == false&&success==false) {
//			e.preventDefault();
//		} else if(pass==true&&success==false){
//			oerror.style.display = "block";
//			oerror.innerHTML = "请您进行验证";
//			e.preventDefault();
//		}else if(pass == false&&success==true){
//			e.preventDefault();
//		}else if(pass==true&&success==true){
//			return true;
//		}
		if(pass==false){
			e.preventDefault();
		}else{
			return true;
		}
	}
})();