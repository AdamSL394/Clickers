import React from "react";
import './style.css'

    const style ={
        dream:{
            height: 325,
            width: 325,
            border: '1px solid green',
        }
    }
    
function CardImages(props) {
    return (

        
        <div className="card">
            <div className="content">
            <img id="dream" style={style.dream} alt={props.alt} src={props.image} />
            </div>
            {/* <span className="remove"  onClick={()=> 
                props.shuffleVacation(props.id) 
                } >𝘅</span> */}
                <span className="remove"  
                onClick={() => props.wasPicked(props.id,props.picked) 
                } >𝘅</span>
        </div>
    )




}



export default CardImages;