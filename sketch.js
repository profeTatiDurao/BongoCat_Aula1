let imgCat, imgBongo, imgPawLeft, imgPawRight;
let somBongo;

// Estados das patas
let pawLeftDown = false;
let pawRightDown = false;

function preload() {
  
  imgCat = loadImage('images/cat.png');
  imgBongo = loadImage('images/bongo.png');
  imgPawLeft = loadImage('images/paw-left.png');
  imgPawRight = loadImage('images/paw-right.png');

 
  soundFormats('wav', 'mp3');
  somBongo = loadSound('sounds/bongo0.wav');
}

function setup() {
  // Resolução nativa dos assets do Bongo Cat
  createCanvas(1000, 450);
}

function draw() {
  background(0); /*Toque aqui o tema claro ou escuro */

  // 1. Linha da mesa inclinada (igual ao original)
  stroke(0);
  strokeWeight(5);
  line(-50, 180, 1000, 370);
  noStroke();

  // 2. Instrumento de fundo
  image(imgBongo, 0, 0, 800, 450);

  /*image(
  imgCat, // Arquivo da imagem
  0,      // telaX: Colar no X=0 da tela do jogo
  0,      // telaY: Colar no Y=0 da tela do jogo
  800,    // telaL: Ficar com 800px de largura no jogo
  450,    // telaA: Ficar com 450px de altura no jogo
  // --- INÍCIO DO RECORTE (A Tesoura) ---
  0,      // spriteX: Começar a cortar do pixel 0 (esquerda da imagem original)
  0,      // spriteY: Começar a cortar do pixel 0 (topo da imagem original)
  800,    // spriteL: Cortar um pedaço de 800px de largura
  450     // spriteA: Cortar um pedaço de 450px de altura (pega só a versão clara)
);*/

  // 3. Cabeça e corpo do gato (recorte superior 800x450)
  

  // 4. Pata Esquerda (Tecla A)
  // Se pressionada: recorta em X = 800 (batendo). Senão: X = 0 (repouso)
  

  // 5. Pata Direita (Tecla D)
 
}

function keyPressed() {
  // Pata esquerda
  

  // Pata direita
  
}

function keyReleased() {
  // Volta a pata para cima quando soltar a tecla
  
}

function tocarBongo() {
  
}