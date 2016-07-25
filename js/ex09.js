
/*
**@Pace
Canvas 图表 要求:(不允许使用任何图表 JS 插件)
(1)用canvas图形 API 实现一个图表编辑应用;
(2)实现折线、柱状、饼图、环形图等至少 3 种图表形式; 
(3)具有图表数据编辑功能;可以采用如读取 XML 数据文件、浏览器输入数据等方法; 
(4)同一组数据,可以任意选择绘制图表的形状; 
(5)附加功能:图表的美化效果、动画效果
**
*/

window.onload=init;

function $(id){
  return document.getElementById(id);
}

var a=new Array();

function  init() 
{
    var ctx=$("can").getContext("2d");
    ctx.save();//保存原图
	  $("chart").onclick=drawChart;//折线
    $("histogram").onclick=drawHistogram;//柱状
    $("pie").onclick=drawPie;//饼图
    $("ring_pie").onclick=drawRing_Pie;
    $("clear").onclick=clear;//clear
    $("load").onclick=load;
    //drawXYAxis();
}


//-----clear------
function clear(){
    var ctx=$("can").getContext("2d");
    ctx.restore();
    ctx.clearRect(0,0,$("can").width,$("can").height);
    ctx.save();
}



/*
**读取xml文件
*
*/


//-------把 XML 文档解析到 XML DOM 对象中------
function loadXMLDoc(url){
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp=new XMLHttpRequest();
    }else{// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.open("GET",url,false);
    xmlhttp.send();//send到浏览器的解析器
    xmlDoc=xmlhttp.responseXML;//创建 XMLHttpRequest 对象，读取解析器中的xml文件
    return xmlDoc;//返回
}

//-----加载a[i]-----
function load(){
    var xmlDoc=loadXMLDoc("data.xml");//调用返回值
    var x=xmlDoc.getElementsByTagName("number");//方法返回包含拥有指定标签名的所有元素的节点列表，其中的元素的顺序是它们在源文档中出现的顺序。
    for (var i=0;i<x.length;i++)
    {
      a[i]=parseInt(xmlDoc.getElementsByTagName("number")[i].childNodes[0].nodeValue);//读取的文件中的数据转为数字，存储在数组a[i]中
    }
    show();

}
//--判断数据是否加载成功-----
function show(){
    clear();
    var ctx=$("can").getContext("2d");
    ctx.translate(-150,0);
    ctx.beginPath();
    ctx.fillStyle="black";
    ctx.font="50px Georgia"
    if(a.length==0){
        ctx.fillText("数据加载失败!",$("can").width/2,$("can").height/2);
    }else{
        ctx.fillText("数据加载成功!",$("can").width/2,$("can").height/2);
      }
    ctx.fill();
}





/*
**实现折线、柱状、饼图、环形图等图表形式;
*
*/

//-------画x，y轴-----

function drawXYAxis(){
    var ctx=$("can").getContext("2d");
    //ctx.translate(50,10);

    //------xAxis-------
    ctx.beginPath();
    ctx.lineWidth="0.5";
    ctx.lineCap="round";
    ctx.strokeStyle="black";
    ctx.moveTo(50,$("can").height-50);
    ctx.lineTo($("can").width-20,$("can").height-50);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.moveTo($("can").width-20,$("can").height-50);
    ctx.lineTo($("can").width-30,$("can").height-58);
    ctx.moveTo($("can").width-20,$("can").height-50);
    ctx.lineTo($("can").width-30,$("can").height-42);
    ctx.stroke();

    //-----yAxis------
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.moveTo(50,$("can").height-50);
    ctx.lineTo(50,10);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.moveTo(50,10);
    ctx.lineTo(42,20);
    ctx.moveTo(50,10);
    ctx.lineTo(58,20);
    ctx.stroke();

    //-----刻度线-----
    for(var i=0;i<5;i++){
      ctx.beginPath();
      ctx.strokeStyle="black";
      ctx.moveTo(50,$("can").height-50-(i+1)*100);
      ctx.lineTo($("can").width-20,$("can").height-50-(i+1)*100);
      ctx.stroke();
      //------y刻度值-------
      ctx.font="20px 宋体";
      ctx.fillText((i+1)*100,10,$("can").height-43-(i+1)*100);
    }
    for(var i=0;i<a.length;i++){
      //-----x刻度值-----
      ctx.font="20px 宋体";
      ctx.fillText((i+1)*Math.round((800/a.length)),$("can").width-90-(a.length-i-1)*Math.round((800/a.length)),$("can").height-20);

    }
}

//-------折线图--------
function drawChart(){
    clear();
    drawXYAxis()
  // LINE GRAPH
    var ctx=$("can").getContext("2d");
    ctx.lineWidth = "1";
    ctx.strokeStyle = '#e7410e';
    ctx.shadowColor = '#ec5e33';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 3;
    ctx.beginPath();
    ctx.moveTo(150,$("can").height-50-a[i]);
    for (var i = 0, l = a.length; i < l; i++) {
      ctx.lineTo((i + 1) * Math.round((800/a.length))+50,$("can").height-50-a[i]);
      
    }
    ctx.stroke();
    for (var i = 0, l = a.length; i < l; i++) {
      ctx.beginPath();
      ctx.fillStyle='#e7410e';
      ctx.arc((i + 1) * Math.round((800/a.length))+50,$("can").height-50-a[i],3,0,2*Math.PI);
      ctx.fill();
    }
}


//-------柱状图-------
function drawHistogram(){
    clear();
    drawXYAxis()
    var ctx=$("can").getContext("2d");
    ctx.translate(Math.round((800/a.length))/2,0);
    //var a = [50,200,80,50,60,88,30,15];
    for (i=0;i<a.length;i++){
        //sum=sum+a[i];
        var rw=($("can").width-Math.round((800/a.length)))/a.length;
        //var height=a[i];
        var x=20+rw*i;
        var y=$("can").height-50-a[i];
        ctx.fillStyle="#a4d6fa";
        ctx.shadowColor = 'black';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 5;
        ctx.fillRect(x+rw/4,y,rw/2,a[i]);
        ctx.fill();   
    }
}



//------饼状图-------
function drawPie(){
    clear();
    var ctx=$("can").getContext("2d");
    ctx.translate($("can").width/2-150,$("can").height/2);
   // a = [50,200,80,50,60,88,30,15];
    var sum=0;
    var x=0;
    for(i=0;i<a.length;i++){
      sum=sum+a[i];
    }
    /*var getRandomColor = function(){//颜色随机
        return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
      }*/       
    var b=new Array("#9AEEE5","#bbbbbb","#f1980c","pink","#FEC99B","#F3A9DD","#FFB2B9","#A2DAE8");
    for(var i=0; i<a.length; i++ )
    {
      var angle=a[i]/sum*2*Math.PI;
      ctx.beginPath();
      //ctx.strokeStyle="black";
      ctx.fillStyle=b[i];
      
      ctx.arc(0,0,200,x,x+angle,false);
      ctx.lineTo(0,0);
      //ctx.stroke();
      x=x+angle;
      ctx.fill();
    }    
      ctx.beginPath();
      ctx.strokeStyle="black"; 
      ctx.moveTo(300,-230+a.length*30);
      ctx.lineTo(560,-230+a.length*30);
      ctx.stroke();

//------Total Number------

      ctx.beginPath();
      ctx.fillStyle="black";
      ctx.font="18px 黑体";
      ctx.fillText("Total Number:   "+sum,370,-230+a.length*30+30);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle="black";
      ctx.font="18px 黑体";
      ctx.fillText("Number",390,-260);
      ctx.fillText("%",500,-260);
      ctx.fill();
//-------number-------％--------
    for(var i=0; i<a.length; i++ )
    {
      ctx.fillStyle=b[i];
      ctx.font="20px 黑体";
      ctx.fillText(a[i],400,-230+i*30);
      ctx.fillText(+Math.round((a[i]/sum)*100)+"%",490,-230+i*30);
      ctx.fill();
    } 
//---------颜色代表的个数和百分比-----------
    for(var i=0; i<a.length; i++ )
    {
      ctx.shadowColor = 'black';
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 3;
      //注释
      ctx.beginPath();
      ctx.fillStyle=b[i];
      ctx.fillRect(300,-250+i*30,25,25);
    }
      
}


//------环形图------
function drawRing_Pie(){
    clear();
    var ctx=$("can").getContext("2d");
    ctx.translate($("can").width/2-150,$("can").height/2);
   // a = [50,200,80,50,60,88,30,15];
    var sum=0;
    var x=0;
    for(i=0;i<a.length;i++){
      sum=sum+a[i];
    }
    /*var getRandomColor = function(){//颜色随机
        return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
      }*/       
    var b=new Array("#9AEEE5","#bbbbbb","#f1980c","pink","#FEC99B","#F3A9DD","#FFB2B9","#A2DAE8");
    
    for(var i=0; i<a.length; i++ )
    {
      var angle=a[i]/sum*2*Math.PI;
      ctx.beginPath();
      ctx.fillStyle=b[i];
      ctx.arc(0,0,200,x,x+angle,false);
      ctx.lineTo(0,0); 
      x=x+angle;
      ctx.fill();
      //注释
      ctx.beginPath();
      ctx.fillStyle=b[i];
      ctx.fillRect(300,-250+i*30,25,25);
      ctx.font="20px 黑体";
      ctx.fillText(a[i],400,-230+i*30);
      ctx.fillText(+Math.round((a[i]/sum)*100)+"%",490,-230+i*30);
      ctx.fill();
    }   
      ctx.beginPath();
      ctx.strokeStyle="black"; 
      ctx.moveTo(300,-230+a.length*30);
      ctx.lineTo(560,-230+a.length*30);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle="black";
      ctx.font="18px 黑体";
      ctx.fillText("Total Number:   "+sum,370,-230+a.length*30+30);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle="black";
      ctx.font="18px 黑体";
      ctx.fillText("Number",390,-260);
      ctx.fillText("%",500,-260);
      ctx.fill();


      ctx.beginPath();
      ctx.fillStyle="white";
      ctx.arc(0,0,80,0,2*Math.PI,false);
      ctx.fill();
}





