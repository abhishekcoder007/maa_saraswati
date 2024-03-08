import React,{useState} from "react";
import style from "./navbar.module.css";
import CloseIcon from '@mui/icons-material/Close';

const Navbar=()=>{
 const [show,setshow]=useState(false);

 const shownav=()=>{
    setshow(true)
 }
 const hidenav=()=>{
    
    setshow(old=>{
        if(old===false){
            return true
        }else return false})
 }



    return(
        <>

        
   
        <div className={style.main_container}>
            <div >
                <h1><a href="#main" style={{fontSize:"larger",fontWeight:"700",textDecoration:"none"}}>FruitFull </a></h1>
                <h5  className="text-center">Classes</h5>
            </div>
            <div className={style.main_containeritems} >
                <span> <a href="#main" style={{textDecoration:"none"}}>Home</a></span>
                <span> <a href="#courses" style={{textDecoration:"none"}}>Courses</a></span>
               
                <span> <a href="#students" style={{textDecoration:"none"}}>Student</a></span>
                <span> <a href="#registration" style={{textDecoration:"none"}}>Enquire</a></span>
                <span> <a className="btn btn-primary " href="#contactus" style={{textDecoration:"none"}}>Register Now</a></span>
                <div  className={style.main_mobileview}  onClick={hidenav}  onMouseEnter={shownav}>||||</div>

            </div>
        </div>

        {show&&<div className={style.mobilenav}>
        <p style={{ marginBottom:"21px",textAlign:"end"}} onClick={hidenav}><CloseIcon sx={{backgroundColor:"blue"}}/></p>
        <span> <a href="#1" style={{textDecoration:"none"}}>Home</a></span>
                <div> <a href="#courses" style={{textDecoration:"none"}}>Courses</a></div>
               
                <div> <a href="#students" style={{textDecoration:"none"}}>Student</a></div>
                <div> <a href="#registration" style={{textDecoration:"none"}}>Enquire</a></div>
                <div> <a className="btn btn-primary " href="#contactus" style={{textDecoration:"none"}}>Register Now</a></div>
        </div>}
    

        </>
    )
}

export default Navbar;

