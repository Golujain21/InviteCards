"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'


const page = () => {
    
    const router = useRouter();
const navigate=()=>{
    router.push('/');

}
    useEffect(()=>{
        navigate()
    },[])

  return (
    <div>page</div>
  )
}

export default page

