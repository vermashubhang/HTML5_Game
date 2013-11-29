	var mydiv = document.getElementById('inner');
	var drawrectanglebtn = document.getElementById('drawrectanglebtn');
	var clearcanvasbtn = document.getElementById('clearcanvasbtn');
	var canvasBg= document.getElementById('canvasBg');
	var ctx = canvasBg.getContext('2d');
	
	var space=0;

	var up=0;

	var down =0;

	
	var canvasBullet = document.getElementById('canvasBullet');
	var ctxBullet = canvasBullet.getContext('2d');
	
	var canvasJet= document.getElementById('canvasJet');
	var ctxJet = canvasJet.getContext('2d');
	var drawX = 0;
	var drawY = 0;
	clearcanvasbtn.addEventListener('click',clearcanvas,false);
	drawrectanglebtn.addEventListener('click',drawrectangle,false);
	var spriteimage = new Image();
	var gamewidth = canvasBg.width;
	var gameheight = canvasBg.height;
	window.addEventListener('keydown',move,false);
	
	window.addEventListener('keyup',change,false);
	
	spriteimage.src = ('sprite.png');
	spriteimage.addEventListener('load',init,false);
	
function change(e)
{
	if(e.keyCode==40)
	{
		down=0;
	}
	else if(e.keyCode==38)
	{
		up =0;
	}
	else if(e.keyCode==32)
	{
		space =0;
	}
}	
function move(e)
{

	var srcX = 0;
	var srcY = 500;
	var width= 100;
	var height = 40;
	if(e.keyCode==40)
	{
		if(space==1)
		{
		setInterval(firebullet(drawX,drawY),0);
		}
		down=1;
		ctxJet.clearRect ( drawX-5 , drawY-5 , gamewidth+100 , gamewidth+100 );
		ctxJet.drawImage(spriteimage,srcX,srcY,width,height,drawX+5,drawY+5,width,height);
		//drawX +=10;
		if(drawY+10<450)
		drawY +=5;
	}
	else if(e.keyCode==38)
	{
		up =1;
		
		if(space==1)
		{
		setInterval(firebullet(drawX,drawY),0);
		}
		
		ctxJet.clearRect ( drawX-5 , drawY-5 , gamewidth+100 , gameheight+100 );
		ctxJet.drawImage(spriteimage,srcX,srcY,width,height,drawX+5,drawY-5,width,height);
		//drawX -=10;
		if(drawY-10>10)
		drawY -=5;
		
	}
	else if(e.keyCode==32)
	{
		//alert(e.keyCode);
		space =1;
		if(up==1)
		{
			ctxJet.clearRect ( drawX-5 , drawY-5 , gamewidth+100 , gameheight+100 );
		ctxJet.drawImage(spriteimage,srcX,srcY,width,height,drawX+5,drawY-5,width,height);
		//drawX -=10;
		if(drawY-10>10)
		drawY -=5;
		}
		else if(down==1)
		{
		//alert('yo');
			ctxJet.clearRect ( drawX-5 , drawY-5 , gamewidth+100 , gamewidth+100 );
		ctxJet.drawImage(spriteimage,srcX,srcY,width,height,drawX+5,drawY+5,width,height);
		//drawX +=10;
		if(drawY+10<450)
		drawY +=5;
			
		}
		setInterval(firebullet(drawX,drawY),0);
	}
}

function firebullet(drawX,drawY)
{
	var firex=drawX;
	var firey=drawY;
	var i=drawX;
	var id = setInterval(function() {
	ctxBullet.drawImage(spriteimage,i-10,drawY,7,7,i-10,drawY,7,7);
	ctxBullet.drawImage(spriteimage,100,500,7,7,i,drawY,7,7);
	i=i+10;
    
	if (i==800) 
	{
	ctxBullet.drawImage(spriteimage,i-10,drawY,7,7,i-10,drawY,7,7);
	clearInterval(id);
		//alert('yo');
		}
}, 0);

	//drawbullet.i=100;
		//setInterval(drawbullet,1000);
	//ctxJet.drawImage(spriteimage,100,507,7,7,i-1,drawY,7,7)
	//ctxJet.drawImage(spriteimage,100,500,7,7,i,drawY,7,7);
	//ctxJet.drawImage(spriteimage,100,500,7,7,firex,firey,7,7);
	//firey = firey +10;
}
function drawbullet()
{	
	var i;
	alert(i);
	i++;
	//ctxJet.drawImage(spriteimage,100,507,7,7,i-1,j-1,7,7)
	//ctxJet.drawImage(spriteimage,100,500,7,7,i,j,7,7);
}


function init()
{
	spritebg();
	spriteJet();
}
	
	
	
function spritebg()
{
	var srcX = 0;
	var srcY = 0;
	//drawX = 0;
	//drawY = 0;
	ctx.drawImage(spriteimage,srcX,srcY,gamewidth,gameheight,drawX,drawY,gamewidth,gameheight);
}

function spriteJet()
{
	var srcX = 0;
	var srcY = 500;
	var drawX = 10;
	var drawY = 10;
	var width= 100;
	var height = 40;
	ctxJet.drawImage(spriteimage,srcX,srcY,width,height,drawX,drawY,width,height);
}

function clearcanvas()
{
	ctx.fillStyle='#505050';
	ctx.fillRect(20,100,50,200);
}
function drawrectangle()
{
	ctx.fillStyle='#303030';
	ctx.fillRect(20,100,50,200);
}
