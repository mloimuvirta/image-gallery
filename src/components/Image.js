import React from 'react'
import { Link } from 'react-router-dom'
import './image.css'


function Image(props) {
    
    var id_ = (props.location.pathname).substring(1);
    

    //set details to show when data is not 0
    if(props.data.length > 0) {
       
        var url_ = props.data[id_-1].url;
        var title_ = props.data[id_-1].title;
    }

   
    return (
        <div>
           
            <h1>{title_}</h1>
            <img src={url_} alt={title_}></img>
            <br></br>
            <Link to="/">
            <button>BACK</button>
            </Link>
        </div>
    )
}

export default Image
