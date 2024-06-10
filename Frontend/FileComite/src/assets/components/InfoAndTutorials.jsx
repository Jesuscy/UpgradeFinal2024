import React from "react";
import "../../styles/InfoAndTutorialsStyle.css";

export const InfoAndTutorials = () => {
  return (
    <>
    <div className="row tutorial-row">
        <div className="files-header">TUTORIALS</div>
      <div className="tutorial-container">
        <div className="">
          <div className="card-body-tutorial">
            <h5 className="card-title-tutorial">Special title treatment</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, adipisci unde accusamus voluptas eveniet quidem nam
              similique qui delectus animi, quia, officia suscipit velit. Autem
              illo rerum veniam consequatur placeat!.
            </p>
            {/* <a href="#" class="bnt-FAQ">
            Go somewhere
            </a> */}
          </div>
        </div>
      </div>
      <div className="bnt-FAQ">
        <div className="">FAQ</div>
      </div>
            </div>
    </>
  );
};

export default InfoAndTutorials;

{
  /* <>
      <div className="container create-meeting-form">
        <div class="card text-center">
          <div class="card-header">Tutorial</div>
          
          
        </div>
      </div>
    </> */
}
