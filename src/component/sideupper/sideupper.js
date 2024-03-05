// import style from "./sideupper.module.css";

// export default function Sideupper() {
//   var cardData = [
//     { title: 'Card 1', text: 'Some content for Card 1' },
//     { title: 'Card 2', text: 'Batch started enroll now' },
//     { title: 'Card 2', text: 'Batch started enroll now' },
//     { title: 'Card 2', text: 'Batch started enroll now' },
//     { title: 'Card 2', text: 'Batch started enroll now' },
//     { title: 'Card 2', text: 'Batch started enroll now' },
//     // Add more card data as needed
//   ];

//   return (
//     <>
//       <div className={style.head_container}>
//         {cardData.map((card, index) => (
//           <div key={index} className={`mycard card m-2 ${style.mycard}`} style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
//             <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?size=626&ext=jpg" style={{ height: "11em", objectFit: "cover" }} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">{card.title}</h5>
//               <p className="card-text">{card.text}</p>
//               <a href="#" className="btn btn-secondary">Go somewhere</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

import { useEffect } from 'react';
import $ from 'jquery';
import style from "./sideupper.module.css";

export default function Sideupper() {
    
  useEffect(() => {
    $(".mycard").mouseenter(function(){
      $(this).css("transition","1s");
      $(this).css("width","25rem");
      $(this).css("height","50%");
      $(this).css({"position":"relative","background-color": "yellow", "font-size": "17px","z-index":"+1"});
      $("#head_container").css({"background-color": "blue"});
    });

    $(".mycard").mouseleave(function(){
      $(this).css("transition","1s");
      $(this).css("width","18rem");
      $(this).css({"background-color": "white", "font-size": "16px"});
      $("#head_container").css({"background-color": "white"});
    });
  }, []); // empty dependency array ensures that this effect runs only once after the initial render

  var cardData = [
    { title: 'Class 6', text: 'Batch started enroll now '},
    { title: 'Class 7', text: 'Batch started enroll now' },
    { title: 'Class 8', text: 'Batch started enroll now' },
    { title: 'Class 9', text: 'Batch started enroll now' },
    { title: 'Class 10', text: 'Batch started enroll now' },
    { title: 'Class 11', text: 'Batch started enroll now' },
    { title: 'Class 12', text: 'Batch started enroll now' },
    { title: 'IIT/JEE', text: 'Batch started enroll now' },
    { title: 'NEET/MEDICAL', text: 'Batch started enroll now' },
    { title: 'Olympiad', text: 'Batch started enroll now' },
  
    // Add more card data as needed
  ];

  return (
    <>
    <div className='jumbotron p-5 mt-2 shadow-lg rounded bg-white'>
      <h1 className='text-center'>Our Courses</h1>
    </div>
      <div id="head_container" className={`container-fluid ${style.head_container}`}>
        {cardData.map((card, index) => (
          <div key={index} className={`mycard card m-2 ${style.mycard}`} style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?size=626&ext=jpg" style={{ height: "11em", objectFit: "cover" }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <a href="#features" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

