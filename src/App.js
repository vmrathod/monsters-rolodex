import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox}  from './components/search-box/search-box-component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText:''
    }
  }
  handleChange=(e)=>{
    this.setState({searchText: e.target.value})
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    console.log(this);
    const {monsters,searchText} = this.state;
    const filteredMoster = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchText.toLowerCase());
    })
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange } />
        <CardList monsters={filteredMoster}></CardList>
      </div>
    );
  }
}


export default App;
