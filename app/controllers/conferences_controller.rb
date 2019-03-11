class ConferencesController < ApplicationController
  # GET /players
  def index
    @players = Conference.all

    render json: @players
  end
end
