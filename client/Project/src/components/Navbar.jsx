import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='h-30 bg-gray-800 text-white flex items-center px-8'>
            <ul className='flex-row space-x-4 '>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar
