import React from 'react';
import "./App.css"
import Cards from "./components/Cards/Cards";
import cardcontent from "./cardcontent.json"
import Jumbotron from "./components/Jumbotron"
import Navbar from "./components/Navbar"
// import Counter from "./components/Navbar/Counter"
import shuffle from "shuffle-array";


class App extends React.Component {


  state = {
    cardcontent,
    counter: 0,
    waspicked:[],
    message: "",
    highscore: 0
  }

  shuffleVacation = id => {
    const vacationLocation = shuffle(this.state.cardcontent);
    this.setState({ cardcontent: vacationLocation })
  }

  
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 })
    this.setState({ highscore: this.state.highscore + 1 })
  }

  wasPicked = (id, picked) => {
    if(this.state.waspicked.includes(id)){
      this.shuffleVacation();
      this.setState({
        counter:0,
        message:"you guessed incorrectly"
      })
    }else {    
    this.state.waspicked.push(id)
    console.log("this state was picked", this.state.waspicked);
    this.shuffleVacation();
    this.handleIncrement();
    this.setState({
    message:"you guessed correctly"
    })
    }
  }
  


  render() {
    return (
      <div>
        <Navbar counter={this.state.counter} highscore={this.state.highscore} />
        <Jumbotron message={this.state.message} />
        <div className="container justify-content-between">
          {this.state.cardcontent.map((element, i) => {
            return <Cards
              shuffleVacation={this.shuffleVacation}
              image={element.image}
              key={element.id}
              id={element.id}
              name={element.name}
              location={element.location}
              picked={element.picked}
              wasPicked={this.wasPicked}
            />
          })}
        </div>
      </div>
    );
  }

}

export default App;
