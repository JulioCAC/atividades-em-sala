import React from 'react'

const App = () => {

  const estilo = {
    color: '#008000',
    backgroundColor: '#ffff00',
    height: '100px',
    fontWeight: 'bold'
  }

  return (
    <div style={estilo}>
      Aqui está o meu componente com estilo inline!
    </div>
  )
}

export default App