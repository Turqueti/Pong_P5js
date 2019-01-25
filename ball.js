function bola(x,y,raio,velocidadex,velocidadey) = {
	this.x : x,
	this.y : y,
	this.velocidadex : velocidadex,
	this.velocidadey : velocidadey,
	raio:raio,

    this.desenha = function(){
        strokeWeight(0);
        ellipse(this.x,this.y,this.raio,this.raio);
    }
}
