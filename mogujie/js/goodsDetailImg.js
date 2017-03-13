//实现img:hover时样式变化和大图改变
//右边图片添加点击事件：右边添加属性select，把大图路径改变一下
//左边图片hover时透明度变化，
if(window.addEventListener){
	window.addEventListener('load',goodsDetailFun,false);
}else{
	window.attachEvent('onload',goodsDetailFun);
}

function goodsDetailFun(){
	//获取元素
var bigImg=$(".bigImg_item")[0];
var smallImgsLeft=$(".imghover");
var smallImgsRight=$(".style_item");
var buyCart=$("#buyCart");
var buyParentNode=$(".contentall")[0].parentNode;

//给每个元素添加事件
var rightLength=smallImgsRight.length;
for(var i=0;i<rightLength;i++){
	smallImgsRight[i].index=i;
	smallImgsRight[i].onclick=function(){
		setAttr(smallImgsRight,this.index,rightLength,"select");
	}
}

var leftLength=smallImgsLeft.length;
for(var i=0;i<leftLength;i++){
	smallImgsLeft[i].index=i;
	smallImgsLeft[i].onmouseover=function(){
		setAttr(smallImgsLeft,this.index,leftLength,"chose");
	}
}

//改变大图路径
function setAttr(arr,num,length,attr){
	var thisImg=arr[num];
	var index=-1;
	if(thisImg.className.indexOf(attr,index+1)==-1){
		//循环遍历数组所有的元素，如果有其他的元素有select属性，去掉select属性
		for(var i=0;i<length;i++){
			if(arr[i].className.indexOf(attr,index+1)>-1){
				arr[i].className=arr[i].className.replace(attr,"");
			}
		}
		//去掉其他元素的select属性后，在当前元素上添加select属性。
		thisImg.className+=" "+attr;
		bigImg.src="img/goodsDetails/topBigImg"+(num+1)+"_468x468.jpg";
		//判断是否点击了加入购物车，点击了以后才显示
		if(buyParentNode.className.indexOf("goods_wrap")>-1){
			$(".goodsinfo_action")[0].style.display="block";
		}
	}else{
		thisImg.className=thisImg.className.replace(attr,"");
	}
}

	var leftArrow=$(".left_Btn")[0];
	var rightArrow=$(".right_Btn")[0];
	var imglist=$(".img_list")[0];
	var imgbox=$(".img_box")[0];
	rightArrow.onclick=function(){
		changeModes(leftArrow,this);
		move(imglist,"left",-imgbox.offsetWidth);
	}
	leftArrow.onclick=function(){
		changeModes(rightArrow,this);
		move(imglist,"left",0);
	}
	function changeModes(elem,curr){ 
		elem.style.display="block";
		curr.style.display="none";
	}
	
	var buyCarts=$(".cart_slide_title");
	for(var i=0;i<buyCarts.length;i++){
		buyCarts[i].onclick=function(){
			if(document.body.scrollTop){
				document.body.scrollTop=$("#shop_nav").offsetTop;
			}else if(document.documentElement.scrollTop){
				document.documentElement.scrollTop=$("#shop_nav").offsetTop;
			}
			buyParentNode.className="goods_wrap";
		}
	}
	buyCart.onclick=function(){
		buyParentNode.className="goods_wrap";
	}
	$(".goodsinfo_close")[0].onclick=function(){
		buyParentNode.className="";
		$(".goodsinfo_action")[0].style.display="none";
	}
	
	
	
	
	function move(obj,attr,iTarget,fn){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			if(attr==="opacity"){
				var icur=parseFloat(getStyle(obj,attr))*100;
			}else{
				var icur=parseInt(getStyle(obj,attr));//得到当前的到的参数,及元素现在的样式
			}
			var speed=(iTarget-icur)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(icur===iTarget){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}else{
				if(attr==="opacity"){
					obj.style.opacity=(icur+speed)/100;
					obj.style.filter="alpha(opacity:"+(icur+speed)+")";
				}else{
					obj.style[attr]=icur+speed+"px";
				}
			}
		},30);
	}
	
	//用于获取元素的样式的固定写法
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,false)[attr];
		}
	}
}
