
import Header from "../../component/header/header";
import Mentors from "../../component/mentor/menters";
import Navbar from "../../component/navba/navbar/navbar";
import Sideupper from "../../component/sideupper/sideupper";
import About from "../aboutcourse/aboutcourse";
import Register from "../register/register";
import Sturegister from "../studentregister/sturegister";
import style from "./home.module.css"

export default function Home (){
    return(
        <>
          <div className={style.mainnav}>
        <Navbar/>
        </div>
        <div className={style.mainheader} id="main">
        <Header/>
        </div>
        <div id="courses">
        <Sideupper/>
        </div>
        <div id="contactus">
        <Sturegister/>
        </div>
        <Mentors/>
        <div id="features">
        <About/>
        </div>
        <div id="registeration">
        <Register/>
        </div>
      
       

        </>
    )

}