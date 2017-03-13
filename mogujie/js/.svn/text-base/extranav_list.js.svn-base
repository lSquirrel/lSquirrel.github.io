var num=0;
var top;
var extr_sels=$(".extranav_list")[0].getElementsByTagName("li");
var extrSelContent=$(".panel_item");
for(var i=0;i<extr_sels.length;i++){
	extr_sels[i].index=i;
	extrSelContent[i].top=extrSelContent[i].offsetTop;
	extr_sels[i].onmouseover=function(){
		extr_sels[num].className="";
		extr_sels[this.index].className="extr_sel";
		num=this.index;
	}
	extr_sels[i].onclick=function(){
		if(this.index==3){
			extrSelContent[this.index].top=16520;
		}
		if(this.index==4){
			extrSelContent[this.index].top=20080;
		}
		if(this.index==5){
			extrSelContent[this.index].top=21053;
		}
		if(this.index==6){
			extrSelContent[this.index].top=21532;
		}
		if(document.body.scrollTop){
			document.body.scrollTop=extrSelContent[this.index].top-100;
		}else if(document.documentElement.scrollTop){
			document.documentElement.scrollTop=extrSelContent[this.index].height;
		}
	}
}

