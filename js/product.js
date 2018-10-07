/*放大镜效果实现*/
(function() {
	var maxBox = document.getElementById("magnifying_maxBox");
	var glass = document.getElementById("glass");
	var smallBox = document.getElementsByClassName("magnifying_small")[0];
	var bigBox = document.getElementsByClassName("magnifying_big")[0];
	var bigImg = bigBox.getElementsByTagName("img")[0];
	var picList = document.getElementById("magnifying_picList");
	var piclis = picList.getElementsByTagName("li");
	var colorSelect = document.getElementsByClassName("colorSelect")[0];
	var colors = colorSelect.getElementsByTagName("a");
	var shirtNum = document.getElementsByClassName("shirtNum")[0];
	var showNum = shirtNum.getElementsByTagName("span")[1];
	var sign = document.getElementsByClassName("sign")[0];
	var plus = sign.getElementsByTagName("span")[0];
	var minus = sign.getElementsByTagName("span")[1];
	console.log(plus);
	console.log(minus);
	console.log(picList);
	/*点击加减号控制数量*/
	var num = 0;
	plus.onclick = function() {
		num++;
		showNum.innerHTML = num;
	}
	minus.onclick = function() {
		num--;
		if(num < 0) {
			num = 0;
		}
		showNum.innerHTML = num;
	}
	/*颜色选择点击切换图片*/
	for(var a = 0; a < colors.length; a++) {
		colors[a].onclick = function() {
			smallBox.lastElementChild.src = this.firstElementChild.src;
		}
	}

	smallBox.onmousemove = function(e) {
		var e = e || window.event;
		glass.style.display = "block";
		bigBox.style.display = "block";

		var oleft = e.pageX - smallBox.offsetLeft - glass.offsetWidth / 2;
		var otop = e.pageY - smallBox.offsetTop - glass.offsetHeight / 2;
		if(oleft < 0) {
			oleft = 0;
		} else if(oleft > smallBox.offsetWidth - glass.offsetWidth) {
			oleft = smallBox.offsetWidth - glass.offsetWidth;
		}
		if(otop < 0) {
			otop = 0;
		} else if(otop > smallBox.offsetHeight - glass.offsetHeight) {
			otop = smallBox.offsetHeight - glass.offsetHeight;
		}
		var scaleX = bigImg.offsetWidth * (oleft / smallBox.offsetWidth);
		var scaleY = bigImg.offsetHeight * (otop / smallBox.offsetHeight);
		glass.style.left = oleft + 'px';
		glass.style.top = otop + 'px';
		bigImg.style.left = -scaleX + 'px';
		bigImg.style.top = -scaleY + 'px';
		bigImg.src = smallBox.lastElementChild.src;
	}
	smallBox.onmouseout = function() {
		glass.style.display = "none";
		bigBox.style.display = "none";
	}
	for(var i = 0; i < piclis.length; i++) {
		piclis[i].index = i;
		piclis[i].onmouseover = function() {
			console.log(this.firstElementChild.src)
			smallBox.lastElementChild.src = this.firstElementChild.src;
		}
	}

})();
(function() {
	var sidebar = document.getElementById("sidebar");
	console.log(sidebar);
	var animation = sidebar.getElementsByClassName("animation");
	//	var hidebar = animation.getElementsByClassName("hide_bar");
	console.log(animation);
	for(var b = 0; b < animation.length; b++) {
		animation[b].index = b;
		animation[b].onmouseover = function() {
			var node = this.firstElementChild;
			node.style.transition ='';
			node.style.transform = "";
			node.style.display = "block";
			var timer = setTimeout(function() {
				node.style.transition = "all 1s ease 0s";
				node.style.transform = "translateX(50px)";
			}, 100);
		}
		animation[b].onmouseout = function() {
			var node = this.firstElementChild;
			node.style.transition ='';
			node.style.transform = "";
			
			node.style.transition = "all 1s ease 0s";
			node.style.transform = "translateX(0px)";
			var timer = setTimeout(function() {
				node.style.display = "none";
			}, 300);
		}
	}
})();
(function(){
	var pubu=document.getElementsByClassName("pubu")[0];
	var uls=pubu.getElementsByTagName("ul");
	console.log(uls);
	var dh=document.documentElement.offsetHeight;
	function createLi(oul){
			var newLi=document.createElement("li");
			newLi.style.height="240px";
			newLi.style.backgroundImage='url(img/pubu/'+bg()+'.jpg)';
			newLi.style.backgroundSize="100% 100%";
			oul.appendChild(newLi);
	}
	function state(){
		for(var i=0;i<3;i++){
			//在uls中找到最短的ul的高
			var ArrHeight=[uls[0].offsetHeight,uls[1].offsetHeight,uls[2].offsetHeight];
			//console.log(ArrHeight);
			
			//找到最短的uls的下标 然后继续添加li节点
			var index=mini(ArrHeight);
			console.log(index);
			
			//遍历添加li节点
			//createLi(uls[i],num++);
			//调用li函数 给最短ul添加li
			createLi(uls[index]);
		}
	}
	state()
	//声明最短ul的函数 返回下标
	function mini(arr){
		//数组中任意一个
		var mh=arr[0]; 
		//遍历判断
		for(var i=0;i<arr.length;i++){
			//找到数组中最短的
			if(arr[i]<mh){
				mh=arr[i];
			}
		}
		//反回的是下标
		return  arr.indexOf(mh);
	}
	//调用函数 初始张数
	state();
	function bg(){
		return Math.floor(Math.random()*107)+1;
	}
	window.onscroll=function(){
		//判断滚动条到底部
		//html高度-可视区域的高度==滚动的距离
		//html总的高度
		var dh= document.documentElement.offsetHeight;
		console.log('html总的高度'+dh)
		//获取可视区域高度
		var ch=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
		console.log('可视区域高度'+ch);
		//获取滚动的距离
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		console.log('滚动的距离'+st);
		
		//判断到底
		if(dh-ch<=st){
			//调用函数
			state();
		}
	}
})();
