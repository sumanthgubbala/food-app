'use client';
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

const Header = () => {
  const router = useRouter();
  const [user, isUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      isUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <div className='flex justify-between items-center p-6 md:px-20 shadow-sm '>
      <Image src='/logo.png' alt='logo'
        width={200}
        height={150}
      ></Image>
      <div className='hidden md:flex border p-2 rounded-lg bg-gray-200 w-96 mr-1'>
        <input type='text' className='bg-transparent w-full outline-none' />
        <Search />
      </div>
      {
        isUser ?
          <>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png"  className='rounded-full w-10'/>
              <AvatarFallback>{user?.username?.[0]?.toUpperCase() || "U"}</AvatarFallback>
            </Avatar>
          </>
          : <div className='flex gap-5'>
            <Button variant="outline" onClick={() => router.push('/login')} >Login</Button>
            <Button onClick={() => router.push('/signup')}>Sign Up</Button>
          </div>
      }

    </div>
  )
}

export default Header