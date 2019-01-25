function Bola(x,y,raio,velocidadex,velocidadey) {
	this.x = x;
	this.y = y;
	this.velocidadex = velocidadex;
	this.velocidadey = velocidadey;
	this.raio = raio;

    this.desenha = function(){
        strokeWeight(0);
		fill(255);
        ellipse(this.x,this.y,this.raio,this.raio);
    }

	this.mexe = function(){
		this.x = this.x + this.velocidadex;
		this.y = this.y + this.velocidadey;

		//faz bater nas paredes
		if (this.x > width || this.x < 0){
			this.velocidadex = - this.velocidadex;
		}

		//faz bater no chão/teto
		if (this.y > height || this.y < 0){
			this.velocidadey = - this.velocidadey;
		}

	}
}
