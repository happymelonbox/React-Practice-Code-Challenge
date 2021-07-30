import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state ={
      sushi: []
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      this.setState({
      sushi: data,
      firstSushi: 0,
      lastSushi: 4
    })})
  }

  handleMoreSushi = () => {
    if(this.state.lastSushi < 100){
   this.setState({
     firstSushi: this.state.firstSushi + 4,
     lastSushi: this.state.lastSushi + 4
   })}
  }
  render() {
    return (
      <div className="app">
        <SushiContainer firstSushi={this.state.firstSushi} lastSushi={this.state.lastSushi} moreSushi={this.handleMoreSushi} sushi={this.state.sushi}/>
        <Table />
      </div>
    );
  }
}

export default App;