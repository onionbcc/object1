(function() {
	var placeChoose = document.getElementById("placeChoose");
	var list = placeChoose.getElementsByTagName("ul")[0];
	var olis = list.getElementsByTagName("li");
	var ospan = placeChoose.getElementsByTagName("span")[0];
	//	console.log(olis);
	placeChoose.onmouseover = function() {
		ospan.style.backgroundColor = "white";
		list.style.display = "block";
		for(var i = 0; i < olis.length; i++) {
			olis[i].onclick = function() {
				ospan.innerHTML = this.innerHTML;
			}
		}
	}
	placeChoose.onmouseout = function() {
		ospan.style.backgroundColor = "#F5F5F5";
		list.style.display = "none";
	}
})();
/*手机淘宝的小按钮点击功能*/
(function() {
	var phoneTaobao = document.getElementById("phoneTaobao");
	var butt = phoneTaobao.getElementsByTagName("a")[0];
	//	console.log(butt);
	butt.onclick = function() {
		phoneTaobao.style.display = "none";
		this.style.display = "none";
	}
})();
/*
 *轮播图上方的选项卡功能实现
 */
(function() {
	var left_container = document.getElementById("left_container");
	var lis = left_container.getElementsByClassName("need_li");
	var tabs = left_container.getElementsByClassName("tab_Maxbox");
	//	console.log(tabs);
	for(var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onmouseover = function() {
			for(var k = 0; k < lis.length; k++) {
				tabs[k].style.display = "none";
			}
			tabs[this.index].style.display = "block";
			tabs[this.index].style.zIndex = "1";
		}
		lis[i].onmouseout = function() {
			for(var k = 0; k < lis.length; k++) {
				tabs[k].style.display = "none";
			}
		}
	}
})();
/*
 *上方轮播图功能实现
 */
(function() {
	var img_ul = document.getElementById("top_lunboBox").getElementsByTagName("ul")[0];
	var img_lis = img_ul.getElementsByTagName("li");
	var font_ul = document.getElementById("top_lunboBox").getElementsByTagName("ul")[1];
	var font_lis = font_ul.getElementsByTagName("li");
	var lun_arrows = document.getElementsByClassName("lun_arrows")[0];
	var left = lun_arrows.getElementsByClassName("left_arrows")[0];
	var right = lun_arrows.getElementsByClassName("right_arrows")[0];

	//	console.log(lun_arrows);

	var i = 0;
	var timer = null;

	function autoshow() {
		timer = setInterval(function() {
			img_lis[i].className = "";
			font_lis[i].firstElementChild.className = "";
			i++;
			if(i == 5) {
				i = 0;
			}
			img_lis[i].className = "active";
			font_lis[i].firstElementChild.className = "font_active";
		}, 3000)
	}
	autoshow();
	/*图片添加鼠标移入移出事件*/
	for(var a = 0; a < img_lis.length; a++) {
		img_lis[a].onmouseover = function() {
			clearInterval(timer);
		}
		img_lis[a].onmouseout = function() {
			autoshow();
		}
	}
	for(var k = 0; k < font_lis.length; k++) {
		font_lis[k].index = k;
		font_lis[k].onclick = function() {
			font_lis[i].firstElementChild.className = "";
			img_lis[i].className = "";
			i = this.index;
			img_lis[i].className = "active";
			font_lis[i].firstElementChild.className = "font_active";
		}
	}
	left.onmouseover = function() {
		clearInterval(timer);
	}
	left.onmouseout = function() {
		autoshow();
	}
	right.onmouseover = function() {
		clearInterval(timer);
	}
	right.onmouseout = function() {
		autoshow();
	}
	left.onclick = function() {
		img_lis[i].className = "";
		font_lis[i].firstElementChild.className = "";
		i--;
		if(i < 0) {
			i = img_lis.length - 1;
		}
		img_lis[i].className = "active";
		font_lis[i].firstElementChild.className = "font_active";
	}
	right.onclick = function() {
		img_lis[i].className = "";
		font_lis[i].firstElementChild.className = "";
		i++;
		if(i > img_lis.length - 1) {
			i = 0;
		}
		img_lis[i].className = "active";
		font_lis[i].firstElementChild.className = "font_active";
	}
})();
/*
 *实现下边的轮播图里的功能
 */
(function() {
	var head_cat = document.getElementById("head_cat");
	var fengzi = document.getElementById("fengzi");
	var lunbo_window = document.getElementById("lunbo_window");
	var olis = head_cat.getElementsByTagName("ul")[0].getElementsByTagName("li");
	var conts = lunbo_window.getElementsByTagName("div");
	var lun_arrows2 = document.getElementById("lun_arrows2");
	var left_arrows2 = lun_arrows2.getElementsByClassName("left_arrows2")[0];
	var right_arrows2 = lun_arrows2.getElementsByClassName("right_arrows2")[0];
	//	console.log(left_arrows2);
	var i = 0;
	var timer = null;

	function autoshow() {
		timer = setInterval(function() {
			conts[i].className = "";
			olis[i].className = "";
			i++;
			if(i == 6) {
				i = 0;
			}
			fengzi.innerHTML = i + 1;
			conts[i].className = "show";
			olis[i].className = "cat_active";
		}, 3000)
	}
	autoshow();
	left_arrows2.onclick = function() {
		conts[i].className = "";
		olis[i].className = "";
		i--;
		if(i < 0) {
			i = olis.length - 1;
		}
		fengzi.innerHTML = i + 1;
		conts[i].className = "show";
		olis[i].className = "cat_active";
	}
	right_arrows2.onclick = function() {
		conts[i].className = "";
		olis[i].className = "";
		i++;
		if(i > olis.length - 1) {
			i = 0;
		}
		fengzi.innerHTML = i + 1;
		conts[i].className = "show";
		olis[i].className = "cat_active";
	}
})();
/*
 *实现隐藏搜索框的功能
 */
(function() {
	var searchBox = document.getElementById('hidden_searchBox');
	console.log(searchBox);
	window.onscroll = function() {
		var top = document.documentElement.scrollTop;
		//		console.log(top);
		if(top > 280) {
			searchBox.style.display = "block";
			searchBox.style.position = "fixed";
			searchBox.style.top = 0;
		} else {
			searchBox.style.display = "none";
		}
	}
})();
(function() {
	var box = document.getElementById("right_firLun");
	var lis = box.getElementsByTagName("li");
	var divs = box.getElementsByTagName("div");
	//		console.log(divs);
	for(var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onmouseover = function() {
			for(var k = 0; k < lis.length; k++) {
				lis[k].className = '';
				divs[k].style.display = "none";
			}
			this.className = "fir_active";
			divs[this.index].style.display = "block";
		}
	}
})();
/*
 *滑动轮播效果实现
 */
(function() {
	/*视窗*/
	var shichuang = document.getElementById("slide_window");
	var conts = shichuang.getElementsByTagName("a");
	var rongqi = shichuang.getElementsByTagName("div")[0];
	//	console.log(rongqi);
	var i = -1;
	var timer = null;
	var addTransition = function() {
		rongqi.style.transition = "all 0.8s";
	};
	var removeTransition = function() {
		rongqi.style.transition = "none";
	}

	function autoshow() {
		timer = setInterval(function() {
			i++;
			if(i > 4) {
				i = 1;
			}
			addTransition();
			rongqi.style.top = -99 * i + 'px';
			if(parseInt(rongqi.style.top) == -396) {
				removeTransition();
				rongqi.style.top = 0;
			}
			//			console.log(i);
		}, 3000)
	}
	autoshow()
})();
/*话费&&机票&&保险tab面板功能实现*/
(function() {
//	var xiangqing= document.getElementById("xiangqing");
//	var xqNeirong = document.getElementById("xqNeirong");
//	console.log(xiangqing);
//	console.log(xqNeirong);
//		xiangqing.onmouseover = function() {
//			xqNeirong.style.display = "block";
//		}
//		xiangqing.onmouseout = function() {
//			xqNeirong.style.display = "none";
//		}
//	for(var k = 0; k < moreMessage.length; k++) {
//		moreMessage[k].index = k;
//		moreMessage[k].onmouseover = function() {
//			message[this.index].style.display = "block";
//		}
//		moreMessage[k].onmouseout = function() {
//			message[this.index].style.display = "none";
//		}
//	}
	/*
	 *充话费选项卡下对应的4个面板切换
	 */
	/*话费对应的容器*/
	var huaTab = document.getElementsByClassName("max_tabcontainer")[0];
	var jiTab = document.getElementsByClassName("max_tabcontainer")[1];
	var cheTab = document.getElementsByClassName("max_tabcontainer")[2];
	/*form表单容器*/
	var huafei = document.getElementById("huafei");
	var jipiao = document.getElementById("jipiao");
	var chexian = document.getElementById("chexian");
	
	//	console.log(jipiao);
	/*四个li选项*/
	var hua_lis = huaTab.getElementsByTagName("ul")[0].getElementsByTagName("li");
	var ji_lis = jiTab.getElementsByTagName("ul")[0].getElementsByTagName("li");
	var che_lis = cheTab.getElementsByTagName("ul")[0].getElementsByTagName("li");
	console.log(che_lis);
	/*得到所需要的小logo 即话费 游戏 车险   */
	var logos=document.getElementsByClassName("needed_logo");
	console.log(logos);
	/*找到小logo对应的最大tab容器*/
	var tabcontainers=document.getElementsByClassName("max_tabcontainer");
	console.log(tabcontainers);
	/*得到关闭按钮*/
	
	var close=document.getElementsByClassName("close_logo");
	console.log(close);
	for(var j=0;j<close.length;j++){
		close[j].index=j;
		close[j].onclick=function(){
			tabcontainers[this.index].style.display="none";
		}
	}
	/*为三个小图标添加鼠标移入事件*/
	for(var x=0;x<logos.length;x++){
		logos[x].index=x;
		logos[x].onmouseover=function(){
			for(var k=0;k<logos.length;k++){
				tabcontainers[k].style.display='none';
			}
			tabcontainers[this.index].style.display="block";
		}
	}
	/*
	 *充话费面板对应的sigeform切换
	 */
	for(var a = 0; a < hua_lis.length; a++){
		hua_lis[a].index = a;
		hua_lis[a].onmouseover = function() {
			for(var i = 0; i < hua_lis.length; i++) {
				hua_lis[i].className = '';
			}
			this.className = 'sec_active';
			huafei.style.transform = "translate(" + -288 * this.index + "px)";
		}
	}
	/*
	 *机票面板对应的sigeform切换
	 */
	for(var b = 0; b < ji_lis.length; b++) {
		ji_lis[b].index = b;
		ji_lis[b].onmouseover = function() {
			for(var i = 0; i < ji_lis.length; i++) {
				ji_lis[i].className = '';
			}
			this.className = 'sec_active';
			jipiao.style.transform = "translate(" + -288 * this.index + "px)";
		}
	}
	/*
	 *车险面板对应的sigeform切换
	 */
	for(var c = 0; c < che_lis.length; c++) {
		che_lis[c].index = c;
		che_lis[c].onmouseover = function() {
			for(var i = 0; i < che_lis.length; i++) {
				che_lis[i].className = '';
			}
			this.className = 'sec_active';
			chexian.style.transform = "translate(" + -288 * this.index + "px)";
		}
	}
})();

/*实现倒计时的功能*/
(function(){
	var countDown_box=document.getElementById("countDown_box");
	var _time=countDown_box.getElementsByClassName("time");
	console.log(_time);
	setInterval(function(){
			var curent=new Date();
			var future=new Date('2018/6/27');
			var cha=future.getTime()-curent.getTime();
			var _hour=Math.floor(cha/(60*60*1000));
			cha=cha%(60*60*1000);
			var _minute=Math.floor(cha/(60*1000));
			cha=cha%(60*1000);
			var _second=Math.floor(cha/1000);
			if(_hour<10){
				_time[0].innerHTML='0'+_hour;
			}else{
				_time[0].innerHTML=_hour;
			}
			if(_minute<10){
				_time[1].innerHTML='0'+_minute;
			}else{
				_time[1].innerHTML=_minute;
			}
			if(_second<10){
				_time[2].innerHTML='0'+_second;
			}else{
				_time[2].innerHTML=_second;
			}
		},1000)	
})();
/*
 *楼层滚动效果实现
 */
$(function(){
	var floor=document.getElementById("floor");
	console.log(floor);
	window.onscroll=function(){
		var top=document.documentElement.scrollTop;
//		console.log(document.documentElement.scrollTop);
		if(top>450){
			floor.style.position="fixed";
			floor.style.top='0';
		}else{
			floor.style.position="absolute";
			floor.style.top="450px";
		}
	}
	/*回到顶部*/
	$('#floor>li').eq(6).click(function(){
		var top=$('header').offset().top;
		$('html').scrollTop(top);
		$('html').animate({scrollTop:top},500);
	})
	$('#floor>li').click(function(){
		var index=$(this).index()-1;
	    var top=$('.floorName').eq(index).offset().top;
	    $('html').scrollTop(top);
	    $('html').animate({scrollTop:top},500);
	})
	var heights=[];
	$('.floorName').each(function(){
		heights.push($(this).offset().top);
		console.log(heights);
	})
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		var index=null;
		for(var i=0;i<heights.length;i++){
			if(top>=heights[i]&&top<=heights[i+1]){
				index=i+1;
				$('#floor>li').eq(index).css({'background':'orange'}).siblings().css('background','white')
			}else if(top>=heights[heights.length-1]){
				index=heights.length;
				$('#floor>li').eq(index).css('background','orange').siblings().css('background','white')
			}
		}
	})
})
	

