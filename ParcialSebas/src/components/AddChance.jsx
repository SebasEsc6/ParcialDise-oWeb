import React from 'react'
import { useState } from 'react'


const loterias = [
    {id : 1, nombre:'DelValle'},
    {id : 2, nombre:'Caucana'},
    {id : 3, nombre:'Caleña'}];


export const AddChance = ({onAddChance}) => {
    const [loteriaValue, setLoteriavalue] = useState('')
    const [numeroValue, setNumeroValue] = useState('')
    const [precioValue, setPrecioValue] = useState('')
   
    const onInputChangeL = (event) => {
        setLoteriavalue(event.target.value)
    }
    const onInputChangeN = (event) => {
        setNumeroValue(event.target.value)
    }
    const onInputChangeV = (event) => {
        setPrecioValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        onAddChance(loteriaValue, numeroValue, precioValue);
        setLoteriavalue('')
        setNumeroValue('')
        setPrecioValue('')
    }

    return (
    <>
        <form onSubmit={(event) => onSubmit(event)}>
            <select value={loteriaValue} onChange={(event) => onInputChangeL(event)}>
                {loterias.map((nombre) =>{
                    <option>
                        {nombre}
                    </option>
                } )}
            </select>
            <input type='text' placeholder='Número' value={numeroValue} onChange={(event) => onInputChangeN(event) }></input>
            <input type='text' placeholder='Precio' value={precioValue} onChange={(event) => onInputChangeV(event) }></input>
            </form>    
    </>
  )
}

