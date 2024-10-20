import Data from '@/Shared/Data'
import React from 'react'

const Category = () => {
  return (
    <div className='mt-40 mb-10'>
        <h2 className='font-bold text-3xl text-center mb-6'>Browse By Type</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-9 px-20'>
            {Data.Category.map((cat,index)=>(
                <div key={index} className='flex items-center flex-col hover:shadow-md cursor-pointer border rounded-xl p-3'>
                    <img className='opacity-75' src={cat.icon} alt={cat.name} width={35} height={35} text-black />
                    <h2 className='mt-2 font-semibold text-sm'>{cat.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category