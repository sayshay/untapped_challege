import React, { Component } from 'react'
import axios from 'axios'
import { Box, Button, Card } from '@untappd/components'

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
      <Box className="App" mx={8}>
        <Card>
          <Card.Header>{conference.name}</Card.Header>
          <Card.Content>
            <Button color="red">Testing</Button>

            {teams.map(team => (
              <li key={team.id}>
                {team.name} {team.mascot}
              </li>
            ))}
          </Card.Content>
        </Card>
      </Box>
    )
  }
}

export default App
