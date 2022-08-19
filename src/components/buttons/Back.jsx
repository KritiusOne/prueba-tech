import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import { Link } from 'wouter'
import './back.css'

export function Back(){
  return(
    <Link to='/' className='App-button-back'>
      <BsFillArrowLeftSquareFill className='App-button-back-Link'/>
    </Link>
  )
}