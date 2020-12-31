import React from 'react';
import { useHistory } from "react-router-dom";
import '../assets/styles/Search.css';

const main_title_text = '¿Qué quieres escuchar hoy?'
const main_input_placeholder = 'Buscar...'

export default function Search(props){ 
    let searchID;
    const history = useHistory();
    
    function _handleEnterKey(e){
        if(e.key==='Enter'){
            routeChange();
        }
    }

    function changeSearchID(e){
        searchID=e.target.value;
    }

    const routeChange = (e) =>{ 
      let path = `/SearchResults/${searchID}`; 
      history.push(path);
    }

   return( 
        <section className='main'>
            <h2 className="main__title">{main_title_text}</h2>
            <input onKeyPress={_handleEnterKey} onChange={changeSearchID} type="text" className='input' placeholder={main_input_placeholder} />
        </section>
    )
}