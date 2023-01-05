import { useEffect, useRef, useState } from 'react'
import Pokebox from './components/Pokebox'
import './App.css'
import { data, info } from 'autoprefixer'
import BoxInfo from './components/BoxInfo'


function App() {
  const [pokemon, setPokemon] = useState([])
  const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon')
  const [data,setData]=useState()
  const [infoId,setInfoId]=useState()
  const countRef=useRef(0)

  useEffect(()=>{
    const poke=async()=>{
      const res=await fetch(url)
      const data=await res.json()
      setData(data)
      setPokemon(data.results)
    
}
  poke()
  
  },[url])

  const nextClick=()=>{
    data.next && setUrl(data.next)
    countRef.current+=20
  }
  const prevClick=()=>{
    data.previous && setUrl(data.previous)
    countRef.current-=20
  }
  const handleClick=(pokeid)=>{
    setInfoId(pokeid)
  }
  console.log(pokemon)
  const deleteItem=(id)=>{
    console.log(id)
    
    setPokemon((pokemon)=>pokemon.filter((pokem,i)=>( i!==id) ))
  }
  return (
    <>
    <div className="flex flex-col bg-[url('./assets/pokemon.jpg')] bg-cover bg-fixed pt-4" >
      <div className=' self-center'>
       <h1 className='font-bold text-2xl text-yellow-300'>Pokemon Data </h1>
      </div>
      <div className="grid grid-cols-2 gap-3">
     <div>
        <Pokebox poke={pokemon} deleteItem={deleteItem} prevClick={prevClick} nextClick={nextClick} countRef={countRef} handleClick={handleClick} />
     </div>
     <div>
      <BoxInfo infoId={infoId} />
     </div>
     </div>
        <footer>ALL Rights Reserved</footer>
      </div>
    </>
  )
}

export default App
