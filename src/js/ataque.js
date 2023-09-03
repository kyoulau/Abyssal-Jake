const finn = {
  nome: "Herói",
  qtdVidaFinn: 100,
  vivo: true,
  valorAtaque1: 10,
  valorAtaque2: 20,
  valorAtaque3: 25,
};

const Enemy1 = {
  nome: "Inimigo gelado",
  qtdVidaEnemy: 100,
  vivo: true,
  ataque1:  5,
  ataque2:  10,
  ataque3: 25,
  danoEnemy: 10,
};


function attackEnemy() {
  console.log("Atacando")

  if (valorAtaque1 > danoEnemy){
    console.log("morreu !!!!!!!")
  }
  

  if (finn.qtdVidaFinn <= 0) {
    finn.saude = 0; // Garante que a saúde não seja negativa
    finn.estaVivo = false; // Define o jogador como derrotado
  }
  
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}