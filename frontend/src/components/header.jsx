import { Link } from "react-router-dom"
export function Header (){
    return (
        
         <header>
                <Link to='/'><h1 className='text-4xl font-bold font-serif transition duration-300 ease-in-out transform hover:scale-110 mt-4 ml-4 inline-block'>Blocick.</h1></Link>
            </header>
        
    )
}