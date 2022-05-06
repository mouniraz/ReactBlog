import React from 'react';
import "../css/style.css";
import reactimg from "../assets/react.png"

export default function Article()
{const styletitle={height:"100px"};
return(
    <div class="leftcolumn">
        <div class="card">
            <h2>React</h2>
            <h5 className='subtitle'>Une bibliothèque JavaScript pour créer des interfaces utilisateurs
, Mai 5, 2022</h5>
        <div class="fakeimg" style={styletitle} >
            <img src={reactimg} alt="react logo" className="imgreact"/>
        </div>
            <p className='txtarticle'>React JS est une technologie très utilisée pour le développement d'applications web ou de sites internet. De plus en plus de grands groupes tels que Netflix, Yahoo, Airbnb ou encore Sony l'utilisent pour leur application web. </p>
            <p className='txtarticle'>React JS est une librairie Javascript conçue par Facebook, permettant de simplifier la création d’interface utilisateur. Inventée en 2013, React JS est une technologie open source très appréciée des développeurs, car elle facilite le développement de web applications. Elle permet la création de plateforme performante grâce à son principe de composant. En effet, React JS divise la page en plusieurs composants interconnectés. Ces composants sont composés d’un état et chaque 
                changement de donnée ou de cet état génère une page HTML modulable.</p>
        </div>
    </div>
)

}