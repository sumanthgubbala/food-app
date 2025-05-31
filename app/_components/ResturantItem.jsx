"use client";
import Image from 'next/image';
import React from 'react'


const ResturantItem = ({ resturants }) => {
    const defaultImage = 'https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg';
    return (
        <div className='p-3 hover:border rounded-xl hover:border-primary cursor-pointer hover:bg-orange-50 ' >
            <Image src={resturants.url || defaultImage} alt="Restaurant image" width={500} height={130}
                className='h-[130px] rounded-xl object-cover '
            />
            <div className='mt-2'>
                <h2 className='font-bold tex-lg'>{resturants.name}</h2>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <Image src="/star.png" alt='reating'
                            width={14}
                            height={14}
                        />
                        <label className='text-gray-400 text-sm'>4.5</label>
                        {/* <h2>{resturants.type[0]}</h2> */}
                        <h2 className='text-sm text-gray-400'>indain style</h2>
                    </div>
                    <h2 className='text-sm text-primary'>{resturants.products[0].category.name}</h2>
                </div>
            </div>
        </div>

    )
}

export default ResturantItem