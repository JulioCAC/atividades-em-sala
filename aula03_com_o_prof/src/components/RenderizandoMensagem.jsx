import React from 'react'

const RenderizandoMensagem = ({ tipo }) => {
    const mensagem = () => {
        if (tipo === "sucesso"){
            return <h1>Sucesso!</h1>
        } else if (tipo === "erro"){
            return <h2>Erro!</h2>
        } else if (tipo === "aviso"){
            return <h3>Aviso!</h3>
        } else {
            return null
        }
    }
  return (
    <div className='mensagem'>
        {mensagem()}
    </div> 
  )
}

export default RenderizandoMensagem