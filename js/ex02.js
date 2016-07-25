window.onload=function  () 
{
	//var c=document.getElementById("myCanvas");
	var ctx=can.getContext("2d");
//脚
	ctx.beginPath();
	ctx.lineWidth="2";
	ctx.lineCap="round";
	ctx.fillStyle="white";
	ctx.moveTo(213,448);
	ctx.quadraticCurveTo(170,450,185,480);
	ctx.bezierCurveTo(185,500,300,500,300,480);
	ctx.bezierCurveTo(300,500,415,500,415,480);
	ctx.quadraticCurveTo(430,450,387,448);
	ctx.fill();
	ctx.stroke();

//身体
	ctx.beginPath();
	ctx.fillStyle="#3dbbfe";
	//zuo
	ctx.moveTo(206,290);
	ctx.bezierCurveTo(192,296,188,400,210,445);
	//xia
	ctx.bezierCurveTo(210,455,300,455,300,445);
	ctx.bezierCurveTo(300,455,390,455,390,445);
	//you
	ctx.bezierCurveTo(420,415,410,270,395,252);
	//shang
	ctx.bezierCurveTo(400,260,200,260,200,250);
	//shou
	ctx.bezierCurveTo(200,230,170,179,150,185);
	ctx.lineTo(120,190);
	ctx.bezierCurveTo(145,270,185,310,197,310);

	ctx.fill();
	ctx.stroke();

	//圆手
	ctx.beginPath();
	ctx.fillStyle= "white";
	ctx.arc(140,190,35,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();

//外脸
	ctx.beginPath();
	ctx.fillStyle="#3dbbfe";
	ctx.moveTo(200,250);
	ctx.bezierCurveTo(0,-50,600,-50,400,250);
	ctx.bezierCurveTo(400,260,200,260,200,250);
	ctx.fill();
	ctx.stroke();

//内脸
	ctx.beginPath();
	ctx.fillStyle="white";
	ctx.moveTo(210,250);
	ctx.bezierCurveTo(60,20,540,20,390,250);
	ctx.bezierCurveTo(390,260,210,260,210,250);
	ctx.fill();
	ctx.stroke();
	
//嘴巴
	ctx.beginPath();
	ctx.moveTo(190,180);
	ctx.quadraticCurveTo(300,300,400,180);
	ctx.stroke();

//鼻子下面的线
	ctx.beginPath();
	ctx.moveTo(300,238);
	ctx.lineTo(300,160);
	ctx.stroke();

//眼睛
	ctx.beginPath();
	ctx.fillStyle="white";
	ctx.moveTo(230,90);
	ctx.bezierCurveTo(230,30,300,30,300,90);
	ctx.bezierCurveTo(300,150,230,150,230,90);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle="black";
	ctx.moveTo(270,90);
	ctx.bezierCurveTo(270,65,290,65,290,90);
	ctx.bezierCurveTo(290,115,270,115,270,90);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle="white";
	ctx.moveTo(300,90);
	ctx.bezierCurveTo(300,30,370,30,370,90);
	ctx.bezierCurveTo(370,150,300,150,300,90);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle="black";
	ctx.moveTo(310,90);
	ctx.bezierCurveTo(310,65,330,65,330,90);
	ctx.bezierCurveTo(330,115,310,115,310,90);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle="white";
	ctx.arc(283,90,6,0,2*Math.PI);
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle="white";
	ctx.arc(317,90,6,0,2*Math.PI);
	ctx.fill();

//鼻子
	ctx.beginPath();
	ctx.fillStyle="RED";
	ctx.arc(300,135,20,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle="white";
	ctx.arc(295,129,8,0,2*Math.PI);
	ctx.fill();

//胡须
	ctx.beginPath();
	ctx.moveTo(285,165);
	ctx.quadraticCurveTo(260,153,200,135);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(280,180);
	ctx.quadraticCurveTo(230,170,190,173);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(283,195);
	ctx.quadraticCurveTo(219,200,210,210);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(315,165);
	ctx.quadraticCurveTo(340,153,400,135);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(320,180);
	ctx.quadraticCurveTo(340,170,360,173);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(317,195);
	ctx.quadraticCurveTo(351,190,360,200);
	ctx.stroke();

//舌头
	ctx.beginPath();
	ctx.fillStyle="#FF8000";
	ctx.moveTo(340,230);
	ctx.bezierCurveTo(300,160,390,140,385,193);
	ctx.bezierCurveTo(385,200,350,225,340,230);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(360,218);
	ctx.quadraticCurveTo(370,200,360,183);
	ctx.stroke();

//肚子
	ctx.beginPath();
	ctx.fillStyle="white";
	ctx.moveTo(210,350);
	ctx.bezierCurveTo(210,230,390,230,390,350);
	ctx.bezierCurveTo(390,450,210,450,210,350);
	ctx.fill();
	ctx.stroke();

//袋子
	ctx.beginPath();
	ctx.fillStyle="white";
	ctx.moveTo(225,340);
	ctx.bezierCurveTo(225,430,375,430,375,340);
	ctx.closePath(225,340);
	ctx.fill();
	ctx.stroke();



//脖子
	ctx.beginPath();
	ctx.fillStyle="red";
	ctx.moveTo(200,250);
	ctx.bezierCurveTo(200,260,400,260,400,250);
	ctx.bezierCurveTo(405,250,405,260,400,260);
	ctx.bezierCurveTo(400,270,200,270,200,260);
	ctx.bezierCurveTo(195,260,195,250,200,250);
	ctx.fill();
	ctx.stroke();

//铃铛
	ctx.beginPath();
	ctx.fillStyle="#F9DE62";
	ctx.arc(300,290,28,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle="#656361";
	ctx.arc(300,295,7,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(300,302);
	ctx.lineTo(300,318);
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle=("#F9DE62")
	ctx.moveTo(271,285);
	ctx.bezierCurveTo(271,280,329,280,329,285);
	ctx.bezierCurveTo(331,285,330,280,328,280);
	ctx.bezierCurveTo(328,275,272,275,272,280);
	ctx.bezierCurveTo(270,280,269,285,271,285);
	ctx.fill();
	ctx.stroke();
//腿线
	ctx.beginPath();
	ctx.moveTo(300,480);
	ctx.lineTo(300,435);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(290,433);
	ctx.quadraticCurveTo(300,435,310,433);
	ctx.stroke();

//shou
	ctx.beginPath();
	ctx.fillStyle="#3dbbfe";
	ctx.moveTo(370,270);
	ctx.quadraticCurveTo(330,290,315,340);
	ctx.lineTo(373,340);
	ctx.quadraticCurveTo(380,340,395,318);
	ctx.fill();
	ctx.stroke();


}
