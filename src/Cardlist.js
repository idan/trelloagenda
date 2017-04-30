import React from 'react'
import store from 'store'
import axios from 'axios'
import moment from 'moment'
import _ from 'lodash'

const colormap = {
  'green': '#61BD4F',
  'yellow': '#F2D600',
  'orange': '#FFAB4A',
  'red': '#EB5A46',
  'purple': '#C377E0',
  'blue': '#0079BF',
  'sky': '#00C2E0',
  'pink': '#FF80CE',
}

export default class Cardlist extends React.Component {
  state = {
    cards: [],
  }

  componentDidMount () {
    const startOfYesterday = moment().subtract(1, 'day').startOf('day')
    console.debug('showing cards with a due date >= ', startOfYesterday.toString())
    const token = store.get('token')
    axios.get(`https://api.trello.com/1/boards/50fa830b365c57f947004b12/cards?key=aa7ec38ab6a4c3d02f59026f00acae3b&token=${token}`)
      .then((res) => {
        this.setState({
          cards: res.data
            .filter((card) => !!card.due && moment(card.due).isSameOrAfter(startOfYesterday)) // only cards with a due date after yesterday
            .sort((a, b) => this.sortAscending(a.due, b.due)) // sort by time ascending
        })
      })

    // axios.get(`https://api.trello.com/1/boards/50fa830b365c57f947004b12/labels?key=aa7ec38ab6a4c3d02f59026f00acae3b&token=${token}`)
    //   .then((res) => {
    //     const labels = _.fromPairs(res.data.map((label) => ([label.id, colormap[label.color]])))
    //     this.setState({labels})
    //   })

  }

  sortAscending (a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN
  }

  render () {
    const { cards } = this.state
    const groupedByDate = _.toPairs(_.groupBy(cards, (card) => moment(card.due).startOf('day').toISOString())).sort((a,b) => this.sortAscending(a[0], b[0]))
    console.debug(groupedByDate)
    const dateGroups = groupedByDate.map((group) => {
      const cards = group[1].sort((a, b) => this.sortAscending(a.due, b.due)).map((card) => {
        const labels = card.labels
          .map((label) => (<div className='w1 flex-none' key={label.id} style={{background: colormap[label.color]}}></div>))
        return (
          <a key={card.id} className='flex flex-row pa0 ma3 black bg-lightest-blue no-underline bg-animate hover-bg-light-blue' href={card.url}>
            <div className='flex-auto pa3'>{card.name}</div>
            <div className='flex-none pv3 ph2 f6 gray'>{moment(card.due).format('HH:mm')}</div>
            {labels}
          </a>
        )
      })
      const isToday = moment(group[0]).isSame(moment(), 'day')
      return (<div className='mb5' key={group[0]}>
        <h3 className='mh3' id={isToday ? 'today' : ''}>{moment(group[0]).format('ddd MMMM Do')}</h3>
        {cards}
      </div>)
    })

    return (<div>{dateGroups}</div>)
  }
}
