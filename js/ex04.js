window.onload=init;
function $(id){return document.getElementById(id);}
var flag=0;
function  init() 
{
	//var c=document.getElementById("myCanvas");
	var ctx=$("can").getContext("2d");
	var img=$("pic");
	var n=0;
	var timeHandle;
	$("start").onclick=function(){
		if(flag==0){//第一次点击start运行
			timeHandle=window.setInterval(function(){
			ctx.drawImage(img,n*200,0,200,300,100,50,200,300);
			n++;
			if(n>=7){
				n=0;
				}
			},100);
		}
			flag=1;
	}
	$("stop").onclick=function(){
		window.clearInterval(timeHandle);
		flag=0;
	}
}