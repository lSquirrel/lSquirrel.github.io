if(window.addEventListener){
	window.addEventListener('load',navHover,false);
}else{
	window.attachEvent('onload',navHover);
}
function navHover(){
	var navlis=$(".navli");
	var nav_childs=$(".nav_child");
	var left;
	for(var i=0;i<navlis.length;i++){
		navlis[i].index=i;
		nav_childs[i].index=i;
		navlis[i].onmouseover=function(){
			if(navlis[this.index].id==="shopping"){
				left=-80;
			}else{
				left=0;
			}
			changeMode(nav_childs[this.index],"block");
			getDistance(nav_childs[this.index],this,left);
		}
		navlis[i].onmouseout=function(){
			changeMode(nav_childs[this.index],"none");
		}
		nav_childs[i].onmouseover=function(){
			changeMode(nav_childs[this.index],"block");
		}
		nav_childs[i].onmouseout=function(){
			changeMode(nav_childs[this.index],"none");
		}
	}

	function changeMode(elem,mode){
		elem.style.display=mode;
	}
	function getDistance(elem,parEle,disc){
		//offsetLeft:元素距离左边的距离
		elem.style.left=parEle.offsetLeft+disc+"px";
		//offsetTop:元素距离上边的距离
		elem.style.top=parEle.offsetHeight+"px";
	}
	
	var lihovers=document.getElementsByClassName("lihover");
	for(var i=0;i<lihovers.length;i++){
		lihovers[i].index=i;
		lihovers[i].onmouseover=function(){
			lihovers[this.index].style.backgroundColor="#E4E4E4";
		}
		lihovers[i].onmouseout=function(){
			lihovers[this.index].style.backgroundColor="";
		}
	}
}