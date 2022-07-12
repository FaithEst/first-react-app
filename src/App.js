import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
// import Header from "./Header"
// import Footer from "./Footer"
// import MainContent from "./MainContent"

export default function App (){
    return (
        <section>
            {/* <Header />
            <MainContent />
            <Footer /> */}

            <Navbar />
            <Main />
        </section>
    )
}