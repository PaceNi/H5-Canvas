window.onload=init;
function $(id){return document.getElementById(id);}
function  init() 
{
	//var c=document.getElementById("myCanvas");
	var ctx=$("can").getContext("2d");
	ctx.save();//保存原图
	$("bt1").onclick=sourceAtop;
	$("bt2").onclick=sourceIn;
	$("bt3").onclick=sourceOut;
	$("bt4").onclick=lighter;
	$("bt5").onclick=xor;

	$("bt6").onclick=function(){//clear
		ctx.restore();
		ctx.clearRect(0,0,$("can").width,$("can").height);
		ctx.save();
	}
}
function sourceAtop()//sourceAtop
{
	var ctx=$("can").getContext("2d");
	var img=$("pic");
	ctx.clearRect(0,0,400,400);//清除原图
	ctx.beginPath();//画圆
	ctx.fillStyle="#9AEEE5"
	ctx.arc(200,200,150,0,2*Math.PI,true);
	ctx.closePath();
	ctx.fill();
	ctx.globalCompositeOperation="source-atop";		
	ctx.drawImage(img,20,100,img.width*0.6,img.height*0.625);
	ctx.fillStyle="#C57D5A";
	ctx.textAlign="center";
	ctx.font="20px Georgia";
	ctx.fillText("source-atop",200,80);
}
function sourceIn(){//sourceIn
	var ctx=$("can").getContext("2d");
	var img=$("pic");
	ctx.clearRect(0,0,400,400);//清除原图
	ctx.beginPath();//画圆
	ctx.fillStyle="#9AEEE5"
	ctx.arc(200,200,150,0,2*Math.PI,true);
	ctx.closePath();
	ctx.fill();
	ctx.globalCompositeOperation="source-in";
	ctx.drawImage(img,20,100,img.width*0.6,img.height*0.625);
	ctx.globalCompositeOperation="source-over";	
	ctx.fillStyle="#C57D5A";
	ctx.textAlign="center";
	ctx.font="20px Georgia";
	ctx.fillText("source-in",200,80);
}
function sourceOut(){//sourceOut
	var ctx=$("can").getContext("2d");
	var img=$("pic");
	ctx.clearRect(0,0,400,400);//清除原图
	ctx.beginPath();//画圆
	ctx.fillStyle="#9AEEE5"
	ctx.arc(200,200,150,0,2*Math.PI,true);
	ctx.closePath();
	ctx.fill();
	ctx.globalCompositeOperation="source-out";		
	ctx.drawImage(img,20,100,img.width*0.6,img.height*0.625);	
	ctx.globalCompositeOperation="source-over";	
	ctx.fillStyle="#C57D5A";
	ctx.textAlign="center";
	ctx.font="20px Georgia";
	ctx.fillText("source-out",200,80);
}
function lighter(){//Lighter
	var ctx=$("can").getContext("2d");
	var img=$("pic");
	ctx.clearRect(0,0,400,400);//清除原图
	ctx.beginPath();//画圆
	ctx.fillStyle="#9AEEE5"
	ctx.arc(200,200,150,0,2*Math.PI,true);
	ctx.closePath();
	ctx.fill();
	ctx.globalCompositeOperation="lighter";		
	ctx.drawImage(img,20,100,img.width*0.6,img.height*0.625);	
	ctx.globalCompositeOperation="source-over";	
	ctx.fillStyle="#C57D5A";
	ctx.textAlign="center";
	ctx.font="20px Georgia";
	ctx.fillText("lighter",200,80);
}
function xor(){//Xor
	var ctx=$("can").getContext("2d");
	var img=$("pic");
	ctx.clearRect(0,0,400,400);//清除原图
	ctx.beginPath();//画圆
	ctx.fillStyle="#9AEEE5"
	ctx.arc(200,200,150,0,2*Math.PI,true);
	ctx.closePath();
	ctx.fill();
	ctx.globalCompositeOperation="xor";		
	ctx.drawImage(img,20,100,img.width*0.6,img.height*0.625);
	ctx.globalCompositeOperation="source-over";	
	ctx.fillStyle="#C57D5A";
	ctx.textAlign="center";
	ctx.font="20px Georgia";
	ctx.fillText("xor",200,80);
}



