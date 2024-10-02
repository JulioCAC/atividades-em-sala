let aluno = {
    nome: "Júlio",
    cpf: "123.123.123-12",
    cidade: "João Pessoa", 
    notas: [8.00, 9.00, 9.50, 10.00]
};
console.log("Nome:" + aluno.nome);
console.log("CPF:" + aluno.cpf);
console.log("Cidade:" + aluno.cidade);
console.log(`A primeira nota do aluno é: ${aluno.notas[0]}`);
console.log(`A segunda nota do aluno é: ${aluno.notas[1]}`);
console.log(`A terceira nota do aluno é: ${aluno.notas[2]}`);
console.log(`A quarta nota do aluno é: ${aluno.notas[3]}`);

const media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3]) / aluno.notas.length;

console.log(`A média do aluno é: ${media.toFixed(2)}`);

const notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];

console.log(`A nota sorteada foi: ${notaAleatoria} e convertida para a escala de 0-100 é ${notaAleatoria * 10}`);
