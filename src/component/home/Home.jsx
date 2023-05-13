import React from "react";

const Home = () => {
  return (
    <section className="home border-[2px] border-red-500">

{/* padre */}
      <div className="Presentation">


{/* hijo 1 */}
      <div className=" img ">

<img className="photo" src="/public/images/1681398897987.jpg" alt="" />

</div>

{/* hijo 2 */}


        <div className="profile">
          <h1 className="name">Carlos Franco Castaño</h1>
          <h2 className="work">FrontEnd developer</h2>
         

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
             
              <button className="download">Descargar cv</button>
            </div>
          </div>
        </div>

       
        
      </div>
    </section>
  );
};

export default Home;
