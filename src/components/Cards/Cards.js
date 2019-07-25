import React from "react";
import './style.css'
// import { throws } from "assert";



    const style ={
        dream:{
        height:225,
        width:225
        }
    }
    


function CardImages(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img id="dream" style={style.dream} alt={props.alt} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Id:</strong>{props.id}
                    </li>
                    <li>
                        <strong>Name:</strong>{props.name}
                    </li>
                    <li>
                        <strong>location:</strong>{props.location}
                    </li>
                </ul>
            </div>
            <span className="remove"  onClick={()=> props.removeVacation(props.id)}>𝘅</span>
        </div>
    )
}

export default CardImages;