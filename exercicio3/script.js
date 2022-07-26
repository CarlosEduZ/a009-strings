//Crie a const para a frase aqui
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
const novaFrase = frase.replaceAll("verde","rosa")
const novaFrase2 = novaFrase.replaceAll("azul", "laranja")
console.log(novaFrase2);
console.log(`a nova frase possui verde: ${novaFrase2.includes("verde")} e laranja: ${novaFrase2.includes("laranja")}`);

//extra

const extra1 = "Jorge tem uma casa verde e com portão azul, com os dizeres: "
const extra2 = "\"BOAS VINDAS, mas não deixe o gato sair\""
console.log(`${extra1} ${extra2.toUpperCase()}`);