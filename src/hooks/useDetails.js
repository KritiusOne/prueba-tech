import {useLocation} from 'wouter'
import {useNoticia} from './useNoticia'
import {useState, useEffect} from 'react'
import {getId} from '../helpers/getId.js'

export function useDetails(){
  const [path, push] = useLocation();
  const noticias = [...useNoticia(1,15)];
  const [noticia, setNoticia] =useState({}) ;
  useEffect(()=>{
    const aux = path.substring(5);
    const ayu = parseInt(aux)
    const pendiente = noticias.find(noti => {
      return ayu === parseInt(getId(noti)) ? noti : null
    })
    setNoticia({...pendiente})
  }, [path, noticias])
  return noticia
}