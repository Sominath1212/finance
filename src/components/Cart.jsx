import React from 'react'

import { Link } from 'react-router-dom'
function Cart({ title, image, path }) {
    return (
        <Link to={path}>
            <div className=' border-sky-500 border-[5px] rounded flex items-center flex-col py-2 px-3 justify-center'>
                <img src={image}  alt="" className=' max-h-28 max-w-28' />
                <h3 className='text-blue-400'>{title}</h3>
            </div>
        </Link >
    )
}

export default Cart