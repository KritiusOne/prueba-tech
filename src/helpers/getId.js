export function getId (noticia){
  return noticia.created_at_i === null ? noticia.objectID : noticia.created_at_i
}