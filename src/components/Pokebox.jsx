import React from 'react'
import Box from './Box'


const Pokebox = ({poke,prevClick,nextClick,countRef,handleClick,deleteItem}) => {

  return (
    
        <div className="grid grid-cols-3 border-4 border-yellow-400 gap-10 bg-white bg-opacity-40">
         { poke.map((pokemon,i)=>(
            <Box key={i} deleteItem={deleteItem} poke={pokemon} pokemonIndex={i} countRef={countRef} handleClick={handleClick} />
          ))
        }
          <div className="flex items-center justify-stretch">
          <button onClick={()=>prevClick()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-3 mr-3'>Previous</button>
          <button onClick={()=>nextClick()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-3 mr-3'>Next</button>
        </div>  
        </div>
        

  )
}

export default Pokebox
