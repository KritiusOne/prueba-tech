import { useDetails } from '../../hooks/useDetails.js'
import { ImgComponent } from "../ImgComponent/ImgComponent";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { getURL } from '../../helpers/getURL.js';
import { getTitle } from "../../helpers/getTitle";
import React, {useContext} from 'react';
import { dataContext } from '../../context/DataContext.js';
import './detailsHeader.css'

export function DetailsHeader() {
  const data = useContext(dataContext)
  const noticia = data.selectedNew
  return (
    <div className="App__NoticiaView__Data__header">
      <h2 className="App__NoticiaView__Data__header--title header--item">{getTitle(noticia)}</h2>
      <ImgComponent cls='App__NoticiaView__Data__header--img header--item' />
      <span className="App__NoticiaView__Data__header--author header--item">Autor: {noticia.author}</span>
      <a href={getURL(noticia)} className="App__NoticiaView__Data__header--url header--item">Ir a la noticia <BsFillArrowRightSquareFill /></a>
    </div>
  )
}