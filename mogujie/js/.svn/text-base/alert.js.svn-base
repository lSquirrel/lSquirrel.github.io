/*修改alert弹出框的默认样式*/
window.alert=function(content){
	//创建弹框div
	var vpWrap=document.createElement("div");
	vpWrap.className="vp_wrap";
	vpWrap.id="vp_wrap";
	//给弹框div添加内容
	var strHtml='<h5 class="vp_t">提示</h5>'+'<a onclick="ok()" href="javascript:;" class="vp_cls"></a>';
	strHtml+='<div class="v_pop_box">';
	strHtml+='<div class="vp_alert">';
	strHtml+='<p class="vp_cnt">'+content+'</p>'+'<a onclick="ok()" href="javascript:;" class="vp_btn">确定</a>';
	strHtml+='</div></div>';
	vpWrap.innerHTML=strHtml;
	document.body.appendChild(vpWrap);
	//给弹框div改变位置，必须写在这，只要创建了div，才可以得到其宽高
	vpWrap.style.marginLeft=-(vpWrap.offsetWidth)/2+"px";
	vpWrap.style.marginTop=-(vpWrap.offsetHeight)/2+"px";
	//给确定按钮和关闭按钮添加移除事件
	this.ok=function(){
		vpWrap.parentNode.removeChild(vpWrap);
	}
	//当弹出框时，确定按钮获得焦点
	$(".vp_btn")[0].focus();
}
