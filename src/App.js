import React from 'react';
import { kittens } from './kittens'
import CardList from './CardList';
import Scroll from './Scroll'
import SearchBox from './SearchBox'
import './App.css';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            kittens: kittens,
            searchField: ''
        }
    }
    onSearchEvent = (event) => {
        this.setState({ searchField: event.target.value })
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ kittens: users})});
      }
    render() {
        const {kittens,searchField} = this.state;
        const filteredKittens = kittens.filter(
            kitty => {
                return kitty.name.toLowerCase().includes(
                    searchField.toLocaleLowerCase()
                )
            }
        )
        return (
            <div className='tc'>
                <h1 className='f1'>KittyFriends</h1>
                <SearchBox searchChange={this.onSearchEvent} />
                <Scroll>
                    <CardList robots={filteredKittens} />
                </Scroll>
            </div>
        );
    }
}

export default App;