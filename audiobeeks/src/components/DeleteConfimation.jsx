import React from 'react';
import ReactDOM from 'react-dom'

import '../assets/styles/DeleteConfirmation.css'

function DeleteConfirmation (props){
    if (!props.isDeleteModalOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="Delete__modal-container">
            <div className="Delete__container">
                <h1>¿Quieres eliminar el audiolibro?</h1> 
                <div className="Delete__buttons">
                    <button onClick={props.isDeleteClose} className="btn btn-info">Cancelar</button>
                    <button onClick={props.deleteAudio} className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
    ,document.getElementById('deleteConfirmation')
    )
    

};

export default DeleteConfirmation;