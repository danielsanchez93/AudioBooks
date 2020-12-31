import React from 'react';
import Book from '../assets/images/storytelling.svg'
import '../assets/styles/AudioNotFound.css';

const main_title_text = 'Vaya, no hemos encontrado ese audiolibro'
const main_input_placeholder = 'Intenta buscar de nuevo'

export default function AudioNotFound(props){ 
   return( 
       <div className="NotFound__container">
           <img src={Book} alt="Libro abierto"/>
           <h1>{main_title_text}</h1>
           <h3>{main_input_placeholder}</h3>
       </div>
    );
}