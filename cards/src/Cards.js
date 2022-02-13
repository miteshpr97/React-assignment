import React from "react";

function Cards(props) {
    return (
        <div className="cardcontainer">
            <div className="imgcontainer">
                <img src={props.imgurl} alt='img' />
            </div>
            <div className="card-title">
                <h3> {props.title}</h3>
            </div>

            <div className="card-body">
                <p>  {props.body}   </p>
            </div>

            <div className="btn">
                <button>
                    <a href="#">
                     WATCH NOW
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Cards;
