class ConferencesController < ApplicationController
  # Hardcoded to get just the first Conference's data
  def show
    conference = Conference.first
    teams = conference.teams

    data = {
      conference: {
        name: conference.name,
        short_name: conference.short_name
      },
      teams: teams
    }

    render json: data
  end
end
