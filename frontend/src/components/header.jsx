import { Link } from "react-router-dom"
import { DarkMode } from "./darkMode"
export function Header (isDarkMode){
    return (
        
         <header>
            <div className="flex justify-between">
                <Link to='/'><h1 className={`text-4xl font-bold font-serif transition duration-300 ease-in-out transform hover:scale-110 mt-4 ml-4 inline-block ${isDarkMode ? 'dark:text-white': ''}`}>Blocick.</h1></Link>
                <div className="mt-4 mr-4"><DarkMode/></div>
            </div>
            </header>
        
    )
}