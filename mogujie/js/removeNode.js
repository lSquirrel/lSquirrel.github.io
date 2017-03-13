function removeNode(obj,now,clickElem){
	obj[now].parentNode.removeChild(obj[now]);
	//获取当前需要删除的元素的下标，然后把后面元素的下标都减1
	for(var i=now+1;i<clickElem.length+1;i++){
		clickElem[i-1].index=i-1;
	}
}