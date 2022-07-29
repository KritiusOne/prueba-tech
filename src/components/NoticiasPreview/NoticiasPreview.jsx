import React, { useState, useEffect } from "react";
import {ImgComponent} from '../../hooks/useNoticia.js'
import './noticiasPreview.css';
import { Link } from "wouter";
import { useNoticia } from "../../hooks/useNoticia.js";

export function NoticiasPreview(){
  const hits = 15;
  let numPage = 1;
  const noticias =[ ...useNoticia(numPage, hits)]
  return (
    <div className="App__noticiasPreview">
      {
        noticias.map(noticia =>{
          return (
            <div key={noticias.objectID} className="App__noticiasPreview__noticia">
              <ImgComponent cls='App__noticiasPreview__noticia--img lazy' title={noticia.title} key={noticia.objectID + 1}/>
              <div className="App__noticiasPreview__noticia-container"> 
                <h4 className="App__noticiasPreview__noticia--title">
                  {noticia.title != null ? noticia.title : noticia._highlightResult.story_title.value}
                </h4> 
                <Link to={'/new/' + noticia.objectID} className="App__noticiasPreview__noticia--link">
                  Ver mas!
                </Link>
                
              </div>
            </div>
          )})
      }
    </div>
  )
}