export function Footer (isDarkMode){
    return(
        <footer className="text-center mt-2"> <p className={`font-semibold font-serif ${isDarkMode ? 'dark:text-white': ''}`}>Blocick © 2023</p></footer>
    )
}