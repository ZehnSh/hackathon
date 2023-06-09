import React from "react";
import Link from "next/link";



export default function Navbar(){
    

    return (
        <div>
        <header>
          <nav className="flex justify-between items-center">
            <Link href="/">
              <button type="button">
                <img className="w-28 mt-8 h-24 ml-16" src="/logo.png" />
              </button>
            </Link>
  
            <ul className="flex justify-center align-center ">
             
              <li>
              <Link href="/">
              <button
                type="button"
                className=" shadow-md  mr-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-8 mb-2"
              >  
                 🏠 Home
              </button>
              </Link>
            </li>
            </ul>
          </nav>
        </header>
  </div>
    )
}