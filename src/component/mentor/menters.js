import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Mentors = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const mentorsData = [
    {
      name: "Abhishek Raj Gaurav",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9TUpmQpgd92YS7hg39SxC_rGkvcfAhIz0Z5Dssa3CnZuDq3sy",
      description: "web developer and app developer",
      sub: "chemistry",
    },
    {
      name: " Er. Shankar kumar",
      desing: "B.tech in Mechanical Engineering/M.Tech",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9TUpmQpgd92YS7hg39SxC_rGkvcfAhIz0Z5Dssa3CnZuDq3sy",
      description: "3 year experience",
      sub: "math & physics",
    },
    {
      name: " Amit Ranjan",
      desing: "M.A in Political Science ",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9TUpmQpgd92YS7hg39SxC_rGkvcfAhIz0Z5Dssa3CnZuDq3sy",
      description: "3 year experience",
      sub: "History Geography Economics",
    },
    {
      name: " Er. Shushant kumar",
      desing: "B.tech in Mechanical Engineering/M.Tech",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9TUpmQpgd92YS7hg39SxC_rGkvcfAhIz0Z5Dssa3CnZuDq3sy",
      description: "3 year experience",
      sub: "mathematics",
    },
    {
      name: " Er. Prashant kumar",
      desing: "M.B.B.S",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9TUpmQpgd92YS7hg39SxC_rGkvcfAhIz0Z5Dssa3CnZuDq3sy",
      description: "3 year experience",
      sub: "Biology & Chemistry",
    },
  ];
  return (
    <>
      <div class="mt-4 p-5 bg-primary text-white text-center rounded">
        <h1>Our Mentors</h1>

        <p>
          All are<b style={{ color: "red" }}> experienced </b>teacther with{" "}
          <b style={{ color: "red" }}>minimum 2+ years </b>of experience.
        </p>
      </div>

      <div className="container-fluid mt-2 ">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-10-px"
        >
          {mentorsData.map((ele) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="card pb-5"
                style={{
                  width: "18rem",
                  height: "18rem",
                  backgroundColor: "yellow",
                  margin: "0 auto",
                }}
              >
                <img
                  style={{ width: "100%", height: "40%", objectFit: "cover" }}
                  className="rounded"
                  src={ele.img}
                  alt="Teacher Details"
                />
                <div className="card-body">
                  <p className="h4">{ele.name}</p>
                  <p className="h5 card-text text-primary">{ele.desing} </p>
                  <p className="h5 card-text text-danger">
                    expert in <span className="text-secondry">{ele.sub}</span>{" "}
                  </p>
                  <p className="h5 card-text text-primary">
                    {ele.description}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Mentors;
