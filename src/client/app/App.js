import React, { Component, PropTypes } from 'react';
import { hot } from 'react-hot-loader'
import '../public/css/main.css'
class App extends Component {
 render() {
   return (
     <div className="App">
       <header className="header">
         <h1 className="App-title">Welcome to React-Webpack</h1>
       </header>
       <p className="App-intro">
         To get started, edit <code>src/App.js</code> and save to reload.
       </p>
     </div>
   );
 }
}

export default hot(module)(App);