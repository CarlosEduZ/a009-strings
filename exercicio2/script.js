const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const semEspaco = minhaString.trim(); 
console.log(`A String possui ${minhaString.length} caracteres, após remover os espaços fica ${semEspaco.length}`);

const novaString = minhaString.replaceAll("________", "sticioso")
console.log(novaString);
