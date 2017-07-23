import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Searchbar from './SearchBar';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchText: ""
        }
    }

    render() {
        return (
            <Jumbotron className="App">
                <h1>Welcome to Twitter Stats</h1>
                <p className="App-intro">
                    Search for a hashtag to view its stats.
                </p>
                <Searchbar/>
            </Jumbotron>
        );
    }
}

export default App;
