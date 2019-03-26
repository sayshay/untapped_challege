class PlayersController < ApplicationController
  # GET /players
  def index
    @team = Team.find(params[:team_id])
    render json: { players: @team.players }
  end

  def update
  	@player = Player.find(params[:id])
  	if @player.update(jersey_number: params[:player][:jersey_number], starter: params[:player][:starter])
  		render json: @player
  	else
    	render json: @player.errors
    end
  end
end
