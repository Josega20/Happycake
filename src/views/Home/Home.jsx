import React from 'react'
import cake from "../../img/cake.png"
import "./Home.css"
const Home = () => {
  return (
    <div>
<h1> Bienvenido a <span className='fw-bold'> HAPPYCAKE </span></h1>
<h4>el lugar de los pasteles felices </h4>
<img  src={cake} width= "20%" alt="" />

    </div>
  )
}

export default Home