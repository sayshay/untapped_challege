import React, { Component } from 'react'
import axios from 'axios'
import { List, ListItem, Box } from '@untappd/components'
import Player from './Player'

const API = 'http://localhost:5000'

class Players extends Component {
  constructor(props) {
    super(props)

    this.state = {
      players: [],
    }
    this.fetchData = this.fetchData.bind(this)
  }

  fetchData() {
    axios
      .get(
        `${API}/conferences/${this.props.conferenceId}/teams/${
          this.props.teamId
        }/players`,
        { mode: 'no-cors' },
      )
      .then(response => {
        this.setState({ players: response.data.players })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const players = this.state.players.map(player => (
      <Player key={player.id} player={player} />
    ))

    return (
      <List>
        <ListItem>
          <Box width={[1]}>Name</Box>
          <Box width={[1]}>Height</Box>
          <Box width={[1]}>Width</Box>
          <Box width={[1]}>Position</Box>
          <Box width={[1]}>Starter</Box>
          <Box width={[1]}>Jersey Number</Box>
        </ListItem>

        {players}
      </List>
    )
  }
}

export default Players
