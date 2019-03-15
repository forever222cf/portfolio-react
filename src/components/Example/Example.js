import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './../../logo.svg';
import './Example.css';

import { clickText } from './example-actions';

class Example extends Component {
  render() {
    const { exampleText, clickText } = this.props;

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span
            className="App-link"
            onClick={clickText}
          >
            { exampleText }
          </span>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exampleText: state.example.exampleText
  }
}
const mapDispatchToProps = dispatch => ({
  clickText: () => dispatch(clickText())
})

export default connect(mapStateToProps, mapDispatchToProps)(Example);
