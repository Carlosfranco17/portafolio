import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='contact pb-8'>


<h1 className='titlecontact'>Contactame</h1>
<h3 className='textcontact'>construyamos algo juntos !! </h3>

      <div className='flex'>

        <div className=' formcontact  w-[50%]'>

          <form className='form'>


<div className='enterform'>
  <label htmlFor="">Nombre</label>
  <input className='input' type="text" />
</div>
<div className='enterform'>
  <label htmlFor="">Correo Electronico</label>
  <input className='input' type="text" />
</div>
<div className='enterform'>
  <label htmlFor="">Mensaje</label>
  <textarea className='input' name="" id="" cols="30" rows="3"></textarea>
</div>
<button className='buttonform'>Download</button>

          </form>
        </div>


        <div className='infocontact w-[50%]  '>

          <h1 className='titleicon'>También puedes encontrarme en</h1>

<div className='icons'>
<i class='icon bx bxl-github'></i>  <span className='iconname'>  github</span>
</div>

<div className='icons'>
<i class='icon text-blue-500 bx bxl-linkedin-square' ></i>  <span className='iconname'>  LinkedIn</span>
</div>

<div className='icons'>
<i class='text-red-700 icon bx bx-envelope' ></i>
 <span className='iconname'>  Email</span>
</div>
<button className='buttonicon'>download cv</button>

        </div>

      </div>







    </section>
  )
}

export default Contact