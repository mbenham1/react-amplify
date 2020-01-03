import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from 'aws-amplify-react'

class App extends Component {

  state = {
    original: "",
    original2: "",
    flip: "",
    flip2: ""
  }

  handleInputChange = event => {

    let reverse = this.state.original.split("").reverse().join().replace(/,/g, '');
    let value = event.target.value;
    let name = event.target.name;
    // console.log(reverse);

    this.setState({
        [name]: value,
        flip: reverse
    });
  };

  generatePalindrome = () => {
    let reverse = this.state.original.split("").slice(0, -1).reverse().join().replace(/,/g, '');
    // console.log(reverse);
    this.setState({
      original2: this.state.original,
      flip2: reverse,
    })
  }

    render() {
      return (
      <div className="container" style={{margin: '0 auto', boxShadow: '10px 10px', fontFamily: 'Roboto', width: '60%', textAlign: 'center', border: '2px solid', borderRadius: '8px', marginTop: '50px'}}>
        <h3>Palindrome Generator</h3>
        <input
          className="form-control"
          name="original"
          value={this.state.original}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Enter palindrome"
          maxLength="50"
          autoComplete="off"
        >
        </input>
        <button onClick={this.generatePalindrome}>Generate</button>
        {/* <p>
          Palindrome: {this.state.original}{this.state.flip}
        </p>
        <p name="flip" value={this.state.flip}>
          Palindrome: {this.state.flip}
        </p> */}
        <p>
          Palindrome: {this.state.original2}{this.state.flip2}
        </p>
        <p>
          Visit <a href="http://www.michaelbenham.com">www.michaelbenham.com</a> to check!
        </p>
      </div>
      )
    }   
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default withAuthenticator(App, { includeGreetings: true })
