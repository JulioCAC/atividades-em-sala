import React from 'react'
import './App.css'
import CelciusParaFahrenhein from './components/CelciusParaFahrenhein'

const App = () => {
  return (
    <div className='container'>
      <h1>Conversão de Unidades</h1>
      <CelciusParaFahrenhein celcius={24} /> 

    </div>
  )
}

export default App