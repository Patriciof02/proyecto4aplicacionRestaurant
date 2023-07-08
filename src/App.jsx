
import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import Navbar from './components/NavBar'
import MenuPopup from './pages/MenuPopup'
import Footer from './components/Footer'
import Reserva from './components/Reserva'


function App() {

  return (
  
   
   <div >
      <div> 
        <Navbar/>
      </div>
      <section class='cuerpo'>
        <MenuPopup />
      <div class='primeralinea'>
       <div class='cuadro1'>
     
       <h1>Bienvenido, a la Buena vida restorant</h1>
       </div>
     
       <div class='cuadro2'>
       <h1> Nuestra Esencia  </h1>
        <p> Un encantador restaurante italiano con una auténtica cocina que deleita los sentidos. Desde la pasta casera hasta las deliciosas pizzas al horno de leña, cada bocado es una explosión de sabores. El ambiente acogedor y el servicio amable hacen que cada visita sea inolvidable.</p>
       </div>
     
     
      </div>
      <div class='segunda linea'>
      <div>
      <h1>Formulario de Contacto</h1>
        <ContactForm />
      </div>  
      <h1>Reserva de Restaurante</h1>
      <div class='reserva'>
        
        <Reserva/>
      </div>
      </div>
     </section>

     <Footer />
      
   </div>
  )
}

export default App
