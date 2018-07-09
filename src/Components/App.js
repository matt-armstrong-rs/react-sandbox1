import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layout'

export default class extends Component {
  render() {
    return <Fragment>
    <Header />
    <div>This is a test</div>
    <Footer />
    </Fragment>
  }
}