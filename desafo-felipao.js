let nome = "Falcão solar";
let xp = prompt("Digite o xp do Herói: ");

if (xp <= 1000) {
  console.log(`O herói de nome ${nome} está no nivel ferro`);
} else if (xp <= 2000) {
  console.log(`O herói de nome ${nome} está no nivel bronze`);
} else if (xp <= 5000) {
  console.log(`O herói de nome ${nome} está no nivel prata`);
} else if (xp <= 6000) {
  console.log(`O herói de nome ${nome} está no nivel diamante`);
} else if (xp <= 8000) {
  console.log(`O herói de nome ${nome} está no nivel platina`);
} else if (xp <= 9000) {
  console.log(`O herói de nome ${nome} está no nivel ascendente`);
} else if (xp <= 10000) {
  console.log(`O herói de nome ${nome} está no nivel imortal`);
} else {
  console.log(`O herói de nome ${nome} está no nivel radiante`);
}
