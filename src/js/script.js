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
    mapArray[newCharacterColumn][newCharacterRow] === 3) {
    attackButton.classList.remove("button-hidden");
    attackButton.classList.add("button-show")
    console.log("área de inimigo")
    characterCell.innerHTML = '';

    // Atualiza as coordenadas do personagem
    characterX = newCharacterRow;
    characterY = newCharacterColumn;
    mapArray[newCharacterColumn + 1][newCharacterRow] = 1
    mapArray[newCharacterColumn][newCharacterRow - 1] = 1
    mapArray[newCharacterColumn][newCharacterRow + 1] = 1

    console.log(mapArray)

    // Adiciona o personagem à nova célula
    createCharacter();
  }

}

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
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
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
