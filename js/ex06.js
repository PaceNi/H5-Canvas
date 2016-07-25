window.onload=init;
function $(id){return document.getElementById(id);}
function  init() 
{
	//var c=document.getElementById("myCanvas");
	var flag=0;
	var timeHandle;
	var ctx=$("can").getContext("2d");
	ctx.save();
	$("start").onclick=function()
	{
		number=$("number").value;
		speed=$("speed").value;
		if(speed>9&&speed<301)//在规定速度范围内执行
		{
			if(flag==0)//第一次点击start运行
			{
				ctx.translate($("can").width/2,$("can").height/2);
				if(number>1&&number<16)//在number范围内执行
				{
					timeHandle=window.setInterval(function()
					{
						ctx.clearRect(-$("can").width/2,-$("can").height/2,$("can").width,$("can").height);
						ctx.rotate(2*Math.PI*0.005);
						drawWheel (ctx,number);//调用画饼圆函数，传递number
					},1000/speed);
						flag=1;
				}
				else//不在number范围内则输出
				{
					ctx.textAlign="center";
					ctx.font="30px Georgia";
					ctx.fillText("个数超出规定范围，清除后请重新输入",0,0);
				}
			}
		}
			else//不在速度范围内执行
			{
				if (number>1&&number<16)//当个数在范围内的时候只输出速度
				{
					if (flag==0)
					{
						ctx.translate($("can").width/2,$("can").height/2);
						ctx.textAlign="center";
						ctx.font="30px Georgia";
						ctx.fillText("速度超出规定范围，清除后请重新输入",0,0);
						flag=1;
					}
				}else{//个数不在范围内时输出速度和个数
					if (flag==0) 
					{
						ctx.translate($("can").width/2,$("can").height/2);
						ctx.textAlign="center";
						ctx.font="30px Georgia";
						ctx.fillText("个数和速度超出规定范围，清除后请重新输入",0,0);
						flag=1;
					}
				}
			}
	}
	$("clear").onclick=function()//清除＋重置
	{
		window.clearInterval(timeHandle);
		ctx.restore();
		ctx.clearRect(0,0,$("can").width,$("can").height);
		ctx.save();
		flag=0;
	}
}
function  drawWheel (ctx,number) //画饼圆函数
{
	var angle=2*Math.PI/number;
	var a=new Array("#9AEEE5","#F4436D","yellow","pink","#FEC99B","#F3A9DD","#FFB2B9","#A2DAE8","#BBE094","red","blue","green","purple","black","grey");
		for(var i=0; i<number; i++ )
		{
			ctx.beginPath();
			ctx.fillStyle=a[i];
			ctx.arc(0,0,100,i*angle,(i+1)*angle,false);
			ctx.lineTo(0,0);
			ctx.fill();
		}	
}

