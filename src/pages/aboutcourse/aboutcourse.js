// Timeline.js

import React from "react";
import styles from "./aboutcourse.module.css"; // Import the module CSS file

const About = () => {
  return (
    <>
      <div class="mt-4 p-5 bg-primary text-white text-center rounded">
        <h1>Our Features</h1>

        <p>
          We provide <b style={{ color: "red" }}> classes for all </b>type
          student<b style={{ color: "red" }}>join us</b> for your better career.
        </p>
      </div>
      <div className={styles.wrapper}>
        {" "}
        {/* Use styles from the module CSS */}
        <div className={styles["center-line"]}>
          <a href="#" className={styles["scroll-icon"]}>
            <i className="fas fa-caret-up"></i>
          </a>
        </div>
        <div className={`${styles.row} ${styles["row-1"]}`}>
          <section>
            <i className="icon fas fa-home"></i>
            <div className={styles.details}>
              <span className={styles.title}>Live Classes</span>
              <span>With Expert Teachers</span>
            </div>
            <p>
            WE provide live class where we can ask any question in middle of class . we also provide recorded lectures.
            </p>
            <div className={styles.bottom}>
              <a href="#">Register Now</a>

              {/* <i>Hello</i> */}
            </div>
          </section>
        </div>
        <div className={`${styles.row} ${styles["row-2"]}`}>
          <section>
            <i className="icon fas fa-star"></i>
            <div className={styles.details}>
              <span className={styles.title}>One to One Doubt sessions</span>
              <span></span>
            </div>
            <p>
              We provide one to one doubt sessions. we are always ready to help
              you
            </p>
            <div className={styles.bottom}>
              <a href="#contactus">Register Now</a>
            </div>
          </section>
        </div>
        <div className={`${styles.row} ${styles["row-1"]}`}>
          <section>
            <i className="icon fas fa-rocket"></i>
            <div className={styles.details}>
              <span className={styles.title}>Regular Test</span>
              <span></span>
            </div>
            <p>
              We provide regular and topic wise test so that we can analyse your
              progress.
            </p>
            <div className={styles.bottom}>
              <a href="#contactus">Register Now</a>
              {/* <i>- Someone famous</i> */}
            </div>
          </section>
        </div>
        <div className={`${styles.row} ${styles["row-2"]}`}>
          <section>
            <i className="icon fas fa-globe"></i>
            <div className={styles.details}>
              <span className={styles.title}>
              Mode of test
              </span>
              <span> </span>
            </div>
            <p>Online</p>
            <div className={styles.bottom}>
              <a href="#contactus">Register Now</a>
              {/* <i>- Someone famous</i> */}
            </div>
          </section>
        </div>
        <div className={`${styles.row} ${styles["row-1"]}`}>
          <section>
            <i className="icon fas fa-paper-plane"></i>
            <div className={styles.details}>
              <span className={styles.title}>
                Extra classes For Weak Students
              </span>
              <span></span>
            </div>
            <p>
              We provide Extra classes for those students who are week in any
              topic of subject wise.
            </p>
            <div className={styles.bottom}>
              <a href="#contactus">Register Now</a>
              {/* <i>- Someone famous</i> */}
            </div>
          </section>
        </div>
        {/* <div className={`${styles.row} ${styles["row-2"]}`}>
        <section>
          <i className="icon fas fa-map-marker-alt"></i>
          <div className={styles.details}>
            <span className={styles.title}>Title of Section 6</span>
            <span>6th Jan 2021</span>
          </div>
          <p>
            Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui
            veroes praesentium maiores, sint eos vero sapiente voluptas debitis
            dicta dolore.
          </p>
          <div className={styles.bottom}>
            <a href="#">Read more</a>
            <i>- Someone famous</i>
          </div>
        </section>
      </div> */}
      </div>
    </>
  );
};

export default About;
