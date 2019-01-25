
var bola;
var p1;

var default_player = {
	altura : 75,
	largura : 8,
}

function setup() {
	createCanvas(600, 400);
	bola = new Bola(width/2, height/2, 20, 3, -3);
	p1 = new Player(5,height/2 - default_player.altura/2 ,default_player.altura,default_player.largura,87,83);
}

function draw() {
	background(51);
	bola.desenha();
	bola.mexe();

	p1.desenha();
	p1.mexe();

}
