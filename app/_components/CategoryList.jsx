"use client";

import React, { useEffect, useRef, useState } from 'react'
import GetCategory, { GetItemBy } from '../_utils/Global';
import Image from 'next/image';
import { ArrowRightCircle, UserSearch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [items, setItem] = useState([]);
    const listRef = useRef(null)
    const params = useSearchParams();
    const [selectedCategory, setSelectCategory] =useState("all");
    useEffect(() => {
        const fetchCategories = async () => {
            const data = await GetCategory();
            setCategories(data);
            setSelectCategory(params.get('category'))
        };
        fetchCategories();
    }, [params]);
    console.log(categories)
    const GetById = async (e) => {
        e.preventDefault;
        const res = await GetItemBy(e);
        console.log(items)
        setItem(res)

    }
    const ScrollRightHandler = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                left: 100,
                behavior: 'smooth'
            })
        }
    }
    return (
        <div className='mt-10 relative'>
            <div className='flex gap-4 overflow-auto scrollbar-hide ' ref={listRef} >
                {categories.length > 0 ? (
                    categories.map((cat, index) => (
                        <Link href={`?category=${cat.id}&name=${encodeURIComponent(cat.name)}`} key={index} className={`flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28
                        hover:border-primary hover:bg-orange-50 cursor-pointer group
                        ${ selectedCategory == cat.id&&'text-primary border-primary bg-orange-50 '}
                            `} onClick={(e) => GetById(cat.id)}
                        >
                            <Image src={cat.url} alt={`Image of ${cat.name}`}
                                width={40}
                                height={40}
                            />
                            <h2 className='object-contain text-sm font-medium group-hover:text-primary'>{cat.name}</h2>
                        </Link>
                    ))
                ) : (
                    <p className='w-full items-center  text-primary font-medium text-center'>No categories found</p>
                )}

            </div>
            {
                categories.length > 0 ? (<ArrowRightCircle className='absolute -right-10 top-9 bg-primary rounded-full text-white h-8 w-8 cursor-pointer mr-7' onClick={() => ScrollRightHandler()} />) :
                    <></>
            }
            {/* <div className='flex overflow-auto scrollbar-hide mt-4'>
            {
                items.length > 0 ? (
                    items.map((item, index) => (
                        <div key={index} className='flex w-full items-center gap-2 border p-6 rounded-xl min-w-28 justify-between
                        hover:border-primary hover:bg-orange-50 cursor-pointer'>
                            <div className='text-center'>
                                <h1 className='text-primary text-lg'>{item.restaurant.name}</h1>
                                <p className='text-xs md:text-sm '>{item.restaurant.aboutUs}</p>
                            </div>
                            <div className='text-sm/snug md:text-xl text-center'>
                                {item.productName}
                            </div>
                            <div className='text-center '>
                                <h2 className=' mb-2 font-thin text-lg mr-3'>💲{item.price}</h2>
                                <Button className='text-center' >View</Button>
                            </div>

                        </div>
                    ))
                )
                    : (<div className='w-full p-5'>
                        <p className='text-center items-center'>No Data Found  </p>
                    </div>)
            }
            </div> */}
        </div>
    )
}

export default CategoryList