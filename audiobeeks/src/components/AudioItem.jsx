import React from 'react'
import '../assets/styles/AudioItem.css'

export default function AudioItem({audioData}){
    
    const listItems=audioData.map(item=>
        <li key={item.sys.id} className="AudioCard">
            {/* <p>Título: {item.fields.title['es-MX']}</p> */}
            <img className="AudioCard-img" src={item.fields.cover['es-MX']} alt="Cover"/>
        </li>
        );
    return(
       <ul className="Audiobook-list">
           {listItems}
       </ul>
    );
}

// export default AudioItem;