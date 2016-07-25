window.onload=function  () 
{
	//var c=document.getElementById("myCanvas");
	var ctx=can.getContext("2d");
	ctx.beginPath();
	ctx.fillStyle="#602E8F";
	ctx.lineCap="round";
	ctx.moveTo(200,100);
	ctx.lineTo(200,300);
	ctx.lineTo(300,200);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle="#602E8F";
	ctx.lineCap="round";
	ctx.moveTo(310,200);
	ctx.lineTo(410,100);
	ctx.lineTo(410,300);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle="#FFD25D";
	ctx.lineCap="round";
	ctx.moveTo(305,205);
	ctx.lineTo(205,305);
	ctx.lineTo(305,405);
	ctx.lineTo(405,305);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle="RED";
	ctx.lineCap="round";
	ctx.moveTo(410,310);
	ctx.lineTo(410,310+200*1.414);
	ctx.lineTo(410-100*1.414,310+100*1.414);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle="green";
	ctx.lineCap="round";
	ctx.moveTo(415,310);
	ctx.lineTo(415,710);
	ctx.lineTo(615,510);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle="#E55584";
	ctx.lineCap="round";
	ctx.moveTo(620,510);
	ctx.lineTo(620,515+200*1.414);
	ctx.lineTo(620-200*1.414,515+200*1.414);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle="#27CCC9";
	ctx.lineCap="round";
	ctx.moveTo(625,515+200*1.414);
	ctx.lineTo(725,415+200*1.414);
	ctx.lineTo(925,415+200*1.414);
	ctx.lineTo(825,515+200*1.414);
	ctx.closePath();
	ctx.fill();
}
