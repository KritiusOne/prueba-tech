export function getId (noticia){
  return noticia.story_id === null ? noticia.objectID : noticia.story_id;
}