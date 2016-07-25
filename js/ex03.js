window.onload=init;
function $(id){return document.getElementById(id);}
function  init() 
{
	//var c=document.getElementById("myCanvas");
	var ctx=$("can").getContext("2d");
	ctx.arc(200,200,200,0,2*Math.PI,true);
	ctx.clip();
	$("pic").onclick=function(e){
		var x=e.offsetX;
		var y=e.offsetY;
		ctx.clearRect(0,0,400,400);
		if(x>535) x=535;
		if(y>350) y=350;
		if(x<64) x=64;
		if(y<73) y=73;
		ctx.drawImage($("pic"),x*1.7-90,y*1.7-120,200,200,0,0,400,400);
	}
}