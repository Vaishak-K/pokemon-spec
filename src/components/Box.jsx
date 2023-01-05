import { data } from 'autoprefixer'
import React from 'react'

const Box = ({poke,pokemonIndex,countRef,handleClick,deleteItem}) => {
  const pokeid=pokemonIndex+1+countRef.current
  console.log(pokeid)
  return (
    <div className='flex flex-col items-center border-4 border-black p-3 bg-yellow-300 opacity-100'>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeid}.png`} alt="image with appear here" />
      <h1 className='font-bold text-2xl'>{poke.name}</h1>
      <div className="flex justify-between items-end">
      <button onClick={()=>handleClick(pokeid)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-3 mr-3'>Info</button>
      <button onClick={()=>deleteItem(pokemonIndex)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-3 ml-3'>Delete</button>
      </div>
    </div>
  )
}

export default Box
