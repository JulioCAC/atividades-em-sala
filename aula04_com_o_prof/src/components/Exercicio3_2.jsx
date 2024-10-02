import React from 'react'

const Exercicio3_2 = ({ isPrimary, isLarge }) => {
    const estilo = () => {
        if (isPrimary && isLarge) {
            return {
              color: '#ffffff',
              background: '#0000ff',
              width: '400px',
              padding: '20px'
            };
          } else if (isPrimary && !isLarge) {
            return {
              color: '#ffffff',
              background: '#008000',
              width: '200px',
              padding: '10px'
            };
          } else if (!isPrimary && isLarge) {
            return {
              color: '#000000',
              background: '#ffff00',
              width: '300px',
              padding: '15px'
            };
          } else {
            return {
              color: '#000000',
              background: '#808080',
              width: '150px',
              padding: '5px'
            };
          }

    }
  return (
    <div style={estilo()}>
        teeeedssteeee

    </div>
  )
}

export default Exercicio3_2