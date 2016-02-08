'use strict'

import React, {Component} from 'react'
import Form from './form.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }
  render({
    const { products } = this.state
    return (
      <div className="container">
        <Form submitCallback ={this.submitCallbank.bind)this)}/>
      </div>
    )
  })
}

export default App
