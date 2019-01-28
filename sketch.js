
var bola;
var players;

var default_player = {
	altura : 75,
	largura : 8,
}

function setup() {
	createCanvas(600, 400);
	bola = new Bola(width/2, height/2, 20, -3, 3);
	players = []

	players[0] = new Player(5,height/2 - default_player.altura/2 ,default_player.altura,default_player.largura,87,83);
	players[1] = new Player(width - 5 - default_player.largura ,height/2 - default_player.altura/2 ,default_player.altura,default_player.largura,UP_ARROW,DOWN_ARROW);
}

function draw() {
	background(51);
	bola.desenha();
	bola.mexe(players);

	for (var i = 0; i < players.length; i++) {
		players[i].desenha();
		players[i].mexe();
	}

}
