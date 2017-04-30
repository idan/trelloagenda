import React from 'react'

export default class NotAuthed extends React.Component {
  render () {
    return (<div className='flex flex-column items-center justify-center h-100'>
      <a className='f3 db mw6 no-underline ma3 pa3 black bg-lightest-blue hover-bg-light-blue bg-animate'
        href={`https://trello.com/1/authorize?callback_method=fragment&return_url=${encodeURIComponent(window.location)}authcallback&scope=read&expiration=never&name=Trello%20Agenda&key=aa7ec38ab6a4c3d02f59026f00acae3b`}>Auth with Trello</a>
    </div>)
  }
}
