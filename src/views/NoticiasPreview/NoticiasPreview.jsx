import React from "react";
import { Card } from "../../components/card/Card";
import { getId } from "../../helpers/getId";
import './noticiasPreview.css';
import {getTitle} from '../../helpers/getTitle.js'
import { useNoticia } from "../../hooks/useNoticia";

export function NoticiasPreview(){
  const news = useNoticia()
  return (
    <div className="App_noticiasPreview">
      <h1 className="App_noticiasPreview__title">NOTIAPP</h1>
      <div className="App__noticiasPreview__cards">
        {
          news.map(noticia =><Card title={getTitle(noticia)} objectID={getId(noticia)} key={getId(noticia)}/>)
        }
      </div>
    </div>
    
  )
}