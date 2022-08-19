// story_url, url

export function getURL(obj){
  return obj.url === null ? obj.story_url : obj.url
}