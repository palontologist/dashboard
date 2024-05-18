"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-between font-mono text-sm lg:flex">
      <div className="flex flex-col items-center">
      <div className = "bg-white rounded-xl h-[400px] w-[400px] flex items-center justify-center"></div>
    
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
      <input
      className="p-1 rounded"
      name="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      />
      <button className="p-1 bg-blue-500 text-white rounded">Submit</button>
      </form>
      
      </div>
      </div>
    </main>
  );
}
