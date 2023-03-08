import React from 'react'
import { useState } from 'react'
import { AddChance } from './components/AddChance'
import ShowChances from './components/ShowChances'

export const Homepage = () => {
 
 const [chances , setChances] = useState([])
 const [chance, setChance] = useState ("")
 const [show, setShow] = useState (false)
    
 const onAddChance = ( chance ) => {
    setChances( list => [...list, chance])
 }
 const Show = () =>{
  setShow(!show)
 }
 
    return (
    <>
    <div className='divmiddle'>
    <h1>Chances</h1>
    <AddChance onAddChance={onAddChance} />
    {console.log(chances)}
    <button onClick={Show}>Listar</button>
    {(show) ?
        <ShowChances chances={chances} />
        :
        <></>
    }
    
    </div>
    </>
  )
}

