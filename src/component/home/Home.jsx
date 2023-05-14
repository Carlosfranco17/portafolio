import React from "react";

const Home = () => {
  return (
    <section className="home ">

{/* padre */}
      <div className="Presentation">


{/* hijo 1 */}
      <div className=" img ">

<img className="photo" src="/images/1681398897987.jpg" alt="" />

</div>

{/* hijo 2 */}


        <div className="profile">
          <h1 className="name">Carlos Franco Castaño</h1>
          <h2 className="work">Systems Engineer</h2>
          <h2 className="work">Front-End developer</h2>
         

          <div className="information">
            <div className="redes">
              <span className="text-gray-500">
                <i class="bx bxl-github"></i>
              </span>
              <span className="text-blue-500">
                <i class="bx bxl-linkedin-square"></i>
              </span>
            </div>

            <div className="cv">
             
              <button className="download">Download cv</button>
            </div>
          </div>
        </div>

       
        
      </div>
    </section>
  );
};

export default Home;
