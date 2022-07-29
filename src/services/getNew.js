
const NumPage = 1;
const apiKeyNews =`https://hn.algolia.com/api/v1/search_by_date?query=nbPages=${NumPage}&hitsPerPage=15`;

export function getNew(ID){
  return fetch(apiKeyNews)
  .then(res => res.json())
  .then(response =>{
    const data = response.hits;
    const noticia = data.find(element => element.objectID === ID)
    return noticia
  } );
}