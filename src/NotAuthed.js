import React from 'react'

export default class NotAuthed extends React.Component {
  render () {
    return (<div>
      <a href='https://trello.com/1/authorize?callback_method=fragment&return_url=https:%2F%2Feddae1e1.ngrok.io%2Fauthcallback&scope=read&expiration=never&name=Trello%20Agenda&key=aa7ec38ab6a4c3d02f59026f00acae3b'>Auth with Trello</a>
    </div>)
  }
}
