import React from 'react';

const Exercicio_3 = ({ condicao }) => {

  const estilo = {
    color: condicao ? '#ffa500' : '#008000',    
    backgroundColor: condicao ? '#808080' : '#ffff00',  
    height: condicao ? '150px' : '100px',        
    margin: condicao ? '20px' : '10px'          
  };

  return (
    <div style={estilo}>
      Aqui está o meu componente com estilo inline dinâmico!
    </div>
  );
};

export default Exercicio_3;
