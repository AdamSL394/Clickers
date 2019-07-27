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
    picked: false,
    message: ""
  };

  shuffleVacation = id => {
    this.wasPicked(id);
    const vacationLocation = shuffle(this.state.cardcontent);
    this.setState({ cardcontent: vacationLocation })
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  wasPicked = id => {

    const { counter } = this.state

    let newArry = this.state.cardcontent;
    var newCounter = counter
    newArry.forEach((elem, i) => {
      // console.log(elem.picked);
      console.log(id)
      // console.log(elem.picked)
      if (elem.id = id && elem.picked === false ) {
        this.setState({
          counter: 0,
          picked: false,
          message: "you picked incorrectly",
        })
      }
      else {
          elem.picked = true
          this.setState({
            counter: newCounter++,
            cardcontent: newArry,
            message: "you picked correctly"
          })
          this.handleIncrement()
        }
      
      // return true;
    })




    setTimeout(() => {
      this.setState({
        message: ""
      })
    }, 1000)
  }



  render() {
    return (
      <div>
        <Navbar counter={this.state.counter} />
        <Jumbotron message={this.state.message} />
        <div className="container justify-content-between">
          {this.state.cardcontent.map(element => {
            return <Cards
              shuffleVacation={this.shuffleVacation}
              image={element.image}
              key={element.id}
              id={element.id}
              name={element.name}
              location={element.location}
              picked={element.picked}
              waspicked={this.wasPicked} />
          })}
        </div>
      </div>
    );
  }

}

export default App;
