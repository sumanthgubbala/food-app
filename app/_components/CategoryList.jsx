"use client";

import React, { useEffect, useState } from 'react'
import GetCategory from '../_utils/Global';
import { Carousel } from '@/components/ui/carousel';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const data = await GetCategory();
            setCategories(data);
        };
        fetchCategories();
    }, []);
    console.log(categories)
    return (
        <div className='mt-10 relative'>
            <div className='flex gap-4 overflow-auto'>
            {categories.length > 0 ? (
                categories.map((cat, index) => (
                    <div className='flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28
                        hover:border-primary hover:bg-orange-50 cursor-pointer group
                    ' key={index}>
                        <Image src={cat.id} alt={cat.name} 
                            width={40}
                            height={40}
                        />
                        <h2 className='text-sm font-medium group-hover:text-primary'>{cat.name}</h2>
                    </div>
                ))
            ) : (
                <p>No categories found</p>
            )}
            
        </div>
        <ArrowRightCircle className='absolute -right-10 top-9 bg-primary rounded-full text-white h-8 w-8 cursor-pointer' />
        </div>
    )
}

export default CategoryList