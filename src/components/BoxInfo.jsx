import React, { useState,useEffect } from 'react'

const BoxInfo = ({infoId}) => {
    const [search,setSearch]=useState('')
    const [info,setInfo]=useState()
    

    useEffect(()=>{
        const fetchpoki=async()=>{
            const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`) 
            const data=await res.json()
            console.log(data) 
            setInfo(data)
        }
        fetchpoki()
    },[search])

    useEffect(()=>{
        const fetchpoki=async()=>{
            const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${infoId}`) 
            const data=await res.json()
            console.log(data)
            setInfo(data)
        }
        fetchpoki()
    },[infoId])
    console.log(search)
  return (
    <div className=' flex flex-col items-center h-screen border-4 border-yellow-400 bg-white bg-opacity-35'>
      <input onChange={e=>(setSearch(e.target.value))} className='my-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Enter the Pokemon you want to Search ?' />
      <div className=" font-bold text-3xl text-red-500 pt-5 bg-black bg-opacity-100">
        Pokemon Info
      </div>
      <h1 className='pt-10 text-2xl font-bold'>{(info?.name)}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${info?.id}.png`} height={300} width={300}  alt="Pokemon Photo Appears Here" className='self-center pt-10'/>
      <h1 className='pt-10'>Specs</h1>

    </div>
  )
}

export default BoxInfo
