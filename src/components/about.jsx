import React from 'react';
import "../css/style.css";
import  profile from "../assets/zm.jpg";

export default function About()
{ const styletitle={height:"100px"}
   return(
    <div className="rightcolumn">
    <div className="card">
      <h2>Zouaghi Mounira</h2>
      <div className="fakeimg" style={styletitle} >
          <img src={profile} alt="zouaghi mounira" className="profile"/>
      </div>
        <p>Ingénieur Informatique, Enseignante Universitaire, Formatrice en développement web et mobile: web natif, Android, Flutter, React </p>
    </div>
    </div>
   );

}