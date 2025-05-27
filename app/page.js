"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CategoryList from "./_components/CategoryList";
import GetCategory from "./_utils/Global";

export default function Home() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <div>
      <CategoryList />
    </div>
  );
}
