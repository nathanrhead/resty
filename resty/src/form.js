import React from 'react'; 
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      route: '',
    }
  }
  
  handleInput = event => {
    let userInput = event.target.value;
    this.setState({ input: userInput })
  }

  handleClick = event => {
    event.preventDefault();
    let userSelection = event.target.value;
    this.setState({ route: userSelection });
  }

  render() {
    return (
      <>
        <form>
          <textarea  placeholder="Enter your API's url here and choose your action below." onChange={this.handleInput}/>
          <div>
            <input type="submit" value="POST" onClick={this.handleClick}/>
            <input type="submit" value="GET" onClick={this.handleClick}/> 
            <input type="submit" value="PUT" onClick={this.handleClick}/> 
            <input type="submit" value="DELETE" onClick={this.handleClick}/>
          </div>
        </form>
        <div id="rendered-input">
          {/* <h2 id="route">Route: {this.state.route}</h2> */}
          <p id="URL">URL / ROUTE:
            <h2> {this.state.input}/{this.state.route}</h2>
          </p>
        </div>
      </>
    )
  }
  
}


export default Form;
