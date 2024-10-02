import React from 'react'
import styles from './Exercicio4_1.module.css'

const Exercicio4_1 = (props) => {
    
    function defineMensagem(estacao) {
        if (estacao === "verao"){
            return "Tempo de praia e sol!";
        } else if (estacao === "outono"){
            return "Folhas caindo, outono chegando!";
        } else if (estacao === "inverno"){
            return "Época de frio e aconchego!";
        } else if (estacao === "primavera") { 
            return "Flores e cores, é primavera!";
        } else {
            return null;
        }
    };

    function defineCorDeFundo(estacao){

        if(estacao === "verao"){
            return styles.verao;
        } else if (estacao === "outono"){
            return styles.outono;
        } else if (estacao === "inverno") {
            return styles.inverno;
        } else if (estacao === "primavera") {
            return styles.primavera;
        } else { 
            null;
        }
    };
  return (
    <div className={defineCorDeFundo(props.estacao)}>
        <p>{defineMensagem(props.estacao)}</p>
    </div>

  )
}

export default Exercicio4_1