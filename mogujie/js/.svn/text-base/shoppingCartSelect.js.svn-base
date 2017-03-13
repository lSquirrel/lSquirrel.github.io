var selectAll=$(".quanxuan");//总的全选按钮
var typeChecks=$(".typeCheck");//总的全选按钮下的所有的子按钮
var shopAlls=$(".shop_all");//店铺全选按钮
var shopShang=$(".shop_shang");//店铺子按钮的容器
var priceCounts=$(".priceCounts");

for(var i=0;i<selectAll.length;i++){
	selectAll[i].index=i;
	selectAll[i].onclick=function(){
		selectSome(selectAll[this.index],typeChecks,1);
	}
}
for(var j=0;j<shopAlls.length;j++){
	shopAlls[j].index=j;
	shopAlls[j].addEventListener("click",function(){
		var selectThis=shopShang[this.index].getElementsByTagName("input");
		selectSome(shopAlls[this.index],selectThis);
	},false);
}
function selectSome(check,checkChild,total){//参数一：总的；参数二：选择总的后被选中的子input
	if(check.checked){
		for(var i=0;i<checkChild.length;i++){
			checkChild[i].checked="checked";
			if(total){
				var add=0;
				for(var a=0;a<priceCounts.length;a++){
					add+=parseFloat(priceCounts[a].innerHTML);
				}
				$(".totalMoney")[0].innerHTML=add.toFixed(2);
			}
		}
	}else{
		for(var i=0;i<checkChild.length;i++){
			checkChild[i].checked="";
			$(".totalMoney")[0].innerHTML=0.00.toFixed(2);
		}
	}
}
//店铺一
var selectThis1=shopShang[0].getElementsByTagName("input");
for(var j=0;j<selectThis1.length;j++){
	selectThis1[j].index=j;
	selectThis1[j].addEventListener("click",function(){
		cancelSome(shopAlls[0],selectThis1,this.index);
	},false);
}
//店铺二
var selectThis2=shopShang[1].getElementsByTagName("input");
for(var j=0;j<selectThis2.length;j++){
	selectThis2[j].index=j;
	selectThis2[j].addEventListener("click",function(){
		cancelSome(shopAlls[1],selectThis2,this.index-1);//这个三是因为下面的shangpin这个数组产生的
	},false);
}
//店铺三
var selectThis5=shopShang[2].getElementsByTagName("input");
for(var j=0;j<selectThis5.length;j++){
	selectThis5[j].index=j;
	selectThis5[j].addEventListener("click",function(){
		cancelSome(shopAlls[2],selectThis5,this.index-2);//这个三是因为下面的shangpin这个数组产生的
	},false);
}
//店铺四
var selectThis6=shopShang[3].getElementsByTagName("input");
for(var j=0;j<selectThis6.length;j++){
	selectThis6[j].index=j;
	selectThis6[j].addEventListener("click",function(){
		cancelSome(shopAlls[3],selectThis6,this.index-3);//这个三是因为下面的shangpin这个数组产生的
	},false);
}
var selectThis3=shopAlls;
for(var j=0;j<selectThis3.length;j++){
	selectThis3[j].index=j;
	selectThis3[j].addEventListener("click",function(){
		cancelSome(selectAll[0],selectThis3,this.index);
		cancelSome(selectAll[1],selectThis3,this.index);
	},false);
}
var selectThis4=$(".shangpin");
console.log(selectThis4);
for(var j=0;j<selectThis4.length;j++){
	selectThis4[j].index=j;
	selectThis4[j].addEventListener("click",function(){
		cancelSome(selectAll[0],selectThis4,this.index);
		cancelSome(selectAll[1],selectThis4,this.index);
	},false);
}
function cancelSome(check,checkChild,childIndex){//参数一：全选按钮；参数二：全选按钮下的子按钮；参数三：当前子按钮的下标
	if(!checkChild[childIndex].checked){
		check.checked=false;
	}else{
		var cheChiNum=0;
		for(var i=0;i<checkChild.length;i++){
			if(checkChild[i].checked){
				cheChiNum++;
			}
		}
		if(cheChiNum===checkChild.length){
			check.checked=true;
		}
	}
}


