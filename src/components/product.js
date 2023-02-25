import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
export default function Product() {
    const a = useContext(noteContext);
    useEffect(()=>{
        a.update()
    },[])
  return (
    <div>
    product
    <h1>{a.state.name }</h1>
    </div>
  )
}
