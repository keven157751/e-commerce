"use client"
import { useState } from "react";
import Link from "next/link";
import { CiHome, CiPenpot, CiShoppingCart, CiLocationArrow1, CiMenuBurger } from "react-icons/ci";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div className={`fixed inset-0 ${isOpen ? "block" : "hidden"}`}
            onClick={() => setIsOpen(false)}
        />
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`fixed top-4 left-4 z-50 p-2 rounded-md ${isOpen ? "bg-gray-600" : "bg-gray-700"} shadow-md text-white transition-transform duration-300 ${
            isOpen ? "translate-x-64" : "translate-x-0"
            }`}>
            {isOpen ? "<" : <CiMenuBurger size={20}/>}
        </button>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}>

        <nav className="mt-16 space-y-1 px-4 flex flex-col">
          <Link href="/">
            <div className="bg-gray-600 rounded-md pl-1 h-8 gap-2 flex flex-row items-center hover:bg-gray-700"><CiHome size={20}/>Home</div>
          </Link>
          <Link href="/products">
            <div className="bg-gray-600 rounded-md pl-1 h-8 gap-2 flex flex-row items-center hover:bg-gray-700"><CiPenpot size={20}/>Produtos</div>
          </Link>
          <Link href="/cart">
            <div className="bg-gray-600 rounded-md pl-1 h-8 gap-2 flex flex-row items-center hover:bg-gray-700"><CiShoppingCart size={20}/> Carrinho</div>
          </Link>
          <Link href="/contact">
            <div className="bg-gray-600 rounded-md pl-1 h-8 gap-2 flex flex-row items-center hover:bg-gray-700"><CiLocationArrow1 size={20}/>Contato</div>
          </Link>
        </nav>
      </div>
    </div>
  );
}
