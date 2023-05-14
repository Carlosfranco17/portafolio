import React, { useEffect, useState } from "react";

const About = () => {
  const [old, setOld] = useState();

  useEffect(() => {
    const edadactual = () => {
      let todayYear = new Date();
      let year = todayYear.getFullYear();

      let todayMonth = new Date();
      let mes = todayMonth.getMonth() + 1;

      let todayDay = new Date();
      let day = todayDay.getDate();

      let edad = year - 1997;

      if (mes < 4) {
        edad--;
      } else if (mes === 4) {
        if (day < 17) {
          edad--;
        }
      }

      return edad;
    };

    setOld(edadactual);
  }, []);

  return (
    <section id="about" className="about">
      <div className="aboutimg">
        <img className="img2" src="/images/aboutMe.png" alt="" />
      </div>

      <div className="abouttext">
        <div className="aboutparagrapho">
          {/* {old && ( */}
          <p>
            ¡Hola! Mi nombre es Carlos Franco Castaño, tengo {old} años soy una
            persona proactiva y apasionada por el mundo de la Programacion y el
            desarrollo web. Desde muy joven, siempre he tenido interés en todo
            lo relacionado con la informática, y gracias a mi diciplina y
            constancia, he adquirido conocimientos en diferentes áreas que me
            han llevado a especializarme como desarrollador web front-End.
          </p>
          {/* )} */}
        </div>
      </div>
    </section>
  );
};

export default About;
