import React from "react";
import Navbar from "./Navbar";
import Curosals from "./Home/Curosals";
import Category from "./Home/Category";
import GameChanger from "./Home/GameChanger";
import Overview from "./Home/Overview";
import Overview2 from "./Home/Overview2";
import Overview3 from "./Home/Overview3";
import Sliding from "./Home/Sliding";
import About from "./Home/About";
import Cards from "./Home/Cards";
import Footer from "./Footer";



const Home=()=>{
    return (
        <div>
           
             {/* <Navbar/> */}
             <Curosals/>
             <Category/>
             <GameChanger/>
             <Overview/>
             <Overview3/>
             <Overview2/>
             <Cards/>
             <About/>
           
            <Sliding/>
            <Footer/>

            
        </div>
    )
}

export default Home;