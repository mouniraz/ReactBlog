import React from 'react';
import "../css/style.css";
import reactimg from "../assets/react.png"
import flutterimg from "../assets/flutter.png"
import Article from './article';
export default function MainArticle()
{
return(
    <div className="leftcolumn">
        <Article title="React" 
        img={reactimg}
        subtitle="Une bibliothèque JavaScript pour créer des interfaces utilisateurs" 
        description="React JS est une technologie très utilisée pour le développement d'applications web ou de sites internet. De plus en plus de grands groupes tels que Netflix, Yahoo, Airbnb ou encore Sony l'utilisent pour leur application web." 
        detail="React JS est une librairie Javascript conçue par Facebook, 
        permettant de simplifier la création d’interface utilisateur. Inventée en 2013, 
        React JS est une technologie open source très appréciée des développeurs, car elle facilite le développement de web applications. 
        Elle permet la création de plateforme performante grâce à son principe de composant. En effet, React JS divise la page en plusieurs composants interconnectés. Ces composants sont composés d’un état et chaque 
        changement de donnée ou de cet état génère une page HTML modulable." 
        date="Mai 5, 2022"/>
         <Article title="Flutter" 
        img={flutterimg}
        subtitle="framework de développement d’applications multiplateforme" 
        description="Flutter est un framework de développement d’applications multiplateforme, conçu par Google, dont la première version a été publiée sous forme de projet open source à la fin de l’année 2018. Flutter met à disposition une grande variété de bibliothèques d’éléments d’IU standard pour Android et iOS, il est aussi 
        adapté au développement d’applications web de bureau classiques." 
        detail="Flutter est principalement utilisé pour le développement d'applications Android et iOS, sans nécessiter la création d’une base de code propre à chacun de ces deux systèmes si différents l’un de l’autre. De cette manière, les applications de smartphone se comportent, sur les différents appareils, comme de réelles applications natives. 
        Elles sont compilées pour chaque plateforme avant leur publication, de sorte qu’elles n’ont besoin ni d’un module runtime ni d’un navigateur. Sur cette base de code commune, il est également possible de créer des applications web pour navigateur, ainsi que des programmes natifs pour Windows, Linux et macOS." 
        date="Mai 6, 2022"/>
    </div>
)

}