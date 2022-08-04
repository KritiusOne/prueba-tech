import { useLocation } from 'wouter'
import { useEffect, useContext } from 'react'
import { dataContext } from '../context/DataContext'

export function useDetails() {
  const [path, push] = useLocation();
  const notiContext = useContext(dataContext);
  useEffect(() => {
    notiContext.getSelectedNew(path.substring(5))
  }, [path])
  return notiContext.selectedNew
}