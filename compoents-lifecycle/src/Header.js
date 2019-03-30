import React, { Component } from 'react'

export default class Header extends Component {
  constructor() {
    super()
    console.log('constructor')
  }
  componentWillMount() {
    console.log('WillMount!')
  }
  componentDidMount() {
    console.log('DidMount!')
  }
  render() {
    console.log('render Dom渲染开始')
    return (
      <div>
        <h1>Header</h1>
      </div>
    )
  }
}
