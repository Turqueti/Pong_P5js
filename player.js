/*Funcao que cria um objeto jogador, tem como parametros:
  x:posicao no eixo x do jogador
  y:posicao no eixo y do jogador
  altura: altura do jogador
  largura: largura do jogador
  BotaoMoveCima: charCode do botão que move o jogador para cima
  BotaoMoveBaixo: charCode do botão que move o jogador para baixo  */
function Player(x,y,altura,largura,BotaoMoveCima,BotaoMoveBaixo){
	this.x = x;
	this.y = y;
	this.altura = altura;
	this.largura = largura;
	this.BotaoMoveCima = BotaoMoveCima;
	this.BotaoMoveBaixo = BotaoMoveBaixo;

	this.desenha = function(){
		strokeWeight(0);
		rect(this.x,this.y,this.largura,this.altura);
	}

	this.mexe = function() {

		if(keyIsDown(this.BotaoMoveCima) && this.y > 0){
			this.y -= 5;
		}

		if(keyIsDown(this.BotaoMoveBaixo) && (this.y + this.altura) < height ){
			this.y +=5;
		}
	}

}
