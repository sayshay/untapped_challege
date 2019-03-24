class TeamsController < ApplicationController
  # GET /teams
  def index
    @teams = Team.all
    render json: @teams
  end

  def create
    @team = Team.new(team_params)
     if @team.save(team_params)
      render json: @team
     else
        render json: @team.errors
      end   
  end

  def update
  	@team = Team.find(params[:team][:id])
  	 if @team.update(team_params)
  	 	render json: @team
  	 else
        render json: @team.errors
      end  	
  end

  private

  def team_params
      params.require(:team).permit(:name, :mascot, :coach, :wins, :losses, :conference_id)
    end
end
