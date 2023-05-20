import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_enhxafh",
        "template_ruz52eh",
        e.target,
        "S2QdOrVUlczi8iL8v"
      )
      .then((res) => console.log(res.text))
      .catch((err) => console.log(err));
  };

  return (
    <section id="contact" className="contact pb-8">
      <h1 className="titlecontact">Contactame</h1>
      <h3 className="textcontact">construyamos algo juntos !! </h3>

      <div className="flex">
        <div className=" formcontact  w-[50%]">

          <form onSubmit={handleSubmit} className="form">

            <div className="enterform">
              <label htmlFor="">Nombre</label>
              <input className="input" type="text" name="from_name" required/>
            </div>

            <div className="enterform">
              <label htmlFor="">Correo Electronico</label>
              <input className="input" type="email" name="email" required/>
            </div>

            <div className="enterform">
              <label htmlFor="">Mensaje</label>
              <textarea
                className="input"
                name="message"
                id=""
                cols="30"
                rows="3"
               required></textarea>
            </div>

            <button className="buttonform">Enviar</button>

          </form>
        </div>

        <div className="infocontact w-[50%]  ">
          <h1 className="titleicon">También puedes encontrarme en</h1>

          <div className="icons">
            <a href="https://github.com/Carlosfranco17" target="_blank">
              <i class="icon bx bxl-github"></i>
            </a>{" "}
            <span className="iconname"> github</span>
          </div>

          <div className="icons">
            <a
              href="https://www.linkedin.com/in/carlos-franco-castaño-47456a264"
              target="_blank"
            >
              <i class="icon text-blue-500 bx bxl-linkedin-square"></i>
            </a>{" "}
            <span className="iconname"> LinkedIn</span>
          </div>

          <div className="icons">
            <a
              href="mailto:carlosfranco@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="text-red-700 icon bx bx-envelope"></i>
            </a>
            <span className="iconname"> Email</span>
          </div>

          <a className="buttonicon" target="_blank" href="/document/DevCarlosFranco.pdf">Download cv</a>
       
        </div>
      </div>
    </section>
  );
};

export default Contact;
