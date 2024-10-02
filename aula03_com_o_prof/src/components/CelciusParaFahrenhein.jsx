import React from 'react'

const CelciusParaFahrenhein = ({celcius}) => {
    const fahrenheit = (celcius * 9/5) + 32;
    return (
    <div className='conversao'>
        <p>{celcius}°C é o mesmo que {fahrenheit}°F</p>
    </div>
    )
}

export default CelciusParaFahrenhein