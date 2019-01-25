
// var bola = {
// 	x : tela.largura/2,
// 	y : tela.altura/2,
// 	velocidadex : -3,
// 	velocidadey : -3,
// 	raio:20,
// }

var bola = new bola(height/2, width/2, 0, 0, 20);

function setup() {
	createCanvas(600, 400);
}

function draw() {
	bola.desenha();

}



// function desenhaBola(){
// 	strokeWeight(0);
// 	ellipse(bola.x,bola.y,bola.raio,bola.raio);
// }
//
// function moveBola() {
// 	bola.x = bola.x + bola.velocidadex;
// 	bola.y = bola.y + bola.velocidadey;
//
// 	if (bola.x > tela.largura || bola.x < 0) {
//
// 		if(bola.x + bola.raio < player1.x + player1.largura && bola.y + bola.raio > player1.y + player1.altura){
// 			bola.velocidadex = -bola.velocidadex;
// 		}
//
// 		if(bola.x == player2.x && bola.y == player2.y){
// 			bola.velocidadex = -bola.velocidadex;
// 		}
//
// 		//bola.x = tela.largura/2;
// 		//bola.y = tela.altura/2;
// 	}
//
// 	if (bola.y > tela.altura || bola.y < 0) {
// 		bola.velocidadey = -bola.velocidadey;
// 	}
//
// }
//
// function movePlayers(){
// 	if (keyIsDown(UP_ARROW) && player2.y > 0) {
// 		player2.y = player2.y - 5;
// 	}
// 	if (keyIsDown(DOWN_ARROW) && player2.y < tela.altura) {
// 		player2.y = player2.y + 5;
// 	}
//
// 	if (keyIsDown(87) && player1.y > 0){
// 		player1.y = player1.y - 5;
// 	}
// 	if (keyIsDown(83) && player1.y < tela.altura) {
// 		player1.y = player1.y + 5;
// 	}
// }
