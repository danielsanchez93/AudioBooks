import React from "react";
import NotFoundLogo from '../assets/images/error.svg'

function NotFound() {
  return (
    <div className="NotFound__container">
      <img src={NotFoundLogo} alt="No encontrado"/>
      <h1>404: Esta página aún lee en papel</h1>
    </div>
  );
}

export default NotFound;
