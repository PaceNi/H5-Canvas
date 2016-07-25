window.onload=init;
function $(id){return document.getElementById(id);}
function  init() 
{
	//var c=document.getElementById("myCanvas");
	var ctx=$("can").getContext("2d");
	var img=$("pic");
	$("grey").onclick=function(){
		ctx.drawImage(img,0,0,img.width,img.height);
		var imgData=ctx.getImageData(0,0,img.width,img.height);
		for (var i = 0; i < imgData.data.length;i=i+4) {

			imgData.data[i]=(imgData.data[i]*0.3+imgData.data[i+1]*0.59+imgData.data[i+2]*0.11);
			imgData.data[i+1]=(imgData.data[i]*0.3+imgData.data[i+1]*0.59+imgData.data[i+2]*0.11);
			imgData.data[i+2]=(imgData.data[i]*0.3+imgData.data[i+1]*0.59+imgData.data[i+2]*0.11);
			
		}
		ctx.putImageData(imgData,0,0);
	}
	$("black").onclick=function(){
		ctx.drawImage(img,0,0,img.width,img.height);
		var imgData=ctx.getImageData(0,0,img.width,img.height);
		for (var i = 0; i < imgData.data.length; i=i+4) {
			var Avg=(imgData.data[i]+imgData.data[i+1]+imgData.data[i+2])/3;
			if (Avg<100) {
					imgData.data[i]=0;
					imgData.data[i+1]=0;
					imgData.data[i+2]=0;
				};
			if(Avg>=100){
					imgData.data[i]=255;
					imgData.data[i+1]=255;
					imgData.data[i+2]=255;
				}
			}
		ctx.putImageData(imgData,0,0);
	}
	$("bottom").onclick=function(){
		ctx.drawImage(img,0,0,img.width,img.height);
		var imgData=ctx.getImageData(0,0,img.width,img.height);
		for (var i = 0; i < imgData.data.length; i=i+4) {
			imgData.data[i]=255-imgData.data[i];
			imgData.data[i+1]=255-imgData.data[i+1];
			imgData.data[i+2]=255-imgData.data[i+2];
		}
		ctx.putImageData(imgData,0,0);
	}
	$("top").onclick=function(){
		ctx.drawImage(img,0,0,img.width,img.height);
		var imgData=ctx.getImageData(0,0,img.width,img.height);
		for (var i = 0; i < imgData.data.length; i=i+4) {
				imgData.data[i]=imgData.data[i]-imgData.data[(i+4)]+128;
				imgData.data[i+1]=imgData.data[i+1]-imgData.data[(i+4)+1]+128;
				imgData.data[i+2]=imgData.data[i+2]-imgData.data[(i+4)+2]+128;	
		}
		ctx.putImageData(imgData,0,0);
	}
	$("oil").onclick=function(){
		ctx.drawImage(img,0,0,img.width,img.height);
		var imgData=ctx.getImageData(0,0,img.width,img.height);
		for (var i = 0; i < imgData.data.length; i=i+4) {
			var s=Math.floor(Math.random()*5);
			var row=Math.floor(i/4/img.width)+s;
			var col=Math.floor(i/4%img.width)+s;
			if (row<img.height&&col<img.width) 
			{
				var k=(img.width*row+col)*4;
				imgData.data[i]=imgData.data[k];
				imgData.data[i+1]=imgData.data[k+1];
				imgData.data[i+2]=imgData.data[k+2];
			}
		}
		ctx.putImageData(imgData,0,0);
	}
		$("mirror").onclick=function(){
		ctx.drawImage(img,0,0,img.width,img.height);
		var imgData=ctx.getImageData(0,0,img.width,img.height);
		var a=new Array();
		for (var i = 0; i < imgData.data.length; i++) {
			a[i]=imgData.data[i];
		}
			for ( var y=0;y<img.height;y++)  
       	 	{      
       	 		var b=1;
            	for ( var x=0;x<img.width;x++) 
            	{           
                var i=(x+y*img.width)*4;         
                var k=(((img.width-1)-x)+y*img.width)*4;  
                if(x<img.width/2){    
                	imgData.data[i+0]=imgData.data[k+0];    
                	imgData.data[i+1]=imgData.data[k+1];      
                	imgData.data[i+2]=imgData.data[k+2];    
                }
                if (x>=img.width/2){
                	imgData.data[i+0]=a[i-b*4];      
                	imgData.data[i+1]=a[(i+1)-b*4];       
                	imgData.data[i+2]=a[(i+2)-b*4]; 
                	b=b+2;
            	}  
        	}  	
		}
		ctx.putImageData(imgData,0,0);
	}
}