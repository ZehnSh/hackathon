import React from 'react'
import Styles from './footer.module.css';
import Link from 'next/link';


const footer = () => {
  return (
    <div className={Styles.footers}>
    
    <div className={Styles.foot1}>

    </div>

    <footer className="bg-gray-800 py-6 ">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-white">
          &copy; {new Date().getFullYear()} AgriSure. All rights reserved.
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M3.25 0C1.86 0 .75 1.11.75 2.5v19c0 1.39 1.11 2.5 2.5 2.5h9.37v-8.72H9.37V10h2.25V7.75c0-2.24 1.37-3.47 3.36-3.47.94 0 1.75.07 1.98.1v2.32h-1.36c-1.07 0-1.28.51-1.28 1.26V10h2.56l-.34 2.58h-2.22V24h4.36c1.39 0 2.5-1.11 2.5-2.5V2.5C21.25 1.11 20.14 0 18.75 0H3.25zm16.13 4h-1.53c-1.24 0-1.47.59-1.47 1.45V8.2h2.95l-.39 2.58h-2.56V24h-2.82v-9.65h-1.5V10h1.5V7.75c0-1.57.47-2.65 2.65-2.65H19.38V4z"
              />
            </svg>
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M8.218 20.238c8.237 0 12.755-6.825 12.755-12.755 0-.194 0-.386-.012-.577.875-.631 1.636-1.416 2.248-2.315-.811.362-1.68.604-2.587.716.93-.556 1.646-1.436 1.986-2.484-.87.519-1.838.895-2.87 1.096-.827-.88-2.003-1.43-3.305-1.43-2.499 0-4.52 2.03-4.52 4.53 0 .357.04.705.115 1.04C6.17 8.547 3.59 7.02 2.27 4.78c-.376.645-.59 1.394-.59 2.195 0 1.564.795 2.948 2 3.755-.74-.024-1.44-.23-2.054-.57v.057c0 2.19 1.558 4.02 3.63 4.43-.38.103-.784.16-1.197.16-.29 0-.573-.026-.85-.075.574 1.785 2.242 3.08 4.216 3.115-1.545 1.208-3.49 1.927-5.605 1.927-.37 0-.738-.022-1.102-.067C2.715 21.396 5.897 22.44 9.267 22.44"
              />
            </svg>
          </Link>
          <Link href='/aboutUS' className="text-white hover:text-yellow-400">
            About Us
          </Link>
        </div>
      </div>
    </footer>

    </div>


  )
}
export default footer;
