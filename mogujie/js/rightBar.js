if(window.addEventListener){
	window.addEventListener('load',rightbar,false);
}else{
	window.attachEvent('onload',rightbar);
}
function rightbar(){
	var divs=$(".slideBar_item");
	var nums=$(".slideBar_num");
	for(var i=0;i<divs.length;i++){
		divs[i].index=i;
		divs[i].onmouseover=function(){
			divs[this.index].style.backgroundColor="#ef2f23";
			//判断是否是undefined，不是undefined再修改样式
			if(nums[this.index]!=undefined){
				nums[this.index].style.backgroundColor="#fff";
				nums[this.index].style.color="#ef2f23";
			}
		}
		divs[i].onmouseout=function(){
			divs[this.index].style.backgroundColor="";
			if(nums[this.index]!==undefined){
				nums[this.index].style.color="#fff";
				nums[this.index].style.backgroundColor="#ef2f23";
			}
		}
	}
	

	//返回顶部图标显示
	window.onscroll=function(){
		if(document.body.scrollTop>0){
			$(".slideBottom")[0].style.display="block";
		}
		else if(document.body.scrollTop==0){
			$(".slideBottom")[0].style.display="none";
		}
	}
	
	//返回顶部，速度由快到慢，是缓冲运动
	var timer=null;
	var toTop=$(".totop")[0];
	toTop.onclick=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			var height=document.documentElement.scrollTop || document.body.scrollTop;
			var speed=Math.floor(-height/6);
			
			if(document.body.scrollTop){
				document.body.scrollTop = height+speed;
			}else{
				document.documentElement.scrollTop = height+speed;
			}
			
			if(height==0) {
				clearInterval(timer);
			}
		},30);
	}
}
	
	
	

