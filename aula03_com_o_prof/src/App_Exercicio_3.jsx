import React from 'react'
import ListaDeLivros from './components/ListaDeLivros'
import './App.css'
const App = () => {
  const listaLivros = [{titulo: 'teste', autor: 'testeAutor', ano: 'testeAno'}, {titulo: 'teste2', autor: 'testeAutor2', ano: 'testeAno2'}, {titulo: 'teste3', autor: 'testeAutor3', ano: 'testeAno3'}]
  return (
    <div className='container'>
      <h1>Lista de Livros</h1>
      <ListaDeLivros livros={listaLivros}/>

    </div>
  )
}

export default App