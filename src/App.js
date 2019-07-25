import React from 'react';

import Cards from "./components/Cards/Cards";
import cardcontent from "./cardcontent.json"
import Jumbotron from "./components/Jumbotron"
import Navbar from "./components/Navbar"
// import Counter from "./components/Navbar/Counter"
import shuffle from "shuffle-array"; 





// function App() {
//   return (
//   <div>
//   <Navbar />
//   <Counter />
//   <Jumbotron />
//   <Cards/>



//   </div>)
//   ;
// }

// export default App;



class App extends React.Component {
  state = {
    cardcontent,
    deleted: false,
    counter:0
  };
   
  removeVacation = id => {
    const vacationLocation = shuffle(this.state.cardcontent);

    this.setState({cardcontent:vacationLocation})
    this.handleIncrement();
  }

  handleIncrement = () => {
    this.setState({counter:this.state.counter +1})
   console.log(this.state.counter);
  }

  render() {
    return (
      <div>
        <Navbar counter={this.state.counter}/>
        <Jumbotron/>
        {this.state.cardcontent.map(element => {return<Cards 
        removeVacation = {this.removeVacation}
        image={element.image} 
        key={element.id} 
        id={element.id} 
        name={element.name}  
        location={element.location}/>})}
      </div>
    );
  }

}

export default App;
