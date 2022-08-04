import React, {useContext, useEffect} from "react";
import { dataContext } from "../../context/DataContext";
import { Card } from "../../components/card/Card";
import { getId } from "../../helpers/getId";
import './noticiasPreview.css';
import {getTitle} from '../../helpers/getTitle.js'
import { useNoticia } from "../../hooks/useNoticia";

export function NoticiasPreview(){
  const news = useNoticia()
  return (
    <div className="App__noticiasPreview">
      {
        news.map(noticia =><Card title={getTitle(noticia)} objectID={getId(noticia)} />)
      }
    </div>
  )
}