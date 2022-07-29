import React from "react";
import {useNoticia, ImgComponent} from '../../hooks/useNoticia.js'
import './noticiasPreview.css';


export function NoticiasPreview(){
  const noticias = [...useNoticia()];
  return (
    <div className="App__noticiasPreview">
      {
        noticias.map(noticia =>{
          return (
            <div key={noticias.objectID} className="App__noticiasPreview__noticia">
              <ImgComponent title={noticia.title}/>
              <div className="App__noticiasPreview__noticia-container"> 
                <h4 className="App__noticiasPreview__noticia--title">
                  {noticia.title}
                </h4> 
                <a href={noticia.url} className="App__noticiasPreview__noticia--link">
                  Ver mas!
                </a>
              </div>
            </div>
          )})
      }
    </div>
  )
}