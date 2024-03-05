import React, { useState } from "react";
// import Navbar from "../../component/navbar/navbar";
import style from "./register.module.css";
import emailjs from "@emailjs/browser";
import axios from "axios";

const About = () => {
  const [inputs, setinputs] = useState({});
  const [inputsErr, setinputsErr] = useState({});

  const service_id = "service_n4pm4rq";
  const template_id = "template_12345";

  const public_key = "A0pkQPdtY4_BmpdE9";

  const data = {
    user_name: inputs.name,
    user_email: inputs.email,
    to_name: "abhishek",
    message: inputs.enquire_text,
  };

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "name") {
      if (value.length < 4) {
        setinputsErr({
          ...inputsErr,
          ["nameErr"]: "name should greater than 4 and not empty",
        });
        console.log(inputsErr);
        return;
      } else {
        delete inputsErr.nameErr;
        setinputs((old) => {
          return { ...old, [name]: value };
        });
      }
    }

    if (name == "email") {
      const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

      if (!reg.test(value)) {
        setinputsErr({
          ...inputsErr,
          ["emailErr"]: "check your email and not empty",
        });
        return;
      } else {
        delete inputsErr?.emailErr;
        setinputs((old) => {
          return { ...old, [name]: value };
        });
      }
    }

    if (name === "mobile") {
      if (value.length < 10 || value.length > 10) {
        setinputsErr({
          ...inputsErr,
          ["telnoErr"]: "mobile no should be length 10 like 9814560954",
        });
        return;
      } else {
        delete inputsErr?.telnoErr;
        setinputs((old) => {
          return { ...old, [name]: value };
        });
        return;
      }
    }
    if (name === "enquire_text") {
      if (value.length < 10) {
        setinputsErr({
          ...inputsErr,
          ["enquire_textErr"]: "enquire text must greater than 10",
        });

        return;
      } else {
        delete inputsErr?.enquire_textErr;
        setinputs((old) => {
          return { ...old, [name]: value };
        });
      }
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    if (Object.keys(inputsErr).length < 1) {
      const mydata = {
        service_id: service_id,
        template_id: template_id,
        user_id: public_key,
        template_params: {
          from_name: inputs?.name,
          from_email: inputs?.email,
          from_con: inputs?.mobile,
          to_name: "abhi",
          message: inputs?.enquire_text,
        },
      };
      const response = await axios
        .post("https://api.emailjs.com/api/v1.0/email/send", mydata)
        .then((ele) => {
          if (ele?.data.toLowerCase() === "ok") {
            alert("Your Message Send To Abhishek Sucessfull");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("fill all inputs fields");
    }
  };

  return (
    <>
      <div id="registration" className="jumbotron text-center p-5 bg-info" style={{ textAlign: "center", color: "white" }}>
        <h1 style={{fontFamily:"poppins",}}>Enquire Form</h1>
      </div>

      <div className={style.main_container}>
        <div className={style.formabout_container}>
          <h2>
          Enquire - Form
            <hr style={{ width: "91px" }} />
          </h2>
          <i>
           If You have any enquiry related any courses.you can 
            <b  style={{color:"red"}}>Call us : 9501755691<br/></b>
            <p>Mail id : abhishekrajgaurav7@gmail.com</p>
            {/* <p style={{color:"blue"}}>contact me through form.</p> */}
          </i>
        </div>

        <div className={style.form_container}>
          <form onSubmit={(e) => handlesubmit(e)}>
            <label for="name1">Name:-</label>
            <br />
            <input
              type="text"
              id="name1"
              name="name"
              onChange={handlechange}
            />{" "}
            <br />
            {inputsErr?.nameErr &&
            <div class="alert alert-danger" role="alert">
            {inputsErr?.nameErr}
            </div>}
          
            <label for="email1" name="email">
              Email:-
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email1"
              onChange={handlechange}
            />
            <br />
            {inputsErr?.emailErr &&
            <div class="alert alert-danger" role="alert">
            {inputsErr?.emailErr}
            </div>}
           
            <label for="telno">mobile no.:-</label>
            <br />
            <input
              type="number"
              id="telno"
              name="mobile"
              onChange={handlechange}
            />{" "}
            <br />
            {inputsErr?.telnoErr &&
            <div class="alert alert-danger" role="alert">
            {inputsErr?.telnoErr}
            </div>}
          
            <label for="writehere">Enquire:-</label>
            <br />
            <textarea
              className={style.enquire_text}
              type="text"
              name="enquire_text"
              id="writehere"
              rows="5"
              placeholder="text here"
              onChange={handlechange}
            />{" "}
            <br />
            {inputsErr?.enquire_textErr &&
            <div class="alert alert-danger" role="alert">
            {inputsErr?.enquire_textErr}
            </div>}
          
            <input
              style={{
                width: "25%",
                height: "3rem",
                fontSize: "1rem",
                fontWeight: "800",
              }}
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
