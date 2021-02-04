import React from "react";
import { Navbar, Side } from "../../components";
import "./Dashboard.css";
import { HiUsers } from "react-icons/hi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";

function Dashboard() {
  return (
    <>
      <section className="practice">
        <aside>
          <Side />
        </aside>
        <section>
          <Navbar />
          <main className="prac-main">
            <section className="container-fluid prac-main-container">
              <div className="prac-overview">
                <h3>Overview</h3>
                <div className="row container-fluid justify-content-around cat-overview">
                  <div className="col-3 row prac-overview-section ">
                    <div className="col-9">
                      STREAMS <br />
                      <h1>5K</h1>
                    </div>
                    <div className="col-3 overview-icon">
                      <BsEyeFill />
                    </div>
                  </div>
                  <div className="col-3 row prac-overview-section ">
                    <div className="col-9">
                      MOVIES <br />
                      <h1>10K</h1>
                    </div>
                    <div className="col-3 overview-icon">
                      <MdMovie />
                    </div>
                  </div>
                  <div className="col-3 row prac-overview-section ">
                    <div className="col-9">
                      USERS <br />
                      <h1>300</h1>
                    </div>
                    <div className="col-3 overview-icon">
                      <HiUsers />
                    </div>
                  </div>
                  <div class="col-3 row prac-overview-section ">
                    <div className="col-9">
                      DAILY VISITS <br />
                      <h1>3K</h1>
                    </div>
                    <div className="col-3 overview-icon">
                      <IoCheckmarkDoneSharp />
                    </div>
                  </div>
                </div>

                <section className="prac-top-categories-container">
                  <h3>Top Categories</h3>
                  <div className="row d-flex justify-content-around">
                    <div className="col-4 prac-action">
                      <h4>Action</h4>
                    </div>
                    <div className="col-7 tp">
                      <div className="row h-50">
                        <div className="col prac-comedy">
                          <h4>Comedy</h4>
                        </div>
                        <div className="col prac-horror">
                          <h4>Horror</h4>
                        </div>
                      </div>

                      <div className="row h-50">
                        <div className="col prac-romance">
                          <h4>Romance</h4>
                        </div>
                        <div className="col prac-adventure">
                          <h4>Adventure</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </main>
        </section>
      </section>
    </>
  );
}

export { Dashboard };
