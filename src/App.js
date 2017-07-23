import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Searchbar from './SearchBar';
import $ from 'jquery';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        }
        this.search = this.search.bind(this);
    }

    search(searchText){
        console.log(searchText);
    }

    componentWillMount(){


        // Load data from twitter-api.json file
        var twitterAuthData = require('/twitter-api.json');

        console.log(twitterAuthData);

        console.log(twitterAuthData.consumer_key);
        console.log(twitterAuthData.consumer_secret);

        let authHeader = btoa();

        fetch('https://api.twitter.com/oauth2/token', {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8.",
                "Authorization": authHeader
            }),
            body: "grant_type=client_credentials"
        }).then((response)=>{
            console.log('Response: ', response);
        }).catch((error)=>{
            console.log('Error: ', error);
        })

    }

    render() {
        return (
            <Jumbotron className="App">
                <h1>Welcome to Twitter Stats</h1>
                <p className="App-intro">
                    Search for a hashtag to view its stats.
                </p>
                <Searchbar search={this.search}/>
            </Jumbotron>
        );
    }
}

export default App;
