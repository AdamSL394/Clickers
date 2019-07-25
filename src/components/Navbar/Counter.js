import React from 'react';
import cardcontent from "./cardcontent.json"
import shuffle from "shuffle-array"
//   var shuffle = require('shuffle-array'),





class Counter extends React.Component {
  state = {
    cardcontent,
    deleted: false,
    counter:0
  };
  
  
// shuffleImages (cardcontent)

//   collection = [1,2,3,4,5];

// shuffle(collection);

// console.log(collection);


   
  removeVacation = id => {
    const vacationLocation = this.state.cardcontent.shuffle(vaca => vaca.id !==id);

    this.setState({cardcontent:vacationLocation})
    this.handleIncrement();
  }

  handleIncrement = () => {
    this.setState({counter:this.state.counter +1})
   console.log(this.state.counter)
  }

  render() {
    return (
      <div>
        <li className="nav-item">
                    <p>count{this.state.counter}</p>
        </li>
      </div>
    );
  }

}

export default Counter;
