import React from 'react'
import {Link} from 'react-router-dom'


function Image(props) {
    
    var id_ = (props.location.pathname).substring(1);
    //src={props.data[id_-1].url}
    if(props.data.length > 0) {
        console.log("alla")
        console.log(props.data)
        console.log(props.data.length)
        console.log("yllä")
        var url_ = props.data[id_-1].url;
        var title_ = props.data[id_-1].title;
    }

   
    return (
        <div>
           
            <h1>{title_}</h1>
            <img src={url_}></img>
            <br></br>
            <Link to="/">
            <button>takaisin</button>
            </Link>
        </div>
    )
}

export default Image
