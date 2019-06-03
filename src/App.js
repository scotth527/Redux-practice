import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from './actions/updateUser.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(e) {
    this.props.onUpdateUser(e.target.value);
  }

  render() {
    console.log(this.props.user);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{ this.props.user} </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{color:"white"}}><input onChange={this.onUpdateUser}/></div>
    </div>
  );
}
}

const mapStateToProps = (state, props) => {
  console.log(props);
  return{
    products:state.products,
    user:state.user,
    userPlusProps: `${state.user} ${props.randomProp}`
  }
}

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators ({
    onUpdateUser: updateUser
  }, dispatch);
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps);
  return {};
}

//mergeProps accesses both the state and dispatch actions
//mapStateToProps receives state of store
//MapActions to props will automatically dispatch functions to store
export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);
