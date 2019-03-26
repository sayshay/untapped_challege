import React, { Component } from 'react'
import axios from 'axios'
import {
  Box,
  Button,
  Card,
  Heading,
  TextInput,
  FormLabel,
  Row,
  Column,
} from '@untappd/components'
import Players from './Players'
import CreateTeam from './CreateTeam'

const API = 'http://localhost:5000'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      conference: null,
      teams: [],
      shown: {},
    }
    this.toggleCardContent = this.toggleCardContent.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  fetchData() {
    axios.get(API, { mode: 'no-cors' }).then(response => {
      const data = response.data
      this.setState({ conference: data.conference, teams: data.teams })
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  toggleCardContent(teamId) {
    this.setState({
      shown: {
        ...this.state.shown,
        [teamId]: !this.state.shown[teamId],
      },
    })
  }

  onChange(name, id, e) {
    const teams = this.state.teams
    const team = teams.find(team => team.id === id)
    team[name] = e.target.value
    this.setState({ teams: teams })
  }

  onSubmit(e, id) {
    e.preventDefault()
    const teams = this.state.teams
    const team = teams.find(team => team.id === id)

    axios
      .put(`${API}/conferences/${this.state.conference.id}/teams/${team.id}`, {
        team,
      })
      .then(response => {
        team.wins = response.data.wins
        team.losses = response.data.losses
        this.setState({ teams: teams })
      })
  }

  render() {
    const { conference } = this.state
    const { teams } = this.state

    if (conference === null) {
      return <h3>loading</h3>
    }

    return (
      <Box className="App" mx={12} my={5}>
        <Heading>
          {conference.short_name} ({conference.name})
        </Heading>

        {teams.map(team => (
          <Card key={team.id} mb={3}>
            <Card.Header>
              <Heading>
                <div onClick={() => this.toggleCardContent(team.id)}>
                  {team.name} {team.mascot} {team.coach}
                </div>
                <Row mb={4} flexWrap="wrap">
                  <form onSubmit={e => this.onSubmit(e, team.id)}>
                    <FormLabel>Wins: </FormLabel>
                    <TextInput
                      name="wins"
                      value={team.wins}
                      onChange={e => this.onChange('wins', team.id, e)}
                    />
                    <FormLabel>Losses: </FormLabel>
                    <TextInput
                      name="losses"
                      value={team.losses}
                      onChange={e => this.onChange('losses', team.id, e)}
                    />
                    <Button size="small" type="submit" color="blue">
                      Update
                    </Button>
                  </form>
                </Row>
              </Heading>
            </Card.Header>
            {this.state.shown[team.id] && (
              <Card.Content>
                <Players conferenceId={conference.id} teamId={team.id} />
              </Card.Content>
            )}
          </Card>
        ))}
        <h2>Create Team</h2>
        <Column width={[200]}>
          <CreateTeam
            conference_id={this.state.conference.id}
            fetchData={this.fetchData}
          />
        </Column>
      </Box>
    )
  }
}

export default App
