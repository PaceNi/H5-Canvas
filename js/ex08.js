/*
**@Pace
Canvas 动画
要求: (不允许使用其他如 CSS 动画实现)
(1)用 canvas 图形 API 实现一个图形动画(注意:不是图像)。例如:曲线动画、烟花效果、绽 放的花朵、类似自行车车轮转动的动画等;
(2)具有重置(重新开始)和清除(停止)功能; (3)附加功能:可以设置动画的参数,如速度、大小、数量等。
**
*/


window.onload=init;

function $(id){
	return document.getElementById(id);
}

var timeHandle=null;
var flag=0;
var img=new Image();
img.src="images/bg.jpg";

function init() {
	var ctx2=$("fengche").getContext("2d");
	var ctx3=$("text").getContext("2d");
	var ctx4=$("bg").getContext("2d");
	ctx4.drawImage(img,0,0,img.width,img.height);
	ctx2.save();
	ctx2.translate(200,200);
	ctx3.translate($("text").width/2,$("text").height/2);
	drawMove();
	drawStay();
	drawStay2();

	$("pause").onclick=	pause;
	$("clear").onclick= clear;
	$("start").onclick=	function(){	
		ctx4.drawImage(img,0,0,img.width,img.height);
	//clear();
		speed=$("speed").value;
		if(speed>9&&speed<301)//在规定速度范围内执行
		{
			if(flag==0){//第一次点击start运行
				timeHandle=window.setInterval(function()
				{
					ctx2.clearRect(-$("fengche").width/2,-$("fengche").height/2,$("can").width,$("fengche").height);
					ctx2.rotate(2*Math.PI*0.005);
					drawMove();	
				},1000/speed);
				drawStay();
				drawStay2();
			}
			flag=1;
		}else//不在速度范围内执行
			{	
				clear();
				var ctx3=$("text").getContext("2d");
					
				ctx3.textAlign="center";
				ctx3.font="30px Georgia";
				ctx3.fillText("速度超出规定范围,请重新输入!",0,0);
				flag=1;
			}	
	}

}

function clear(){//clear
	window.clearInterval(timeHandle);
    var ctx=$("can").getContext("2d");
    var ctx1=$("center").getContext("2d");
	var ctx2=$("fengche").getContext("2d");
	var ctx3=$("text").getContext("2d");
	var ctx4=$("bg").getContext("2d");
	ctx.restore();
	ctx.clearRect(0,0,$("can").width,$("can").height);
    ctx1.clearRect(0,0,$("center").width,$("center").height);
    ctx2.clearRect(-$("fengche").width/2,-$("fengche").height/2,$("fengche").width,$("fengche").height);
    ctx3.clearRect(-$("text").width/2,-$("text").height/2,$("text").width,$("text").height);
    ctx4.clearRect(0,0,$("bg").width,$("bg").height);
    ctx.save();
    flag=0;
}

function pause(){//pause
	window.clearInterval(timeHandle);
	flag=0;
}


function drawMove(){
	var ctx2=$("fengche").getContext("2d");
//------红叶子----
	ctx2.beginPath();
	ctx2.fillStyle="#ff327a";
	ctx2.moveTo(0,0);
	ctx2.lineTo(30,-30);
	ctx2.lineTo(60,0);
	ctx2.fill();
	ctx2.closePath();

	ctx2.beginPath();
	ctx2.fillStyle="#de0753";
	ctx2.moveTo(0,0);
	ctx2.quadraticCurveTo(30,-10,60,0);
	ctx2.quadraticCurveTo(80,30,60,60);
	ctx2.lineTo(0,0);
	ctx2.fill();
//-----蓝叶子-----
	ctx2.beginPath();
	ctx2.fillStyle="#197ef1";
	ctx2.moveTo(0,0);
	ctx2.lineTo(-30,-30);
	ctx2.lineTo(0,-60);
	ctx2.fill();
	ctx2.closePath();

	ctx2.beginPath();
	ctx2.fillStyle="#0b59b0";
	ctx2.moveTo(0,0);
	ctx2.quadraticCurveTo(-10,-30,0,-60);
	ctx2.quadraticCurveTo(30,-80,60,-60);
	ctx2.lineTo(0,0);
	ctx2.fill();
//-----绿叶子-----
	ctx2.beginPath();
	ctx2.fillStyle="#0acf21";
	ctx2.moveTo(0,0);
	ctx2.lineTo(30,30);
	ctx2.lineTo(0,60);
	ctx2.fill();
	ctx2.closePath();

	ctx2.beginPath();
	ctx2.fillStyle="#0a981a";
	ctx2.moveTo(0,0);
	ctx2.quadraticCurveTo(20,30,0,60);
	ctx2.quadraticCurveTo(-30,80,-60,60);
	ctx2.lineTo(0,0);
	ctx2.fill();
//-----黄叶子----
	ctx2.beginPath();
	ctx2.fillStyle="#f5ea40";
	ctx2.moveTo(0,0);
	ctx2.lineTo(-60,0);
	ctx2.lineTo(-30,30);
	ctx2.fill();
	ctx2.closePath();

	ctx2.beginPath();
	ctx2.fillStyle="#c6a909";
	ctx2.moveTo(0,0);
	ctx2.quadraticCurveTo(-30,20,-60,0);
	ctx2.quadraticCurveTo(-80,-30,-60,-60);
	ctx2.lineTo(0,0);
	ctx2.fill();
}

function drawStay(){
	var ctx=$("can").getContext("2d");
	//------杆子-----
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.lineWidth="8";
	ctx.moveTo(200,500);
	ctx.lineTo(200,200);
	ctx.stroke();
	
}

function drawStay2(){
	var ctx1=$("center").getContext("2d");
	//-----中心-----
	ctx1.beginPath();
	ctx1.fillStyle="white";
	ctx1.arc(200,200,6,0,2*Math.PI);//中心
	ctx1.fill();

	ctx1.beginPath();
	ctx1.fillStyle="#c9c9c9";
	ctx1.arc(200,200,3,0,2*Math.PI);
	ctx1.fill();
}







