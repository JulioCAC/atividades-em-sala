import React from 'react'
import './App.css'
import RenderizandoMensagem from './components/RenderizandoMensagem'


const App = () => {
  return (
    <div className='container'>
      <h1>Renderizando Mensagem</h1>
      <RenderizandoMensagem tipo={"sucesso"}/>
      <RenderizandoMensagem tipo={"erro"}/>
      <RenderizandoMensagem tipo={"aviso"}/>
    </div>
  )
}

export default App