"use client"
import { useState } from "react";
import Link from "next/link";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div className={`fixed inset-0 ${isOpen ? "block" : "hidden"}`}
            onClick={() => setIsOpen(false)}
        />
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`fixed top-4 left-4 z-50 p-2 rounded-md ${isOpen ? "bg-red-600" : "bg-blue-600"}  text-white transition-transform duration-300 ${
            isOpen ? "translate-x-64" : "translate-x-0"
            }`}>
            {isOpen ? "<" : ">"}
        </button>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}>

        <nav className="mt-16 space-y-1 px-4 flex flex-col">
          <Link href="/">
            <div className="bg-gray-600 rounded-md pl-1 h-8 flex flex-col justify-center hover:bg-gray-700">Home</div>
          </Link>
          <Link href="/about">
          <div className="bg-gray-600 rounded-md pl-1 h-8 flex flex-col justify-center hover:bg-gray-700">Product</div>
          </Link>
          <Link href="/contact">
          <div className="bg-gray-600 rounded-md pl-1 h-8 flex flex-col justify-center hover:bg-gray-700">Contact</div>
          </Link>
        </nav>
      </div>
    </div>
  );
}
