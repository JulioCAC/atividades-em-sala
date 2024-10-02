const mediaParaAprovacao = 7.0;

const notas = [8.50, 9.00, 10.00];

const media = (notas[0] + notas[1] + notas[2]) / notas.length;

function situacaoDoAluno(average){
    if (average >= mediaParaAprovacao){
        return "APROVADO";
    } else {
        return "REPROVADO";
    }
}
console.log(`A primeira nota do aluno é: ${notas[0]}`);
console.log(`A segunda nota do aluno é: ${notas[1]}`);
console.log(`A terceira nota do aluno é: ${notas[2]}`);
console.log(`A média do aluno é: ${media.toFixed(2)}`);
console.log(`O aluno está: ${situacaoDoAluno(media)}`);