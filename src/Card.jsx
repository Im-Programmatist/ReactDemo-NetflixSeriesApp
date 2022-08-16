import React from "react";
import ReactDOM from "react-dom";
import "./cardsCss.css";
import Img from './ImageSrc';

function Card(props) {
    return (
        <>
            <div class="column">
                <div className="container">
                    <div className="card">
                        <Img
                            imgsrc={props.imgsrc}
                            imgalt={props.name}                            
                        />
                        <div className="card_info">
                            <span className="card_category">{props.title} </span>
                            <h3 className="card_title"> {props.name} </h3>
                            <a href={props.link} target="_">
                                <button> Watch Now </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;