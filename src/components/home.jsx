import React from 'react';
import "../css/style.css";
import Article  from './article';
import About from './about';

export default function Home()
{
    return(
    <div className="row">
        <Article/>
        <About/>

    </div>

    );

}
