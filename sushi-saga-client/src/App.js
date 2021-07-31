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
      moneyLeft: 50
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
    if(this.state.moneyLeft>sushiPrice){
    this.setState({
      moneyLeft: this.state.moneyLeft - sushiPrice,
      eaten: [...this.state.eaten, event.target]
    })
    event.target.style.display ='none'
  }}

  addToWallet = (value) => {
    this.setState({
      moneyLeft: this.state.moneyLeft + value
    })
  }
  render() {
    return (
      <div className="app">
        <SushiContainer isEaten={this.state.isEaten} firstSushi={this.state.firstSushi} lastSushi={this.state.lastSushi} moreSushi={this.handleMoreSushi} sushi={this.state.sushi} eatSushi={this.eatSushi}/>
        <Table eatenSushi={this.state.eaten} moneyLeft={this.state.moneyLeft} addToWallet={this.addToWallet}/>
      </div>
    );
  }
}

export default App;