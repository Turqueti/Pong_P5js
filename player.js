function Player(x,y,altura,largura){
	this.x = x;
	this.y = y;
	this.altura = altura;
	this.largura = largura;

	this.desenha = function(){
		strokeWeight(0);
		rect(this.x,this.y,this.altura,this.largura);
	}
}

// function desenha_player(player){
// 	strokeWeight(0);
// 	rect(player.x,player.y,player.largura,player.altura);
// }
