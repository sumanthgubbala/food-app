"use client";
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Global, { GetItemBy, GetRestarunats } from '../_utils/Global';
import ResturantItem from './ResturantItem';
import ItemsSkelton from './ItemsSkelton';

const BusinessList = () => {
    const params = useSearchParams();
    const [category, setCategory] = useState('all');
    const [restaurants, setRestaurants] = useState([]);
    const name = params.get('name');
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        const selectedCategory = params.get('category') || 'all';
        setCategory(selectedCategory);
        getBusinessList(selectedCategory);
    }, [params]);

    const getBusinessList = async (category_) => {
        try {
            setLoading(true)
            const res = await GetItemBy(category_);
            console.log(res)
            setRestaurants(res);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
            setRestaurants([]); // fallback to empty list
        }
    };


    return (
        <div className='mt-5'>
            <h2 className='font-bold text-2xl'>Popular {name} Restaurant</h2>
            <h3 className='font-bold text-primary'>{restaurants.length} Results</h3>
            <div className='grid grid-cols-1 
                        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                        gap-7 mt-3
                        '>
                { !loading ?
                    restaurants.length > 0 ? (
                        restaurants.map((r, index) => (
                            <ResturantItem key={index}
                                resturants={r.restaurant}
                            />
                        )))

                        : (<p>No restaurants found on {params.get('name')}</p>)
                :
                [1,2,3,4,5,6,7,8].map((item,index)=>(
                    <ItemsSkelton />
                ))
                } 

            </div>
        </div>
    )
}

export default BusinessList