import React from "react";

export default function Alert(props) {

    return props.alertType && (<div className={`alert alert-${props.alertType}`} role={props.alertType}>
        <strong>{props.alertType.charAt(0).toUpperCase() + props.alertType.slice(1)}:</strong> {props.alertMssg}
    </div>);
}