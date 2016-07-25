window.onload=init;
function $(id){return document.getElementById(id);}
function  init() 
{
	//var c=document.getElementById("myCanvas");
	var ctx=$("can").getContext("2d");
	img=$("pic");
	ctx.save();//保存原图

	$("bt1").onclick=drawStyle01;
	$("bt2").onclick=drawStyle02;
	$("bt3").onclick=drawStyle03;
	$("bt4").onclick=drawStyle04;
	$("bt5").onclick=drawStyle05;
	$("bt6").onclick=clear;//clear
		
}
function clear(){
	var ctx=$("can").getContext("2d");
	ctx.restore();
	ctx.clearRect(0,0,$("can").width,$("can").height);
	ctx.save();
}
function drawStyle01()//drawStyle01
{
	clear();
	var ctx=$("can").getContext("2d");
	//ctx.clearRect(0,0,$("can").width,$("can").height);
	img=$("pic");
	bg1=$("bgpic1");
	ctx.drawImage(bg1,0,0,$("can").width,$("can").height);
	ctx.globalCompositeOperation="destination-atop";
	ctx.drawImage(img,0,0,$("can").width,$("can").height);
}
function drawStyle02(){//drawStyle02
	clear();
	var ctx=$("can").getContext("2d");
	//ctx.clearRect(0,0,$("can").width,$("can").height);
	img=$("pic");
	bg2=$("bgpic2");
	ctx.drawImage(bg2,0,0,$("can").width,$("can").height);
	ctx.globalCompositeOperation="destination-atop";
	ctx.drawImage(img,0,0,$("can").width,$("can").height);
}
function drawStyle03(){//lighter
	clear();
	var ctx=$("can").getContext("2d");
	
	//ctx.clearRect(0,0,$("can").width,$("can").height);
	img=$("pic");
	bg1=$("bgpic1");
	ctx.drawImage(img,0,0,$("can").width,$("can").height);
	ctx.globalCompositeOperation="lighter";
	ctx.drawImage(bg1,0,0,$("can").width,$("can").height);
	//ctx.globalCompositeOperation="source-over";	
}
function drawStyle04(){//xor
	clear();
	var ctx=$("can").getContext("2d");
	
	//ctx.clearRect(0,0,$("can").width,$("can").height);
	img=$("pic");
	bg1=$("bgpic1");
	ctx.drawImage(bg1,0,0,$("can").width,$("can").height);
	ctx.globalCompositeOperation="xor";
	ctx.drawImage(img,0,0,$("can").width,$("can").height);
}
function drawStyle05(){//oil
	clear();
	var ctx=$("can").getContext("2d");
	
	//ctx.clearRect(0,0,$("can").width,$("can").height);
	img=$("pic");
	bg1=$("bgpic1");
	ctx.drawImage(img,0,0,$("can").width,$("can").height);
	toOil();
	var img2=convertCanvasToImage();
	img2.onload=function(){
		ctx.clearRect(0,0,$("can").width,$("can").height);
		ctx.drawImage(img2,0,0,$("can").width,$("can").height);
		ctx.globalCompositeOperation="xor";
		ctx.drawImage(bg1,0,0,$("can").width,$("can").height);
	}
}
function convertCanvasToImage(){//从canvas提取图片image
	var image=new Image();
	image.src=$("can").toDataURL("image/png");
	image.id="newing";
	return image;
}
function toOil(){
		var ctx=$("can").getContext("2d");
		var imgData=ctx.getImageData(0,0,$("can").width,$("can").height);
		for (var i = 0; i < imgData.data.length; i=i+4) {
			var s=Math.floor(Math.random()*3);
			var row=Math.floor(i/4/$("can").width)+s;
			var col=Math.floor(i/4%$("can").width)+s;
			if (row<$("can").height&&col<$("can").width) 
			{
				var k=($("can").width*row+col)*4;
				imgData.data[i]=imgData.data[k];
				imgData.data[i+1]=imgData.data[k+1];
				imgData.data[i+2]=imgData.data[k+2];
			}
		}
		ctx.putImageData(imgData,0,0);
}


