function player(x,y,altura,largura) = {
	this.x : x,
	this.y : y,
	this.altura: altura,
	this.largura: largura,
}

function desenha_player(player){
	strokeWeight(0);
	rect(player.x,player.y,player.largura,player.altura);
}
