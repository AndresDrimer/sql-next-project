import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductCard({it}) {
  return (
    <Link href={`/products/${it.id}`} key={it.id} >
            <div className='border-gray-200 shadow-md p-6 mb-6 rounded-xl '>
            <h1 className='text-4xl text-bold'>{it.name}</h1>
            
            <p className='text-md'>{it.description}</p>
            <p>${it.price}</p>
              <p><span className='text-gray-400 text-xs'>{it.createdAt}</span></p>
            </div></Link>
  )
}

export default ProductCard