import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [personaje, setPersonaje] = useState("")
  const [imagen , setImagen] = useState("")
  const url="https://apisimpsons.fly.dev/api/personajes?limit=10"

  const min = 0;
  const max = 9;
  const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min; 

  function get(url) {
    fetch(url)
      .then(response=>{
        return response.json()
        
      })
      .then(data =>{
        console.log(data);
        setPersonaje(data.docs[randomInRange].Nombre)
        setImagen(data.docs[randomInRange].Imagen)
      })
    }

  useEffect(()=>{
    get(url)
  },[])
    
    

  return (
    <>
    <h1>El PERSONAJE QUE TE HA TOCADO ES: {personaje}</h1>
      <img src={imagen} alt="" srcset="" />
    </>
  )
}

export default App
