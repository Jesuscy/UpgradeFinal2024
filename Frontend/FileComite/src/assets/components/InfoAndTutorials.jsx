import React from "react";

export const InfoAndTutorials = () => {
  return (
    <>
      <div className="container create-meeting-form">
        
      <div className="video-container">
            <div className="video-wrapper">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
         
          </div>
        {/* <div class="card text-center">
          <div class="card-header">Tutorial</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, adipisci unde accusamus voluptas eveniet quidem nam
              similique qui delectus animi, quia, officia suscipit velit. Autem
              illo rerum veniam consequatur placeat!.
            </p>
            <a href="#" class="btn-morado">
              Go somewhere
            </a>
          </div>
          <div class="card-footer text-body-secondary">2 days ago</div>
        </div> */}
      </div>
    </>
  );
};

export default InfoAndTutorials;
