import {useState,useEffect} from 'react';
import '../STYLE-SHEET/imgComponent.css'


const apiImg = 'https://dog.ceo/api/breeds/image/random';


export function useNoticia(NumPage, hits){
  const apiKeyNews =`https://hn.algolia.com/api/v1/search_by_date?query=nbPages=${NumPage}&hitsPerPage=${hits}`;

  const [noticias, setNoticias] = useState([]);
  useEffect(()=>{
    fetch(apiKeyNews)
    .then(res => res.json())
    .then(response => {
      console.log(response.hits)
      setNoticias(response.hits)
    })
    .catch(err => console.log(err));
  }, [apiKeyNews])
  return noticias;
}

export function ImgComponent({title,cls}){
  const [img, setImg] = useState('');
  useEffect(()=>{
    fetch(apiImg)
    .then(res => res.json())
    .then(response => setImg(response.message));
  }, [])
  return (
    <>
      <img className={cls} src={img} alt={title} />
    </>
  )
}