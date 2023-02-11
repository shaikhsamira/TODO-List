import React from "react";
import "../styles/HomePage.css"

const Notification = ({msg,visibility}) => {
    return (

        <div className="alert alert-success mx-auto" role="alert" id="AlertStyles" style={{"visibility":visibility}}>
            {msg}
        </div>
    )

}

export default Notification;