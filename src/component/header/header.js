import React ,{useState,useEffect} from 'react';
import style from "./header.module.css";
import img1 from "../../data/Frame.png"

const Header = () => {

  const [mtnumber,setMtnumber]=useState("")
  const [count,setcount]=useState(0)
  let num="9501755691";
useEffect(()=>{
  const interval=setInterval(addnumber,1000)
  return ()=>clearInterval(interval)
},[count])
 
  function addnumber(){
    if(count==num.length-1){
      setMtnumber("")
      setcount(0)
      return
    }
  
console.log("hello"+count+num.length)
   setMtnumber(old=>{
  return  old+=num.slice(count,count+1)
   })
   setcount(count+1)
 
 

  }
  // setInterval(addnumber,1000)
  return (
    <div>
      <div className={`${style.main_body} row m-2 overflow-x-hidden `}> 
        <div className={`${style.body_container} col-md-6 align-center p-5 text-start`}>
          <h5>Are You Ready To Learn </h5>
          <h1>Free demo classes </h1>
          <h1>Learn with<span className={style.text_design}> Live class </span> and <span> doubt sessions</span> </h1>
          <h2>We prepare student for <span className={style.text_design}>IIT/JEE OLYMPIAD 11-12Th 9-10th & 6-8th class student</span> <span> to perform better in their career</span></h2>
          <h3>Proper <span>topic-wise test</span> <span>monthly test</span></h3>
          <p className={style.callnow}><span>Call-Now :-</span> <span className={style.callnow}>{mtnumber}</span></p>
          <p>Don't waste time, <span className='text-info'>Registration free upto 30th April 2024</span> Register now.</p>
          <a href="#contactus"className={`btn btn-success p-2 btn-lg`}>Register</a>
        </div>
        
        <div className={`col-md-6`}>
          <img style={{ width: "100%", margin: "auto" }} className={`img-fluid m-4`} src={img1} /> 
        </div>
      </div>
    </div>
  );
};

export default Header;

