import { ImgComponent } from "../ImgComponent/ImgComponent";
import { Link } from "wouter";
import './card.css'

export function Card({title, objectID}){
  return (
    <div className="App__noticiasPreview__card" key={objectID}>
      <ImgComponent cls='App__noticiasPreview__noticia--img lazy' title={title}/>
      <div className="App__noticiasPreview__card-container"> 
        <h4
        className="App__noticiasPreview__card--title"
        >
          {title}
        </h4> 
        <Link to={'/new/' + objectID} className="App__noticiasPreview__card--link">
          Ver mas!
        </Link>
      </div>
    </div>
  )
}