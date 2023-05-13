import React from 'react'


const Nav = () => {
  return (
    <nav className='' >

<input type="checkbox" id='check'/>
<label htmlFor="check" className='checkbtn'>
    <i className='bx bx-menu'></i></label>


<a href="" className='enlace'><h1 className='logo'><span>C.</span><span>Franco</span></h1></a>

<ul>
    <li><a href="">Inicio</a></li>
    <li><a href="">Acerca de mi</a></li>
    <li><a href="">Proyectos</a></li>
    <li><a href="">Tecnologia</a></li>
    <li><a href="">Contactame</a></li>
</ul>


    </nav>
  )
}

export default Nav