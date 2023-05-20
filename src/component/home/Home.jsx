import React from "react";

const Home = () => {
  return (
    <section id="home" className="home ">

{/* padre */}
      <div className="Presentation">


{/* hijo 1 */}
      <div className=" img ">

<img className="photo" src="https://media.licdn.com/dms/image/D4E03AQHpd5DrFHzs5Q/profile-displayphoto-shrink_800_800/0/1681398897987?e=1689811200&v=beta&t=A_zEuvyO8OT_GEcVs09u9Ez81tA8CZEXhIVXHZC8WzM" alt="" />

</div>

{/* hijo 2 */}


        <div className="profile">
          <h1 className="name">Carlos Franco Castaño</h1>
          <h2 className="work">Systems Engineer</h2>
          <h2 className="work">Front-End developer</h2>
         

          <div className="information">
            <div className="redes">
              <span className="text-gray-500">
                <a target="_blank" href="https://github.com/Carlosfranco17"><i className="bx bxl-github"></i></a>
              </span>
              <span className="text-blue-500">
                <a target="_blank" href="https://www.linkedin.com/in/carlos-franco-casta%C3%B1o-47456a264/"><i className="bx bxl-linkedin-square"></i></a>
              </span>
            </div>

            <div className="cv">
             
              <a className="download" target="_blank" href="/document/DevCarlosFranco.pdf">Download cv</a>
            </div>
          </div>
        </div>

       
        
      </div>
    </section>
  );
};

export default Home;
