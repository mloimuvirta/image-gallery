import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Thumbnails from './components/Thumbnails';
import Image from './components/Image';

export default class App extends React.Component {

  state = {
    data: []
  } 

  async componentDidMount() {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json()

    this.setState({data})
  }

  render() {
    const {data} =this.state
  return (
    <div className="App">
      <header className="App-header">
        Kuvat
      </header>

      <Router>
        <Switch>
          <Route exact path='/' render={
            (props) => <Thumbnails {...props} data={data}/>} />
          <Route path='/' render = { props => <Image {...props} data={data} />} />
        </Switch>
      </Router>
      
    </div>
  );
}}

