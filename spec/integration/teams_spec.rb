require 'rails_helper'

RSpec.describe TeamsController do
  let(:conference) { create(:conference) }

  it 'updates team' do
    team = Team.create(conference: conference)
    put "/conferences/#{conference.id}/teams/#{team.id}", params: {:team => { id:team.id , wins: 10 }}
    expect(response).to have_http_status(:ok)
    expect(response.parsed_body['wins']).to eq(10)
  end
end
