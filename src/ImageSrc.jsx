import React from "react";
import ReactDOM from "react-dom";

export default function ImageSrc(props)
{
    return (
        <img src={props.imgsrc} alt={props.imgalt} className="card_img" />
    );
}