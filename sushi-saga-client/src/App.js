import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state ={
      sushi: [],
      eaten: [],
      moneyLeft: 600
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({
      sushi: data,
      firstSushi: 0,
      lastSushi: 4,
    })})
  }

  handleMoreSushi = () => {
    if(this.state.lastSushi < 100){
   this.setState({
     firstSushi: this.state.firstSushi + 4,
     lastSushi: this.state.lastSushi + 4
   })}
  }

  eatSushi = (event, sushiPrice) => {
    this.state.eaten.push(event.target)
    event.target.style.display ='none'
    this.setState({
      moneyLeft: this.state.moneyLeft - sushiPrice
    })
  }
  render() {
    return (
      <div className="app">
        <SushiContainer isEaten={this.state.isEaten} firstSushi={this.state.firstSushi} lastSushi={this.state.lastSushi} moreSushi={this.handleMoreSushi} sushi={this.state.sushi} eatSushi={this.eatSushi}/>
        <Table eatenSushi={this.state.eaten} moneyLeft={this.state.moneyLeft}/>
      </div>
    );
  }
}

export default App;