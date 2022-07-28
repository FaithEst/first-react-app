import React, {useState} from "react";
import Main from "./components/react-facts/Main";
import Navbar from "./components/react-facts/Navbar";
// import Header from "./Header"
// import Footer from "./Footer"
// import MainContent from "./MainContent"

export default function App (){
    const [darkMode, setDarkMode] = useState(true);
    function handleModeChange(){
        return setDarkMode(prevMode => !prevMode)
    }

    return (
        <section>
            <Navbar 
                darkMode={darkMode}
                toggleDarkMode={handleModeChange}
            />
            <Main darkMode={darkMode} />
        </section>
    )
}