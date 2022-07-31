import {useState, useEffect} from 'react'
import '../../STYLE-SHEET/imgComponent.css'

const apiImg = 'https://dog.ceo/api/breeds/image/random';

export function ImgComponent({title,cls}){
    const [img, setImg] = useState('');
    useEffect(()=>{
      fetch(apiImg)
      .then(res => res.json())
      .then(response => setImg(response.message));
    }, [])
    return (
      <>
        <img className={cls} src={img} alt={title} />
      </>
    )
  }