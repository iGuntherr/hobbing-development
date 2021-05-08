console.log('Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

// [Chão]
const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha(){
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, // Sprite X, Sprite y 
            chao.largura, chao.altura, // Tamanho do recorte na sprite - Width, Height
            chao.x, chao.y,// Dentro do canvas, onde que a imagem vai ficar - X, Y
            chao.largura, chao.altura, // O tamanho que a imagem terá dentro do canvas - Width, Height
        );
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, // Sprite X, Sprite y 
            chao.largura, chao.altura, // Tamanho do recorte na sprite - Width, Height
            (chao.x + chao.largura), chao.y,// Dentro do canvas, onde que a imagem vai ficar - X, Y
            chao.largura, chao.altura, // O tamanho que a imagem terá dentro do canvas - Width, Height
        );
    },
};

// Plano de fundo
const planoDeFundo =  {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha(){
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0,0, canvas.width, canvas.height);

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY, // Sprite X, Sprite y 
            planoDeFundo.largura, planoDeFundo.altura, // Tamanho do recorte na sprite - Width, Height
            planoDeFundo.x, planoDeFundo.y,// Dentro do canvas, onde que a imagem vai ficar - X, Y
            planoDeFundo.largura, planoDeFundo.altura, // O tamanho que a imagem terá dentro do canvas - Width, Height
        );
        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY, // Sprite X, Sprite y 
            planoDeFundo.largura, planoDeFundo.altura, // Tamanho do recorte na sprite - Width, Height
            (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,// Dentro do canvas, onde que a imagem vai ficar - X, Y
            planoDeFundo.largura, planoDeFundo.altura, // O tamanho que a imagem terá dentro do canvas - Width, Height
        );
    },
};


const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    gravidade: 0.25,
    velocidade: 0,
    atualiza(){
        flappyBird.velocidade += flappyBird.gravidade
        flappyBird.y += flappyBird.velocidade; 
    },
    desenha(){
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY, // Sprite X, Sprite y 
            flappyBird.largura, flappyBird.altura, // Tamanho do recorte na sprite - Width, Height
            flappyBird.x, flappyBird.y,// Dentro do canvas, onde que a imagem vai ficar - X, Y
            flappyBird.largura, flappyBird.altura, // O tamanho que a imagem terá dentro do canvas - Width, Height
        );
    },
};

function loop(){      
    flappyBird.atualiza();

    planoDeFundo.desenha();
    chao.desenha();
    flappyBird.desenha();
    flappyBird.atualiza();

    

    requestAnimationFrame(loop);
};

loop()