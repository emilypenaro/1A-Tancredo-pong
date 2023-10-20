 let xBolinha = 300;
 let yBolinha = 200;
 let diametro = 20;
 let raio = diametro/2


 let velocidadeXBolinha = 10;
 let velocidadeYBolinha = 10;
let xRaquete = 10;
let yRaquete = 200;
let xRaqueteInimigo = 580;
let yRaqueteInimigo = 200;
let larguraRaquete = 10;
let alturaRaquete = 100;
let velocidadeRaquete= 5; 


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
 criarBolinha();
 movimentaBolinha();
 encostaNaBorda();
 criarRaquete(xRaquete,yRaquete);
 criarRaquete(xRaqueteInimigo, yRaqueteInimigo);
 colideRaqueteBolinha(xRaquete,yRaquete);
 colideRaqueteBolinha(xRaquteInimigo, yRaqueteInimigo);
 movimentaMinhaRaquete();
 criarRaqueteInimigo();
 movimentaMinhaRaqueteInimigo();
  }

function criarBolinha() {
  circle(xBolinha , yBolinha , diametro)
 }
function movimentaBolinha (){
  xBolinha += velocidadeXBolinha
 yBolinha += velocidadeYBolinha

}
  
  function encostaNaBorda () {
if(xBolinha + raio > width || xBolinha - raio < 0) {
  velocidadeXBolinha *= -1
   }
  if(yBolinha + raio > height || yBolinha -raio < 0) {
     velocidadeYBolinha *= -1 
  }
  }
    
    function criarRaquete(x,y){
      rect(x, y,larguraRaquete, alturaRaquete)
    }
   function movimentaMinhaRaquete(){
     if( keyIsDown(UP_ARROW)){
        yRaquete+= velocidadeRaquete
    
        }
     
     if ( keyIsDown(UP_ARROW)){ 
     yRaquete-= velocidadeRaquete
     }
     
     
   }
function colideRaqueteBolinha(x,y){
 colisao = collideRectCicle ( x , y, larguraRaquete, alturaRaquete,
xBolinha,yBolinha,raio);
  if(colisao){
     velocidadexBolinha *= -1
     
     }

}








    