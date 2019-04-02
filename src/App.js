import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nyhetslista from './components/Nyhetslista';
import data from './fuskdata';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {articles: [
      {
        urlToImage: "https://source.unsplash.com/random/200×125/?cat", 
    title:"Testnyhet 1",
    description:"Beskrivning av testnyheten",
  },
    {
      urlToImage: "https://source.unsplash.com/random/200×125/?cat", 
      title:"Testnyhet 2",
      description:"Beskrivning av testnyheten",
    }]};
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=se&category=technology&apiKey=d973b317a1ce4c38818882d05240e484").then( function(respons) {
      if (respons.status !== 200) {
        this.setState({
          articles: [
            {
              title: "Något gick fel",
              description: `Vi fick inte status ${respons.status}`
            }
          ]})
      }
      return respons.json()
    }).then( jsondata => {
      this.setState({ articles: jsondata.articles })
    }).catch(error => {
      this.setState({
        articles: [{
        urlToImage: "fejk.jpg",
        title: "ingen anslutning",
        description: "Du verkar inte vara ansluten till internet..."
        }]
      });
    })
  }


  render() {
    return (
      <Nyhetslista artikellista={this.state.articles} />
    );
  }
}

export default App;
