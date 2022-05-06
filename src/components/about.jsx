import React from 'react';
import "../css/style.css";
import  profile from "../assets/zm.jpg";

export default function About(props)
{ const styletitle={height:"100px"}
   return(
    <div className="rightcolumn">
    <div className="card">
      <h2>{props.name}</h2>
      <div className="fakeimg" style={styletitle} >
          <img src={profile} alt="zouaghi mounira" className="profile"/>
      </div>
        <p className='txtarticle'>{props.description} </p>
    </div>
    </div>
   );

}