import React from 'react';
import "../css/style.css";
import Article  from './article';
import About from './about';
import MainArticle from './mainarticle';
export default function Home()
{
    return(
    <div className="row">
        <MainArticle/>
        <About name="Zouaghi Mounira" description="Ingénieur Informatique, 
        Enseignante Universitaire, 
        Formatrice en développement web et mobile: web natif, Android, Flutter, React"/>

    </div>

    );

}
