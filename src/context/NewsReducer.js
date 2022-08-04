import {  GET_NOTICIAS, SELECT_NOTICIA } from "./types";

export function NewsReducer(state, action){
  const { payload, type } = action

  switch(type){
    case GET_NOTICIAS:
      return {
        ...state,
        news : [...payload]
      }
    case SELECT_NOTICIA:
      return {
        ...state,
        selectedNew: payload
      }  
    default:
      return state
  }
}