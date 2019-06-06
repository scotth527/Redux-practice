import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { apiRequest, updateUser } from './actions/updateUser.js';
import { addProduct, deleteProduct } from './actions/updateProduct.js';
import { createSelector } from 'reselect';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.onAddProduct = this.onAddProduct.bind(this);
    this.onDeleteProduct = this.onDeleteProduct.bind(this);
  }

  componentDidMount() {
      this.props.onApiRequest();
  }
  onUpdateUser(e) {
    this.props.onUpdateUser(e.target.value);
  }

  onAddProduct(stuff) {
      this.props.onAddProduct(stuff);
  }

  onDeleteProduct(index) {
      this.props.onDeleteProduct(index);
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
        {this.props.products.map((item, index)=> {
            return( <button onClick={()=>{
                this.onDeleteProduct(index)
            }}><p>{item.name}</p></button>);
        })}

        <button onClick={()=> this.onAddProduct({name:'junk'})} >Press me</button>
      </header>
      <div style={{color:"white"}}><input onChange={this.onUpdateUser}/></div>
    </div>
  );
}
}

// const mapStateToProps = (state, props) => {
//   console.log(props);
//   return{
//     products:state.products,
//     user:state.user,
//     userPlusProps: `${state.user} ${props.randomProp}`
//   }
// }
const productsSelector = createSelector(
    state => state.products,
    products => products
);

const userSelector = createSelector(
    state => state.user,
    user => user
);

const mapStateToProps = createSelector(
    productsSelector,
    userSelector,
    (products, user) => ({
        products,
        user
    })
);

const mapActionsToProps =  {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest,
    onAddProduct: addProduct,
    onDeleteProduct: deleteProduct
};
console.log(mapActionsToProps);

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return {};
// }

//mergeProps accesses both the state and dispatch actions
//mapStateToProps receives state of store
//MapActions to props will automatically dispatch functions to store
export default connect(mapStateToProps, mapActionsToProps)(App);
