import React from 'react'
import spring from '../assets/icons8-logotipo-da-primavera-48.png'

const TrabalhandoComImagens = () => {
  return (
    <div className='container'>
        <h1>Trabalhando com Imagens</h1>
        <div className='imagens'>
            <div className='imagem'>
                <h2>Imagem do Public</h2>
                <img src="./public/icons8-nativo-de-reagir-50.png" alt="imagem da pasta public"/>
            </div>
            <div className='imagem'>
                <h2>Imagem do Assets</h2>
                <img src={spring} alt="imagem de assets" />
            </div>
        </div>
    </div>
  )
}

export default TrabalhandoComImagens