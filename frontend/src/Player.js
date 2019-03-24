import React, { Component } from 'react'
import axios from 'axios'
import { Box, ListItem, TextInput } from '@untappd/components'

const API = 'http://localhost:5000'

class Player extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.player.name,
      height: this.props.player.height,
      width: this.props.player.width,
      position: this.props.player.position,
      starter: this.props.player.starter,
      jersey_number: this.props.player.jersey_number,
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const player = this.state
    const name = e.target.name
    player[name] = value

    axios
      .put(`${API}/players/${this.props.player.id}`, { player })
      .then(response => {
        this.setState({
          starter: response.data.starter,
          jersey_number: response.data.jersey_number,
        })
      })
  }

  render() {
    return (
      <ListItem>
        <Box width={[1]}>{this.state.name}</Box>
        <Box width={[1]}>{this.state.height}</Box>
        <Box width={[1]}>{this.state.width}</Box>
        <Box width={[1]}>{this.state.position}</Box>
        <Box width={[1]}>
          <input
            name="starter"
            type="checkbox"
            checked={this.state.starter}
            onChange={this.onChange}
          />
        </Box>
        <Box width={[1]}>
          <TextInput
            name="jersey_number"
            value={this.state.jersey_number || ''}
            onChange={this.onChange}
          />
        </Box>
      </ListItem>
    )
  }
}

export default Player
