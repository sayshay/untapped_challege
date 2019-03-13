import React, { Component } from 'react'
import axios from 'axios'

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
      <div className="App">
        <h1>{conference.name}</h1>
        {teams.map(team => (
          <li key={team.id}>
            {team.name} {team.mascot}
          </li>
        ))}
      </div>
    )
  }
}

export default App
