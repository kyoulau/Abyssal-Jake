const mapWidth = 347;
const mapHeight = 324;
const tileSize = 32;
const attackButton = document.getElementById("ataque");
attackButton.classList.add("button-hidden");

let mochila = [];
let characterX = 2;
let characterY = 17;

const golemX = 7;
const golemY = 11;

const pocaoX = 5;
const pocaoY = 17;

let status_vida = document.getElementById("hp");

let quant_pot = document.getElementById("pot");

const pocao = {
  cura: 20,
  state: false,
  quantidade: 0,
};

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
      break;
    case "right":
      newCharacterRow++;
      break;
    case "up":
      newCharacterColumn--;
      break;
    case "down":
      newCharacterColumn++;
      break;
  }

  if (
    newCharacterRow >= 0 &&
    newCharacterRow <= numRows &&
    newCharacterColumn >= 0 &&
    newCharacterColumn <= numCols &&
    mapArray[newCharacterColumn][newCharacterRow] === 0
  ) {

    characterCell.innerHTML = "";

    characterX = newCharacterRow;
    characterY = newCharacterColumn;

    createCharacter();
  } else if (
    newCharacterRow >= 0 &&
    newCharacterRow <= numRows &&
    newCharacterColumn >= 0 &&
    newCharacterColumn <= numCols &&
    mapArray[newCharacterColumn][newCharacterRow] === 3
  ) {
    characterCell.innerHTML = "";

    characterX = newCharacterRow;
    characterY = newCharacterColumn;

    if (Enemy1.vivo == true) {
      attackButton.classList.remove("button-hidden");
      attackButton.classList.add("button-show");
      mapArray[newCharacterColumn + 1][newCharacterRow] = 1;
      mapArray[newCharacterColumn][newCharacterRow - 1] = 1;
      mapArray[newCharacterColumn][newCharacterRow + 1] = 1;
    }
    createCharacter();
  } else if (
    newCharacterRow >= 0 &&
    newCharacterRow <= numRows &&
    newCharacterColumn >= 0 &&
    newCharacterColumn <= numCols &&
    mapArray[newCharacterColumn][newCharacterRow] === 4
  ) {
    characterCell.innerHTML = "";

    characterX = newCharacterRow;
    characterY = newCharacterColumn;

    if (pocao.state == false) {
      pocao.quantidade += 1;

      quant_pot.innerHTML = `<h4 id="pot"> Poção de Cura - ${pocao.quantidade}x <button onClick="usePotion()">Usar</button></h4>`;
    }
    pocao.state = true;

    createCharacter()
  }
  else if(
    newCharacterRow >= 0 &&
    newCharacterRow <= numRows &&
    newCharacterColumn >= 0 &&
    newCharacterColumn <= numCols &&
    mapArray[newCharacterColumn][newCharacterRow] === 5
  )
  {
    characterCell.innerHTML = "";

    characterX = newCharacterRow;
    characterY = newCharacterColumn;

    gameWindow = document.getElementById("tela");

    gameWindow.innerHTML = `<div id="tela_over" class="grid items-center justify-center"><div><h2>Finn salvou o Jake! Você Conseguiu abrir a porta da masmorra!</h2><p> Fim de jogo!</p></div><div><img src="src/img/win.gif"><button class="button-show" onClick="window.location.reload()">Retry</button></div></div>`

  }

  else if(
    newCharacterRow >= 0 &&
    newCharacterRow <= numRows &&
    newCharacterColumn >= 0 &&
    newCharacterColumn <= numCols &&
    mapArray[newCharacterColumn][newCharacterRow] === 6
  )
  {
    characterCell.innerHTML = "";

    characterX = newCharacterRow;
    characterY = newCharacterColumn;

    gameWindow = document.getElementById("tela");

    gameWindow.innerHTML = `<div id="tela_over" class="grid items-center justify-center"><div><h2>Finn caiu na armadilha.</h2><p> Game Over!</p></div><div><div style="width: 312px; height: 312px;"><img src="src/img/spike_trap.gif"></div><button class="button-show" onClick="window.location.reload()">Retry</button></div></div>`

  }
}

const Finn = {
  nome: "Herói",
  hp: 100,
  vivo: true,
  atk: getRandomInt(10, 40),
};

const Enemy1 = {
  nome: "Inimigo gelado",
  hp: 100,
  vivo: true,
  atk: getRandomInt(5, 30),
};

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
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 4, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 5, 5],
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
  characterCell.innerHTML =
    '<div id="character" style="height: 16px"><img src="./src/img/finnIdle.gif" style="height: 16px;" width="16px"></div>';
}

function createEnemy() {
  const enemyCell = mapa.rows[golemY].cells[golemX];
  enemyCell.innerHTML =
    '<div id="character" style="height: 16px"><img src="./src/img/IceGolemIdle.gif" style="height: 16px;" width="16px"></div>';

  if (Enemy1.vivo == false) {
    enemyCell.innerHTML = "";
    mapArray[golemY][golemX] = 0;
  }
}

function createPotion() {
  const pocaoCell = mapa.rows[pocaoY].cells[pocaoX];
  pocaoCell.innerHTML =
    '<div id="pocao" style="height: 16px"><img src="./src/img/pocao.png" height="16px" width="16px"></div>';
}

//movimentação

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      mover_personagem("up");
      break;
    case "ArrowLeft":
      mover_personagem("left");
      break;
    case "ArrowDown":
      mover_personagem("down");
      break;
    case "ArrowRight":
      mover_personagem("right");
      break;
  }
});


createMap();
createCharacter();
createEnemy();
createPotion();

function attackEnemy() {
  finnAttack();
  enemyAttack();

  status_vida.innerHTML = `<h4 id="hp">HP: ${Finn.hp}</h4>`

  if (Finn.hp <= 0) {
    gameWindow = document.getElementById("tela");

    gameWindow.innerHTML = `<div id="tela_over" class="grid items-center justify-center"><div><h2>Finn morreu em confronto.</h2><p> Game Over!</p></div><div><div style="width: 312px; height: 312px;"><img src="src/img/gameover.gif"></div><button class="button-show" onClick="window.location.reload()">Retry</button></div></div>`
  }

  if (Enemy1.hp <= 0) {
    Enemy1.vivo = false;
    let newCharacterColumn = characterY;
    let newCharacterRow = characterX;
    characterX = newCharacterRow;
    characterY = newCharacterColumn;

    createCharacter();


    clearEnemy();
    mapArray[golemX][golemY] = 0;

    mapArray[newCharacterColumn + 1][newCharacterRow] = 0;
    mapArray[newCharacterColumn][newCharacterRow - 1] = 0;
    mapArray[newCharacterColumn][newCharacterRow + 1] = 0;

    createCharacter();

    attackButton.classList.remove("button-show");
    attackButton.classList.add("button-hidden");

    let log = document.getElementById("log");

    log.innerHTML += `<h4> Inimigo morreu! </h4>`

  }


}

function finnAttack() {
  Enemy1.hp = Enemy1.hp - Finn.atk;

  let log = document.getElementById("log");

  log.innerHTML += `<h4> Finn atacou!</h4>`

}

function enemyAttack() {
  Finn.hp = Finn.hp - Enemy1.atk;
  console.log(Finn.hp)

  let log = document.getElementById("log");

  log.innerHTML += `<h4> Inimigo atacou!</h4>`

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clearEnemy() {
  const above_Enemy = mapa.rows[golemY - 1].cells[golemX];
  const belowEnemy = mapa.rows[golemY + 1].cells[golemX];
  const leftEnemy = mapa.rows[golemY].cells[golemX - 1];
  const rightEnemy = mapa.rows[golemY].cells[golemX + 1];
  const deadEnemy = mapa.rows[golemY].cells[golemX];

  above_Enemy.classList.remove("tile-3");
  belowEnemy.classList.remove("tile-3");
  leftEnemy.classList.remove("tile-3");
  rightEnemy.classList.remove("tile-3");

  deadEnemy.classList.remove("tile-2");
  deadEnemy.classList.add("tile-0");

  above_Enemy.classList.add("tile-0");
  belowEnemy.classList.add("tile-0");
  leftEnemy.classList.add("tile-0");
  rightEnemy.classList.add("tile-0");

  createEnemy();
}

function usePotion() {
  if (pocao.quantidade > 0) {
    Finn.hp = Finn.hp + pocao.cura;

    pocao.quantidade -= 1;
    quant_pot.innerHTML = `<h4 id="pot"> Poção de Cura - ${pocao.quantidade}x <button onClick="usePotion()">Usar</button></h4>`;

    let log = document.getElementById("log");

    log.innerHTML += `<h4> Finn usou poção!</h4>`
  } else {
    quant_pot.innerHTML = `<h4 id="pot"> Poção de Cura - ${pocao.quantidade}x</h4>`;
  }
}
