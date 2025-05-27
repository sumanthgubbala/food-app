"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Access localStorage only on the client
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      {user ? (
        <>
          <div>
            <p>Hello, {user?.username || user?.email || "User"}!</p>
            <Avatar>
              <AvatarImage src="https://github.com/sshadcn.png" />
              <AvatarFallback>{user?.username?.[0]?.toUpperCase() || "U" }</AvatarFallback>
            </Avatar>
          </div>
        </>
      ) : (
        <p>Please log in to continue.</p>
      )}
  <Button>Button</Button>

    </div>
  );
}
