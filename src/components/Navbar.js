import React from 'react'
import { FaBars, FaCartArrowDown, FaUserAlt } from "react-icons/fa"
import { BiSearch } from "react-icons/bi"
function Navbar() {
    return (
        <div className='w-full h-[80px] border-b flex px-5 justify-between items-center md:px-20'>
            <div className="text-4xl font-semibold text-textcolor ">
                <a href='#'>Zay</a>
            </div>
            <ul className='hidden md:flex border w-2/5 justify-between'>
                <li className='hover:text-textcolor duration-300'>
                    <a href="#">Home</a>
                </li>
                <li className='hover:text-textcolor duration-300'>
                    <a href="#">About</a>
                </li>
                <li className='hover:text-textcolor duration-300'>
                    <a href="#">Shop</a>
                </li>
                <li className='hover:text-textcolor duration-300'>
                    <a href="#">Contact</a>
                </li>
            </ul>

            <div className="flex md:w-[10%] border justify-around">
                <FaBars className='text-[#7E7E7E] text-3xl md:hidden' />
                <BiSearch className='hidden md:block text-xl' />
                <FaCartArrowDown className='hidden  md:block text-xl' />
                <FaUserAlt className='hidden  md:block text-xl' />
            </div>
        </div>
    )
}

export default Navbar