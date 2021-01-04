import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Thumbnails from './components/Thumbnails';
import Image from './components/Image';

export default class App extends React.Component {

  state = {
    data: []
  } 

  //fetch data from api
  async componentDidMount() {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json()
    this.setState({data})
  }

  render() {
    const {data} =this.state
  return (
    <div className="App">
      <header className="App-header">
        IMAGE GALLERY
      </header>

      <Router>
        <Switch>
          {/*route to thumbnails as home page*/}
          <Route exact path='/' render={
            (props) => <Thumbnails {...props} data={data}/>} />
            {/*route to single image page*/}
          <Route path='/' render = { props => <Image {...props} data={data} />} />
        </Switch>
      </Router>
      
    </div>
  );
}}

