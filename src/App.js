import logo from './logo.svg';
// import './App.css';
import { connect } from "react-redux"
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions";
import store from './redux/store';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Home from './components/Home';

function App(props) {

  const dispatch = useDispatch();
  const newCount = useSelector(
    (state) => {
      return state.counter.count
    }
  )

  const nameAuthor = useSelector(
    (state) => {
      return state.counter.name
    }
  )

  const handleIncrement = () => {
    // props.increaseCounter()
    dispatch(increaseCounter())
    // store.dispatch({
    //   type: 'test drkhaik',
    //   payload: { 'name': 'drkhaik' }
    // })
    // store.dispatch(increaseCounter())
  }

  const handleDecrement = () => {
    dispatch(decreaseCounter())
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello world with React and {nameAuthor}!</h1>
    //     <div>Count: {newCount}</div>

    //     <button onClick={() => handleIncrement()}>Increase Count</button>

    //     <button onClick={() => handleDecrement()}>Decrease Count</button>
    //   </header>
    // </div>
    <Home />
  );
}

// // map state (redux store) + props react, get date from state reducer
// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// // sending data, event, action... to reducer and processing
// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)



export default App;

