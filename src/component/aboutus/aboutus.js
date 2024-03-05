import React from "react";
import style from "./aboutus.module.css";
import  samplepdf from "../../data/Abhishek-Raj-Gaurav-FlowCV-Resume-20240116.pdf"

const Aboutus = () => {
  return (
    <div>
      <div className={style.main}>
        <div className={style.leftsection}>
          <div className={style.myname}>Abhishek Raj Gaurav</div>
          <p className={style.intro_text}>
            " <span style={{color:"red"}}>Hello</span>, I'm Abhishek Raj Gaurav, a Full Stack MERN Developer. With a
            passion for crafting comprehensive digital solutions, I've had the
            privilege of wo-rking on numerous projects across the stack.
            <span style={{color:"yellow"}}> Currently, I'm contributing my expertise to MVT Company,</span> where I'm
            actively involved in driving innovation and efficiency through
            technology."
          </p>
          
          <button className={style.intro_button}><a target="_blank" href={samplepdf}  style={{textDecoration:"none",fontFamily:"fantasy",fontSize:"1rem"}}>My-Portfolio</a></button>
        
        </div>
        <div className={style.rightsection}>
          <div className={style.rightimg}>
            <img
              className={style.studimg}
              src="https://cdn.pixabay.com/photo/2016/11/14/03/16/book-1822474_1280.jpg"
            />
          </div>
          <img src="" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
