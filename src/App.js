import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaltStyle = {
  color: "#424242"
};

class Aggregate extends Component{
  render(){
    return(
      <div style={{width:"40%", display:'inline-block'}}>
        <h2 style={{...defaltStyle}}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    return(
      <div style={{...defaltStyle}}>
        <img/>
        <input type="text"/>
        Filter
      </div>
    )
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{...defaltStyle,display:"inline-block", width:"25%"}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul><li>Song 01</li><li>Song 02</li><li>Song 03</li></ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 style={{...defaltStyle, "font-size":"54px"}}>Title</h1>
          <Aggregate/>
          <Aggregate/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
      </div>
    );
  }
}

export default App;
