function exibirDados() {
  const usuarios = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
  const frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];

  frutas.reverse();

  const resultadoEsperado = [];

  for (let i = 0; i < usuarios.length; i++) {
    resultadoEsperado.push(`${usuarios[i]} - ${frutas[i]}`);
  }

  console.log(resultadoEsperado);
}

exibirDados();



