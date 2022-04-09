import React from "react";
import '../css/boton_clear.css'

const Boton_clear = (props) => (
    <div className="boton-clear">
        {props.children}
    </div>
);

export default Boton_clear;