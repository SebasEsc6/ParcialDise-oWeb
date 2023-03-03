import React from 'react'
import { useState } from 'react'
import { AddChance } from './components/AddChance'
import { GifGrid } from './components/GifGrid'

export const Homepage = () => {
 
 const [chances , setChances] = useState('')
    
 const onAddChance = ( chance ) => {
    setChances( list => [...list, chance])
 }     
    return (
    <>
    <h1>Chances</h1>
    <AddChance onAddChance={onAddChance} />
    {chances.map(
        (chance, key) =>
        {
            return <GifGrid chance={chance} key={key}/>
        }

    )
    }
    </>
  )
}

