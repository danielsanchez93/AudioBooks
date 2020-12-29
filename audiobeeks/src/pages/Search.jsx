import React from 'react';
import '../assets/styles/Search.css';

const main_title_text = '¿Qué quieres escuchar hoy?'
const main_input_placeholder = 'Buscar...'

export default function Search(){ 
   return( 
    <section className='main'>
            <h2 className="main__title">{main_title_text}</h2>
            <input type="text" className='input' placeholder={main_input_placeholder} />
        </section>
    )
}