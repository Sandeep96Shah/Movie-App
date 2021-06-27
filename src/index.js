import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import combineReducer from './reducers';
import {Provider} from 'react-redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const logger = ({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action!=='function'){
    console.log('ACTION-TYPE',action.type);
  }
  next(action);
}

const thunk=({dispatch,getState})=> (next) => (action)=>{
  if(typeof action==='function'){
    action(dispatch);
    return;
  }
  next(action);
}

const store=createStore(combineReducer,applyMiddleware(logger,thunk));
console.log('store',store);
// export const StoreContext=createContext();
// console.log('storeContext',StoreContext);

// class Provider extends React.Component{
//   render(){
//     const{store}=this.props;
//     return(
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     )
//   }
// }

// export function connect(callback){
//   return function (Component){
//     class ConnectedComponent extends React.Component{
//       constructor(props){
//         super(props);
//         this.unSubscribe=this.props.store.subscribe(()=> this.forceUpdate());
//       }
//       componentWillUnmount(){
//         this.unSubscribe();
//       }
//       render(){
//         const {store}=this.props;
//         const state=store.getState();
//         const dataToBePassedAsProps=callback(state);
//         return (
//         <Component 
//           {...dataToBePassedAsProps}
//           dispatch={this.props.store.dispatch}
//         />
//         );
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component{
//       render(){
//         return (
//           <StoreContext.Consumer>
//             {(store)=>
//               <ConnectedComponent 
//                 store={store}
//                 dispatch={store.dispatch}
//               />
//             }
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


