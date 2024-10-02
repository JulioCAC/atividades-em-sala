import React from 'react'
import spring from '../assets/icons8-logotipo-da-primavera-48.png'

const TrabalhandoComImagemCondicional = ({ tipo }) => {
    const imagem = () => {
        if (tipo === "PUBLIC") {
            return <img src="./public/icons8-nativo-de-reagir-50.png" alt="imagem da pasta public"/>
        } else if (tipo === "ASSET"){
            return<img src={spring} alt="imagem de assets" />
        }
    }
  return (
    <div>
        {imagem()}
    </div>
  )
}

export default TrabalhandoComImagemCondicional