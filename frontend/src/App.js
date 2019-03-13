import React, { Component } from 'react'
import axios from 'axios'
import { Box, Button, Card, Heading } from '@untappd/components'

const API = 'http://localhost:5000'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      conference: null,
      teams: [],
    }
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
                {team.name} {team.mascot}
              </Heading>
            </Card.Header>
            <Card.Content>
              <li>Player's</li>
              <li>go</li>
              <li>here</li>
            </Card.Content>
          </Card>
        ))}
      </Box>
    )
  }
}

export default App
