import React from 'react'

const App = () => {

  const estilo = {
    color: '#ffa500',
    backgroundColor: '#808080',
    height: '150px',
    margin: '20px'
  }

  return (
    <div style={estilo}>
      Aqui está o meu componente com estilo inline!
    </div>
  )
}

export default App