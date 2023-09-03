const mapWidth = 347;
const mapHeight = 324;
const tileSize = 32;
const attackButton = document.getElementById('ataque')
attackButton.classList.add("button-hidden");

//21 linhas
//20 colunas

// [7,11] - golem

let mochila = [];
let characterX = 2;
let characterY = 17;

const golemX = 7
const golemY = 11

let numRows = Math.ceil(mapHeight / tileSize);
let numCols = Math.ceil(mapWidth / tileSize);

numRows = 21;
numCols = 21;
const mapa = document.getElementById("map-table");

let mapArray = [];


function mover_personagem(direction) {
  const characterCell = mapa.rows[characterY].cells[characterX];

  let newCharacterColumn = characterY;
  let newCharacterRow = characterX;

  switch (direction) {
    case "left":
      newCharacterRow--;
      break
    case 'right':
      newCharacterRow++;
      break
    case 'up':
      newCharacterColumn--;
      break;
    case 'down':
      newCharacterColumn++;
      break;
  }


  if (

    //Se o indice do array for zero, significa que deve andar
    newCharacterRow >= 0 &&
    newCharacterRow <= numRows &&
    newCharacterColumn >= 0 &&
    newCharacterColumn <= numCols &&
    mapArray[newCharacterColumn][newCharacterRow] === 0
  ) {
    // Remove o personagem da célula atual
    characterCell.innerHTML = '';

    // Atualiza as coordenadas do personagem
    characterX = newCharacterRow;
    characterY = newCharacterColumn;

    // Adiciona o personagem à nova célula
    createCharacter();
  }

  else if (newCharacterRow >= 0 &&
    newCharacterRow <= numRows &&
    newCharacterColumn >= 0 &&
    newCharacterColumn <= numCols &&
    mapArray[newCharacterColumn][newCharacterRow] === 3
    ) {

    console.log("área de inimigo")
    characterCell.innerHTML = '';

    // Atualiza as coordenadas do personagem
    characterX = newCharacterRow;
    characterY = newCharacterColumn;

    if (Enemy1.vivo == true){
      attackButton.classList.remove("button-hidden");
      attackButton.classList.add("button-show")
      mapArray[newCharacterColumn + 1][newCharacterRow] = 1;
      mapArray[newCharacterColumn][newCharacterRow - 1] = 1;
      mapArray[newCharacterColumn][newCharacterRow + 1] = 1;
    }

    console.log(mapArray)

    // Adiciona o personagem à nova célula
    createCharacter();
  }

}

const Finn = {
  nome: "Herói",
  hp: 100,
  vivo: true,
  atk: getRandomInt(10, 40),
};

//objeto inimigo
const Enemy1 = {
  nome: "Inimigo gelado",
  hp: 100,
  vivo: true,
  atk:  getRandomInt(5, 30),
};

// Create a 2D array to represent the map
mapArray = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 3, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];

function createMap() {
  for (let i = 0; i < numRows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < numCols; j++) {
      const cell = document.createElement("td");
      cell.className = `tile-${mapArray[i][j]}`;
      row.appendChild(cell);
    }
    mapa.appendChild(row);
  }
}

function createCharacter() {
  const characterCell = mapa.rows[characterY].cells[characterX];
  characterCell.innerHTML = '<div id="character" style="height: 16px"><img src="./src/img/finnIdle.gif" height="16px" width="16px"></div>';
}


function createEnemy() {
  const enemyCell = mapa.rows[golemY].cells[golemX];
  enemyCell.innerHTML = '<div id="character" style="height: 16px"><img src="./src/img/IceGolemIdle.gif" height="16px" width="16px"></div>';



  if (Enemy1.vivo == false){
    enemyCell.innerHTML = '';
    mapArray[golemY][golemX] = 0

  }


}



//movimentação

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      mover_personagem('up');
      break;
    case 'ArrowLeft':
      mover_personagem('left');
      break;
    case 'ArrowDown':
      mover_personagem('down')
      break;
    case 'ArrowRight':
      mover_personagem('right')
      break;
  }
});

console.log(mapArray);

createMap();
createCharacter();
createEnemy();


//#############################################

//objeto finn



function attackEnemy() {
  finnAttack();
  enemyAttack();

  if (Enemy1.hp <= 0){
    Enemy1.vivo = false;
    let newCharacterColumn = characterY;
    let newCharacterRow = characterX;
    characterX = newCharacterRow;
    characterY = newCharacterColumn;

    console.log("Morreu :(")
    createCharacter();

    console.log(mapArray)

    clearEnemy();
    mapArray[golemX][golemY] = 0;
    
    mapArray[newCharacterColumn + 1][newCharacterRow] = 0;
    mapArray[newCharacterColumn][newCharacterRow - 1] = 0;
    mapArray[newCharacterColumn][newCharacterRow + 1] = 0;

    createCharacter();

    attackButton.classList.remove("button-show");
    attackButton.classList.add("button-hidden")

  }

  if (Finn.hp <= 0){
    Finn.vivo = false;
    console.log("Morreu o finn que trise :(")
  }
  
}

function finnAttack(){
  Enemy1.hp = Enemy1.hp - Finn.atk
}

function enemyAttack(){
  Finn.hp = Finn.hp - Enemy1.atk
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clearEnemy(){
  
  const above_Enemy = mapa.rows[golemY - 1].cells[golemX];
  const belowEnemy = mapa.rows[golemY + 1].cells[golemX];
  const leftEnemy = mapa.rows[golemY].cells[golemX - 1];
  const rightEnemy = mapa.rows[golemY].cells[golemX + 1];
  const deadEnemy = mapa.rows[golemY].cells[golemX]

  above_Enemy.classList.remove("tile-3")
  belowEnemy.classList.remove("tile-3")
  leftEnemy.classList.remove("tile-3")
  rightEnemy.classList.remove("tile-3")

  deadEnemy.classList.remove("tile-2")
  deadEnemy.classList.add("tile-0")

  above_Enemy.classList.add("tile-0")
  belowEnemy.classList.add("tile-0")
  leftEnemy.classList.add("tile-0")
  rightEnemy.classList.add("tile-0")

  createEnemy()

}