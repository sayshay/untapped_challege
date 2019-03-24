import React, { Component } from 'react'
import axios from 'axios'
import {
  Box,
  ListItem,
  TextInput,
  FormLabel,
  Button,
} from '@untappd/components'

const API = 'http://localhost:5000'

class CreateTeam extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      mascot: '',
      coach: '',
      wins: '',
      losses: '',
      conference_id: this.props.conference_id,
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const target = e.target
    const value = target.value
    const name = e.target.name
    this.setState({ [name]: value })
  }

  onSubmit(e) {
    e.preventDefault()
    const team = this.state
    axios
      .post(`${API}/conferences/${this.props.conference_id}/teams/`, this.state)
      .then(res => {
        this.setState({
          name: '',
          mascot: '',
          coach: '',
          wins: '',
          losses: '',
        })
        this.props.fetchData()
      })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <FormLabel>Team Name: </FormLabel>
        <TextInput
          name="name"
          value={this.state.name}
          onChange={this.onChange}
        />

        <FormLabel>Mascot: </FormLabel>
        <TextInput
          name="mascot"
          value={this.state.mascot}
          onChange={this.onChange}
        />

        <FormLabel>Coach: </FormLabel>
        <TextInput
          name="coach"
          value={this.state.coach}
          onChange={this.onChange}
        />

        <FormLabel>Wins: </FormLabel>
        <TextInput
          name="wins"
          value={this.state.wins}
          onChange={this.onChange}
        />

        <FormLabel>Losses: </FormLabel>
        <TextInput
          name="losses"
          value={this.state.losses}
          onChange={this.onChange}
        />

        <Button size="small" type="submit" color="blue">
          Create Team
        </Button>
      </form>
    )
  }
}

export default CreateTeam
