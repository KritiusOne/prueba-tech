import React, {useReducer} from "react";
import { NewsReducer } from "./NewsReducer";
import { dataContext } from "./DataContext";
import { getId } from "../helpers/getId";


const apiKeyNews =`https://hn.algolia.com/api/v1/search_by_date?query=nbPages=1&hitsPerPage=15`;


export function DataProvider ({children}){
  const inicialState = {
    news: [],
    selectedNew: {}
  }
  const [state, dispatch] = useReducer(NewsReducer, inicialState)

  const getNews = async ()=>{
    const res = await fetch(apiKeyNews)
    .then(res => res.json()).then(response => {
       return response.hits
    })
    .catch(err => console.log(err))
    dispatch({
      type: 'GET_NOTICIAS',
      payload: res
    })
  }
  const getSelectedNew = async (id)=>{
    const res = await fetch(apiKeyNews)
    .then(res => res.json())
    .then(response => {
      return response.hits
    })
    .catch(err => console.log(err));

    const [fil] = res.filter(noti => {
      return parseInt(getId(noti)) === parseInt(id) ? noti : null
    })
    dispatch({
      type: 'SELECT_NOTICIA',
      payload: fil
    })
  }
  return (
    <dataContext.Provider value={{
      news: [...state.news],
      selectedNew: {...state.selectedNew},
      getNews,
      getSelectedNew
    }}>
      {children}
    </dataContext.Provider>
  )
}