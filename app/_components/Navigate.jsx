"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Navigate = () => {
  const router = useRouter();

    useEffect(() => {
        router.push("/");
      }, []);
    
  return (
    <div>Navigate</div>
  )
}

export default Navigate