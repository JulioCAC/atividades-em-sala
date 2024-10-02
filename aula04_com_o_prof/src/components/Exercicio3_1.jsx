import React from 'react'

const Exercicio3_1 = ({condicao}) => {

    const estilo = {
        color: condicao ? '#0000ff' : '#000000',
        backgroundColor: condicao ? '#ffc0cb' : '#ffffff',
        wedth: condicao ? '300px' : '250px',
        padding: condicao ? '15px' : '5px'
    }

  return (
    <div style={estilo}>
        texto texte da atividade 3_1
    </div>
  )
}

export default Exercicio3_1