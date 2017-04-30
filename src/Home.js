import React from 'react'
import store from 'store'

import NotAuthed from './NotAuthed'
import Cardlist from './Cardlist'
export default class Home extends React.Component {
  render () {
    const token = store.get('token')

    if (token) {
      return (<Cardlist />)
    } else {
      return (<NotAuthed />)
    }
  }
}
