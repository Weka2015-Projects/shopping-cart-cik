import React, { Component } from 'react'
import request from 'superagent'

class Form extends Component {
  constructor (props) {
    super(props)
    }
    handleSubmit(e) {
      e.preventDefault()
      request.post('/users')
      .end((err, res) => {
        if(err) {
          console.log("You done F*cked up" + err)
        } else {
          this.props.submitCallback(res.body.results)
        }
      })
    }
    render() {
      return (
          <form callName="product-junk" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <input type="text" ref="product" className="form-input"></input>
              <button type="submit">Search inside yo business</button>
            </div>
          </form>
        )
    }
  }
export default Form
