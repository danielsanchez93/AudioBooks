import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/styles/Modal.css'

function Modal(props) {
    if (!props.isOpen) {
        return null;
    }
    function secondsToString(seconds) {
        var hour = Math.floor(seconds / 3600);
        hour = (hour < 10)? '0' + hour : hour;
        var minute = Math.floor((seconds / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        var second = seconds % 60;
        second = (second < 10)? '0' + second : second;
        return hour + ' horas ' + minute + ' minutos ' + second + ' segundos';
      }

  return ReactDOM.createPortal(
    <div onClick={props.onClose} className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>
        <h2 className="Modal__title">{props.aData.fields.title['es-MX']}</h2>
        {props.aData.fields.is_original['es-MX']&&(
            <p className="Modal__isOriginal">Beek Original</p>
        )}
        <img className="Modal__cover-img" src={props.aData.fields.cover['es-MX']} alt="Cover"/>
        {/* <p className="Modal__authors">Autores</p> */}
        <p className="Modal__duration">{secondsToString(props.aData.fields.duration['es-MX'])}</p>
        <div className="Modal__btn-container">
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;