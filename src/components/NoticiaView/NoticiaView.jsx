import React, {useEffect, useState} from "react";
import { useLocation, Link } from "wouter";
import { getNew } from "../../services/getNew";
import './noticiaView.css';
import {ImgComponent} from'../../hooks/useNoticia.js';
import {BsFillArrowRightSquareFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'


export function NoticiaView(){
  const [noticia, setNoticia] = useState({});
  const [path, push] =useLocation();

  useEffect(()=>{
    const news = getNew(path.substring(5));
    news.then(res => setNoticia(res))
    },[path])

  return (
    <div className="App__NoticiaView">
      <section className="App__NoticiaView__Data">
        <Link to="/" className="App__NoticiaView__Data__back">
          Regresar 
          <BsFillArrowLeftCircleFill/>
        </Link>
        <div className="App__NoticiaView__Data__header">
          <h2 className="App__NoticiaView__Data__header--title header--item">{noticia.title}</h2>
          <ImgComponent cls='App__NoticiaView__Data__header--img header--item'/>
          <span className="App__NoticiaView__Data__header--author header--item">Autor: {noticia.author}</span>
          <a href={noticia.url} className="App__NoticiaView__Data__header--url header--item">Ir a la noticia <BsFillArrowRightSquareFill/></a>
        </div>
        <div className="App__NoticiaView__data__article">
          <h5 className="App__NoticiaView__data__article--title article--item">
            {noticia.story_title}
          </h5>
          <p className="App__NoticiaView__data__article--p article--item">
            {noticia.story_text}
          </p>
        </div>
      </section>
    </div>
  )
}