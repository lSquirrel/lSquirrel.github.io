//购物车商品删除和数字计算
var dels=$(".del");
var shoppingChilds=$("#shopping_child").getElementsByTagName("li");
var nums=$(".num");
var delcont=$(".delcont");
var shopTitles=$(".shopTitle");
var shopInfos=$(".shopInfo");
for(var i=0;i<shopTitles.length;i++){
	shopTitles[i].index=i;
	shopTitles[i].childs=$(".same_shop"+i);
	shopTitles[i].price=$(".priceCounts"+i);
}
for(var i=0;i<dels.length;i++){
	dels[i].index=i;
	delcont[i].index=i;
	shoppingChilds[i].index=i;
	shopInfos[i].index=i;
	dels[i].onclick=function(){
		removeNode(shoppingChilds,this.index,dels);
		if(shopTitles[this.index].childs.length<=1){
			removeNode(shopTitles,this.index,delcont);
		}
		removeNode(shopInfos,this.index,delcont);
		shoppingCartNum();
	}
	delcont[i].onclick=function(){
//			shopTitles[now].parentNode.removeChild(shopTitles[now]);  
//			shopInfos[now].parentNode.removeChild(shopInfos[now]);
//			for(var i=now+1;i<delcont.length+1;i++){
//				delcont[i-1].index=i-1;
//			}
		alert(this.index,"小主真的想好了吗，如果是不小心，请点击取消或者右上角");
	}
}
function shoppingCartNum(){
	var count=parseInt(nums[0].innerHTML);
	count--;
	for(var j=0;j<nums.length;j++){
		nums[j].innerHTML=count;
	}
}

window.alert=function(num,str){
	//创建div,后面的透明层
	var bigDiv=document.createElement("div");
	bigDiv.id="bigDiv";
//	var h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
//	bigDiv.style.height=h+"px";
	try{
		//IE不支持
		bigDiv.style.background="rgba(0,0,0,.5)";
	}catch(e){   //e不可缺少
		bigDiv.style.background="#000";
		//IE8
		bigDiv.style.filter="alpha(opacity:50)";
	}
	document.body.appendChild(bigDiv);
	var centerDiv=document.createElement("div");
	centerDiv.id="centerDiv";
	var strHtml='<h5 class="al_title">提示</h5>'+'<a onclick="clo()" href="javascript:;" class="al_cls"></a>';
	strHtml+='<div class="al_pop_box">';
	strHtml+='<div class="al_alert">';
	strHtml+='<p class="al_cnt">'+str+'</p>'+'<a onclick="ok()" href="javascript:;" class="al_btn">确定</a>'+'<a onclick="clo()" href="javascript:;" class="al_btn close">取消</a>';
	strHtml+='</div></div>';
		centerDiv.innerHTML=strHtml;
		document.body.appendChild(centerDiv);
		this.clo=function(){
			console.log(bigDiv.parentNode)
			bigDiv.parentNode.removeChild(bigDiv);
			centerDiv.parentNode.removeChild(centerDiv);
		}
		this.ok=function(){
			//判断该店铺内是否还有其他商品，如果有，不删除标题
			removeNode(shoppingChilds,num,dels);
			if(shopTitles[num].childs.length<=1){
				removeNode(shopTitles,num,delcont);
			}
			removeNode(shopInfos,num,delcont);
			shoppingCartNum();
			clo();
		}
	}




//购物车数量和价格计算
var add=$(".countNum_add");
var reduce=$(".countNum_reduce");
var inp=$(".countNum_inp");
var price=$(".priceCounts");
for(var i=0;i<add.length;i++){
	add[i].index=i;
	reduce[i].index=i;
	inp[i].index=i;
	//保存价格
	price[i].singPrice=price[i].innerHTML;
	//点击+号，inp数量加1；price价格计算，reduce去掉disable的属性
	add[i].onclick=function(){
		var value=parseInt(inp[this.index].value);
		value+=1;
		if(value>1){
			reduce[this.index].className=reduce[this.index].className.replace("disabled","");
		}
		inp[this.index].value=value;
		price[this.index].innerHTML=(value*price[this.index].singPrice).toFixed(2);
	}
	reduce[i].onclick=function(){
		var value=parseInt(inp[this.index].value);
		//防止除数变为0
		if(value>1){
			value-=1;
			price[this.index].innerHTML=(price[this.index].innerHTML-price[this.index].singPrice).toFixed(2);
		}
		if(value<=1){
			reduce[this.index].className+=" disabled";
		}
		inp[this.index].value=value;
	}
}

 


//去付款
//var selAll=$(".sel_all");           //头和尾的多选
//var shopSelAll=$(".sel_shopall");   //店铺前的多选
//var checkboxs=$(".select");        //商品前的多选框
//var paybtn=$("#payBtn");    //去付款按钮
//var allcheck=$(".typeCheck");
//var priceCount=$(".totalMoney")[0];   //总价
////
//for(var i=0;i<checkboxs.length;i++){
//	checkboxs[i].index=i;
//	//有问题
//	checkboxs[i].onclick=function(){
//		if(checkboxs[this.index].checked===true){
//			changePayBtn("payBtn_disable","payBtn_able");
//			priceCount.innerHTML=(parseFloat(priceCount.innerHTML)+parseFloat(price[this.index].innerHTML)).toFixed(2);
//			for(var i=0;i<$(".select"+this.index).length;i++){
//				if($(".select"+this.index)[i].checked===false){
//					return;
//				}
//			}
//			checkAll($(".sel_shopall")+this.index);
//		}else{
//			priceCount.innerHTML=(parseFloat(priceCount.innerHTML)-parseFloat(price[this.index].innerHTML)).toFixed(2);
//			for(var i=0;i<checkboxs.length;i++){
//				if(checkboxs[i].checked===true){
//					return;
//				}
//			}
//			changePayBtn("payBtn_able","payBtn_disable");
//		}
//	}
//}
////只要有一个checkbox被选中，去付款就显示出来，并且总价格变为选择的那个物品的价钱
//
//
//for(var i=0;i<shopSelAll.length;i++){
//	shopSelAll[i].index=i;
//	shopSelAll[i].onclick=function(){
//		if(shopSelAll[this.index].checked===true){
//			checkAll($(".select"+this.index));
//			changePayBtn("payBtn_disable","payBtn_able");
//			calcPrice(this.index,1);
//		}else if(shopSelAll[this.index].checked===false){
//			notcheckAll($(".select"+this.index));
//			calcPrice(this.index,-1);
//			for(var i=0;i<checkboxs.length;i++){
//				if(checkboxs[i].checked===true){
//					return;
//				}
//			}
//			changePayBtn("payBtn_able","payBtn_disable");
//		}
//	}
//}
//for(var i=0;i<selAll.length;i++){
//	selAll[i].onclick=function(){
//		
//	}
//}
////全选
//function checkAll(obj){
//	for(var i=0;i<obj.length;i++){
//		obj[i].checked = true;
//	}
//}
////全不选
//function notcheckAll(obj){
//	for(var i=0;i<obj.length;i++){
//		obj[i].checked = false;
//	}
//}
//改变去付款
//function changePayBtn(pre,now){
//	paybtn.className=paybtn.className.replace(pre,now);
//}
//function calcPrice(num,calc){
//	var length=shopTitles[num].childs.length;
//	for(var i=0;i<length;i++){
//		priceCount.innerHTML=(parseFloat(priceCount.innerHTML)+calc*parseFloat(shopTitles[num].price[i].innerHTML)).toFixed(2);
//	}
//}
