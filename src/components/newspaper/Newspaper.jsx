export function Newspaper({noticia}){
  return(
    <div className="App__NoticiaView__data__article">
      <h5 className="App__NoticiaView__data__article--title article--item">
        {noticia.story_title}
      </h5>
      <p className="App__NoticiaView__data__article--p article--item">
        {noticia.story_text}
      </p>
    </div>
  )
}