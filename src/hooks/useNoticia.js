import {useState,useEffect} from 'react';

export function useNoticia(NumPage, hits){
  const apiKeyNews =`https://hn.algolia.com/api/v1/search_by_date?query=nbPages=${NumPage}&hitsPerPage=${hits}`;
  const [noticias, setNoticias] = useState([]);
  useEffect(()=>{
    fetch(apiKeyNews)
    .then(res => res.json())
    .then(response => {
      setNoticias(response.hits)
    })
    .catch(err => console.log(err));
  }, [apiKeyNews])
  return noticias;
}