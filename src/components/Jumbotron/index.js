import React from "react";

const style ={
    jumbotron:{
height:100,
backgroundColor:  "#f69d3c"
    }
}



function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid mb-3" style={style.jumbotron}>
            <div className="container">
                <h1 className="display-4" >{props.name}</h1>
                <p>{props.name}</p>
                <p className="lead">{props.message} </p>
            </div>
        </div>
    )
}
export default Jumbotron; 