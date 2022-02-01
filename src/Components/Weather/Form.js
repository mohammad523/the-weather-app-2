import React, { useState } from 'react'
import cityData from './data'


function Form({handleSubmit,zipCode, setZipCode}) {



    const handleZipChange = (event) => {
        setZipCode(event.target.value)

    }

    
    

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='zip'></label>
            <input type='text' value={zipCode} onChange={handleZipChange} id='zip'/>
            <input type='submit' value='Add Zip'/>
        </form>





    )
}

export default Form