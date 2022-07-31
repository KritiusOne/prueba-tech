import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import { Link } from 'wouter'
import './back.css'

export function Back(){
  return(
    <div  className='App-button-back'>
      <Link to='/' className='App-button-back-Link'>
      <BsFillArrowLeftSquareFill />
    </Link>
    </div>
  )
}