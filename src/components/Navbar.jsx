import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-purple-600 text-black py-3'>
      <div className="logo">
        <span className='font-bold text-xl mx-7'>TO-DO App</span>
      </div>
      <ul className="flex gap-7 mx-7">
        <li className='hover:cursor-pointer hover:font-bold'><a href="#home">Home</a></li>
        <li className='hover:cursor-pointer hover:font-bold'><a href="#tasks">Tasks</a></li>
      </ul>
    </nav>
  )
}

export default Navbar