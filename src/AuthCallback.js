import React from 'react'
import { withRouter } from 'react-router'
import { trimStart }  from 'lodash'
import store from 'store'
import { Redirect } from 'react-router-dom'

class AuthCallback extends React.Component {
  render () {
    const { location } = this.props
    const token = trimStart(location.hash, '#token=')
    store.set('token', token)
    return (<Redirect to='/' />)
  }
}

export default withRouter(AuthCallback)
