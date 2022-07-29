import {useState,useEffect} from 'react';
import '../STYLE-SHEET/imgComponent.css'

const apiKeyNews = 'https://hn.algolia.com/api/v1/search?query=dev';
const apiImg = 'https://dog.ceo/api/breeds/image/random'

export function useNoticia(){
  const [noticias, setNoticias] = useState([]);
  useEffect(()=>{
    fetch(apiKeyNews)
    .then(res => res.json())
    .then(response => {
      console.log(response.hits)
      setNoticias(response.hits)
    })
    .catch(err => console.log(err));
  }, [])
  return noticias;
}
export function ImgComponent({title}){
  const [img, setImg] = useState('');
  useEffect(()=>{
    fetch(apiImg)
    .then(res => res.json())
    .then(response => setImg(response.message));
  }, [])
  return (
    <>
      <img className='App__noticiasPreview__noticia--img' src={img} alt={title} />
    </>
    
  )
}