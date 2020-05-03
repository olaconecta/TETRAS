const cvs = document.getElementById('tetris');
const ctx = cvs.getContext("2d");
const ROW = 30;
const COL = COLUMN = 12;
const SQ = squareSize = 20;
const VACANT = 'black'; // > cor do quadrado vazio 
const score = document.getElementById('score');
// desenhar um SQUARE no canvas
function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ,y*SQ,SQ,SQ); // (x, y, largura, altura) 
    // ctx.strokeStyle = 'indigo';
    // ctx.strokeRect(x*SQ,y*SQ,SQ,SQ); // (x, y, largura, altura) 
}

// criar o tabuleiro
let board = [];
for( r = 0; r <ROW; r++){
    board[r] = [];
    for(c = 0; c < COL; c++){
        board[r][c] = VACANT;
    }
}
// desenha o tabuleiro
function drawBoard(){
    for( r = 0; r <ROW; r++){
        for(c = 0; c < COL; c++){
            drawSquare(c,r,board[r][c]);
        }
    }
}
drawBoard();

// peças e suas cores
// const PIECES = [
//     [Z, '#8f2c20'],
//     [S, '#7a3C90'],
//     [T, '#c39d2a'],
//     [O, '#339caf'],
//     [L, '#a9ef1A'],
//     [I, '#731d12'],
//     [J, '#d2f92C']
// ]
const PIECES = [
    [Z, '#8f2c20'],
    [S, '#7a3C90'],
    [T, '#c39d2a'],
    [O, '#339caf'],
    [L, '#a9ef1A'],
    [I2, '#731d12'],
    [J, '#d2f92C'],
    [PINGO, '#3239dC'],
    [PINGO2, 'tomato'],
    // [DIAGONAL, '#7a8dd0'],
    [U, '#fadd90'],
    // [H, '#36fc2C'],
    [BLOCK, 'yellow'],
    [VIRGULA, '#0afC90'],
    [VIRGULA2, '#1df2cf'],
    [TESAO, '#339a67'],
    [LEGO, '#d1fca0'],
    [Y, '#3fab13'],
    [I, '#230dcc'],
    [I3, '#B3adf2'],
    [barra, '#6d1B22'],
    [V, '#a239cC'],
    [V2, 'pink']
]

// gerar novas peças após colisao piso 
function randomPiece() {
    let randomNum = Math.floor(Math.random() * PIECES.length);
    return new piece(PIECES[randomNum][0], PIECES[randomNum][1]);
}

// inicia a peça --> criando uma instancia de piece
let p = randomPiece();

// o objeto peça
function piece(tetramino, color) {
    this.tetramino = tetramino;
    this.color = color;
    this.tetraminoNum = 0;
    this.activeTetramino = this.tetramino[this.tetraminoNum];
    // controle das peças
    this.x = 3;
    this.y = -2;
}
// função preencher
piece.prototype.fill = function(color) {
    for( r = 0; r < this.activeTetramino.length; r++){
        for(c = 0; c < this.activeTetramino.length; c++){
            // desenha apenas blocos ocupados
            if(this.activeTetramino[r][c]) {
                drawSquare(this.x + c,this.y + r, color)
            }            
        }
    }   
}

// desenha a peça no tabuleiro
piece.prototype.draw = function() {
    this.fill(this.color);
}
// deleta a marca da peça que desceu
piece.prototype.unDraw = function() {
    this.fill(VACANT);
    
}
// mover peça pra baixo
piece.prototype.moveDown = function() {
    if(!this.collision(0,1,this.activeTetramino)) {
        this.unDraw();
        this.y++;
        this.draw();
    } else {
        // trava a peça no lugar dela e gera uma nova peça a cair
        this.lock();
        p = randomPiece();
    }
}
// move direita
piece.prototype.moveRight = function() {
    if(!this.collision(1,0,this.activeTetramino)) {
        this.unDraw();
        this.x++;
        this.draw();
    }
}
// move esquerda
piece.prototype.moveLeft = function() {
    if(!this.collision(-1,0,this.activeTetramino)) {
        this.unDraw();
        this.x--;
        this.draw();
    }
}
// rodar peça

piece.prototype.rotate = function() {
    nextPattern = this.tetramino[(this.tetraminoNum + 1 )%this.tetramino.length];
    let kick = 0;
    if(this.collision(0,0,nextPattern)) {
        if(this.x > COL/2) {
            // parede direita
            kick = -1;
        } else {
            // parede esquerda
            kick = 1;

        }
    }
    if(!this.collision(kick,0,nextPattern)) {
        this.unDraw();
        this.x += kick;
        this.tetraminoNum = (this.tetraminoNum + 1 )%this.tetramino.length; 
        this.activeTetramino = this.tetramino[this.tetraminoNum];
        this.draw();
    }
}
let points=0;
// travar peças qnd chegam em outras 
piece.prototype.lock = function() {
    for( r = 0; r < this.activeTetramino.length; r++){
        for(c = 0; c < this.activeTetramino.length; c++){
            // pular espaços vazios
            if(!this.activeTetramino[r][c]) {
                continue;
            }            
            // trava no topo = GAMEOVER
            if(this.y + r < 0) {
                alert('GAME OVER SEU BOSTA');
                gameOver = true;
                break;
            }
            // trava a peça
            board[this.y + r][this.x +c] = this.color;
        }
    } 
    // remove linhas cheias
    for (let r = 0; r < ROW; r++) {
        let isRowFull = true;
        for (let c = 0; c < COL; c++) {
            isRowFull = isRowFull && (board[r][c] != VACANT)            
        }
        if(isRowFull) {
            // pecas de cima descem 
            for (let y = r; y > 1; y--) {
                for (let c = 0; c < COL; c++) {
                 board[y][c] = board[y-1][c];
                }                
            }
            // linha do topo nnao tem linha acima
            for (let c = 0; c < COL; c++) {
                board[0][c] = VACANT ;
            }   
            // placar
            points += 10;
        }
    }  
    // atualiza o tabuleiro
    drawBoard();
    // atualiza pontos
    score.innerHTML = points;
}

// colisão das peças
piece.prototype.collision = function(x, y, piece) {
    for( r = 0; r < piece.length; r++){
        for(c = 0; c < piece.length; c++){
            // testar se o espaço está vazio, se sim, ignora
            if(!piece[r][c]) {
                continue;
            }
            // pega coordenadas da peça após movimento
            let newX = this.x + c + x;
            let newY = this.y + r + y;
            // condicao para choque paredes
            if(newX < 0 || newX >= COL || newY >= ROW) {
                return true;                
            }
            //  pular nov Y se ele é < 0  pois é o TOPO do tabuleiro
            if(newY < 0 ) {
                continue;                
            }
            // verificar se já há uma peça bloqueando
            if(board[newY][newX] != VACANT) {
                return true;
            }
        }
    }   
    return false;
}

// controlar a peça
// document.addEventListener('keypress', CONTROL); TESTAR ESSE KEYPRESS
document.addEventListener('keydown', CONTROL);
function CONTROL(event) {
    // cada keyCode é uma tecla do teclado (esq, cima, direita, baixo)
    if(event.keyCode == 37) {
        p.moveLeft();
        // dropStart = Date.now();  Faz a peça travar no tabuleiro ao invés de descer
    } else if(event.keyCode == 38) {
        p.rotate();        
        //dropStart = Date.now();  Faz a peça travar no tabuleiro ao invés de descer
    } else if(event.keyCode == 39) {
        p.moveRight();        
        // dropStart = Date.now();  Faz a peça travar no tabuleiro ao invés de descer
    } else if(event.keyCode == 40) {
        p.moveDown();        
    }
}

// move a cada segundo
let dropStart = Date.now();
let gameOver = false;
function drop() {
    let quicker = 900;

    if(points>= 100) {
        quicker -=250;        
    } 
    if (points>=200) {
        quicker -=400;        
    }
     if (points>=300) {
        quicker -=500;        
    }
     if (points>=400) {
        quicker -=600;        
    }
     if (points>=500) {
        quicker -=700;        
    }
    // switch (points) {
    //     case 100:
    //         quicker-=50;
    //         break;
    //     case 200:
    //         quicker-=50;
    //         break;
            
    //     case 300:
    //         quicker-=50;
    //         break;
            
    //     case 400:
    //         quicker-=50;
    //         break;
            
    //     case 500:
    //         quicker-=50;
    //         break;
            
    //     case 600:
    //         quicker-=50;
    //         break;
            
    //     case 700:
    //         quicker-=50;
    //         break;
    //     case 800:
    //         quicker-=50;
    //         break;
            
    //     case 900:
    //         quicker-=100;
    //         break;
            
    //     case 1000:
    //         quicker-=100;
    //         break;
            
    // }
    
    let now = Date.now();
    let delta = now - dropStart;
    if(delta > quicker) {
        p.moveDown();
        dropStart = Date.now();
    }
    if(!gameOver) {
        requestAnimationFrame(drop);
    }
    
}

drop();