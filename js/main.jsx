import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'
import {Router, Route } form 'react-router'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-12">
        <h1 className="site-title">Shopping Cart</h1>
        </div>
        {this.props.children}
      </div>
    )
  }
}

ReactDom.render(
  <Router>
    <Route path ="/" component={Main}></Route>
  </Router>
  , document.getElementById('app'))
