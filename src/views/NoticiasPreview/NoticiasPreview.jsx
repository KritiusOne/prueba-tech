import React from "react";
import './noticiasPreview.css';
import { useNoticia } from "../../hooks/useNoticia";
import { Card } from "../../components/card/Card";
import { getId } from "../../helpers/getId";

export function NoticiasPreview(){
  const hits = 15;
  let numPage = 1;
  const noticias =[ ...useNoticia(numPage, hits)]

  return (
    <div className="App__noticiasPreview">
      {
        noticias.map(noticia =>
        <Card objectID={getId(noticia)} title={noticia.title === null ? noticia.story_title : noticia.title}/>
        )
      }
    </div>
  )
}