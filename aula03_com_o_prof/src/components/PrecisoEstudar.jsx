import React from 'react'

const PrecisoEstudar = (props) => {
    const nomeDaTecnologia = props.name
    return (
        <div className='estudo'>
            <h1>Preciso estudar {nomeDaTecnologia}</h1>
        </div>
    )
}

export default PrecisoEstudar