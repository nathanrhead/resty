import React from 'react'; 

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
          <textarea cols="55" rows="2" placeholder="Enter your API's url here and choose your action below." onChange={this.handleInput}/>
          <input type="submit" value="POST" onClick={this.handleClick}/> 
          <input type="submit" value="GET" onClick={this.handleClick}/> 
          <input type="submit" value="PUT" onClick={this.handleClick}/> 
          <input type="submit" value="DELETE" onClick={this.handleClick}/>
        </form>
        <section>
          <h2 id="route">Route: {this.state.route}</h2>
          <h3 id="URL">URL: {this.state.input}</h3>
        </section>
      </>
    )
  }
  
}


export default Form;
