import { useContext, useEffect } from 'react';
import { dataContext } from '../context/DataContext';

export function useNoticia() {
  const notiContext = useContext(dataContext)
  useEffect(() => {
    notiContext.getNews()
  }, [])
  console.log(notiContext.news)

  return notiContext.news
}