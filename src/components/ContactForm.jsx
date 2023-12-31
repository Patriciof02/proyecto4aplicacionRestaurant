import React, { useState } from 'react'
import '../assets/styles/ContactForm.css'
// import { db } from '../firebase/firebase'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
  //  await db.collection('formulario').add(info)


    console.log('Formulario enviado')
    // También puedes reiniciar los campos del formulario si lo deseas
    setName('')
    setEmail('')
    setMessage('')
  };

  return (
    
    <form class='formulario' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          type='text'
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
