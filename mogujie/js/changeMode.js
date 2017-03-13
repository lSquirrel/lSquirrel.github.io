if(window.addEventListener){
	window.addEventListener('load',changeModeFun,false);
}else{
	window.attachEvent('onload',changeModeFun);
}

function changeModeFun(){
	var bigScanPic=$(".scan_pic")[0];
	var scanArrow=$(".scan_arrow")[0];
	$(".scan")[0].onmouseover=function(){
		changeMode(bigScanPic,"block");
		scanArrow.className+=" hover";
		getDistance(bigScanPic,$(".scan")[0],-48);
	}
	$(".scan")[0].onmouseout=function(){
		changeMode(bigScanPic,"none");
		scanArrow.className=scanArrow.className.replace(" hover","");
	}
	
	
	
	
	
	function changeMode(elem,mode){
		elem.style.display=mode;
	}
	function getDistance(elem,parEle,dis){
		//offsetLeft:元素距离左边的距离
		elem.style.left=parEle.offsetLeft+dis+"px";
		//offsetTop:元素距离上边的距离
		elem.style.top=parEle.offsetTop+parEle.offsetHeight+"px";
	}
}
