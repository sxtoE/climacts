var x = '<?=x;?>';
var y = '<?=y;?>';
x=355;
y=355;



function setup() {
  createCanvas(640, 480);

}

function draw() {
	fill(255,0,3);  

	ellipse(x,y,15,15);
 	
 	//ellipse(mouseX, mouseY, alto, ancho);  

}