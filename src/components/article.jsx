import React from 'react';
import "../css/style.css";

export default function Article(props)
{const styletitle={height:"100px"};
return(
        <div className="card">
            <h2>{props.title}</h2>
            <h5 className='subtitle'>{props.subtitle}, {props.date}</h5>
            <div className="fakeimg" style={styletitle} >
            <img src={props.img} alt="react logo" className="imgreact"/>
            </div>
            <p className='txtarticle'>{props.description} </p>
            <p className='txtarticle'>{props.detail}</p>
        </div>
)

}