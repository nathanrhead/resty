import React from 'react';
import Header from './header';
import Footer from './footer';
import Form from './form';
import './app.scss';

class App extends React.Component {

  render() {
    return (
      <section>
        <Header />
        <Form />
        <Footer />
      </section>
    )
  }
}

export default App;
