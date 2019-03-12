require 'rails_helper'

RSpec.describe TeamsController do
  let(:conference) { create(:conference) }

  it 'returns a success response with teams' do
    3.times { create(:team, :with_players, conference: conference) }
    get "/conferences/#{conference.id}/teams", as: :json

    expect(response).to have_http_status(:ok)
    expect(response.parsed_body.size).to eq(3)
  end
end