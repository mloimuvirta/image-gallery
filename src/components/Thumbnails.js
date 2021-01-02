import React from 'react'
import {Link, Route} from 'react-router-dom'
import './thumbnails.css'
import Image from './Image'

function Thumbnails(thumbnails) {
  
    var part = thumbnails.data
    return (
        <div className="gallery">
         <ul>
            {part.map(image =>
                   <li key ={image.id} >
                       <Link to={`${thumbnails.match.url}${image.id}`}>
                       <img src={image.thumbnailUrl}></img>
                       </Link>
                       <Route path={`${thumbnails.match.url}${image.id}`} render = { props => <Image {...props} data={part} /> } />
                </li>)}
            </ul>
            
        </div>
    )
        

} export default Thumbnails
    
                       
