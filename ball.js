function Bola(x,y,diametro,velocidadex,velocidadey) {
	this.x = x;
	this.y = y;
	this.velocidadex = velocidadex;
	this.velocidadey = velocidadey;
	this.diametro = diametro;

    this.desenha = function(){
        strokeWeight(0);
		fill(255);
        ellipse(this.x,this.y,this.diametro);
    }


	this.pontoMaisProximo = function(Player){
		let ponto = [];

		NearestX = max(Player.x , min(this.x, Player.x + Player.largura));
		NearestY = max(Player.y, min(this.y, Player.y + Player.altura));

		ponto[0] = NearestX;
		ponto[1] = NearestY;

		ellipse(ponto[0],ponto[1],1);
		return ponto;

	}

	this.colide = function(Player) {


		let pontoProximo = this.pontoMaisProximo(Player);


		if( dist(pontoProximo[0],pontoProximo[1],this.x,this.y) < this.diametro / 2){
			console.log(dist(pontoProximo[0],pontoProximo[1],this.x,this.y));
			fill('red');
			return true;
		}
		return false;
	}



	this.mexe = function(player1){
		this.x = this.x + this.velocidadex;
		this.y = this.y + this.velocidadey;

		if(this.colide(player1)){
			this.velocidadex = - this.velocidadex;
		}

		//faz bater nas paredes
		// if (this.x > width || this.x < 0){
		//
		// }



		//faz bater no chão/teto
		if (this.y > height || this.y < 0){
			this.velocidadey = - this.velocidadey;
		}

	}




}
