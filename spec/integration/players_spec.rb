require 'rails_helper'

RSpec.describe PlayersController do
  let(:conference) { create(:conference) }
  let(:team) { create(:team, :with_players, conference: conference) }
  let(:player) { create(:player, team: team) }

  it 'returns players' do
    3.times{ create(:player, team: team) }
    get "/conferences/#{conference.id}/teams/#{team.id}/players", as: :json
    expect(response).to have_http_status(:ok)
    p response.parsed_body
    expect(response.parsed_body['players'].size).to eq(3)
  end

  it 'updates player' do
    put "/players/#{player.id}", params: {:player => { :jersey_number => 9 } }
    expect(response).to have_http_status(:ok)
    expect(response.parsed_body['jersey_number']).to eq(9)
  end
end
