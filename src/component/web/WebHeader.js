import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WebHeader extends Component {
  render() {
    return (
      <div>
        <h1>WebHeader</h1>
        <Link to="/dashboard/a2" > A2</Link>
        <Link to="/dashboard/a3" > A3</Link>
        <Link to="/w2"> w2</Link>
        <Link to="/w3"> w2</Link>
      </div>
    )
  }
}
