# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def create_acc_conf
  Conference.create(
    name: 'Atlantic Coast Conference',
    short_name: 'ACC'
  )
end

def create_teams
  conference = create_acc_conf
  @teams.each do |team|
    Team.create!(**team, conference: conference)
  end
end

def add_teams_players
  duke = Team.find_by(name: 'Duke')
  unc = Team.find_by(name: 'North Carolina')
  state = Team.find_by(name: 'NC State')

  @duke_players.each { |player| Player.create!(**player, team: duke) }
  @unc_players.each { |player| Player.create!(**player, team: unc) }
  @state_players.each { |player| Player.create!(**player, team: state) }
end

@teams = [
  {
    name: 'Duke',
    mascot: 'Blue Devils',
    coach: 'Mike Krzyzewski',
    wins: 26,
    losses: 5
  },
  {
    name: 'North Carolina',
    mascot: 'Tar Heels',
    coach: 'Roy Williams',
    wins: 26,
    losses: 5
  },
  {
    name: 'NC State',
    mascot: 'Wolfpack',
    coach: 'Kevin Keatts',
    wins: 28,
    losses: 2
  }
]

@duke_players = [
  {
    jersey_number: 1,
    name: "Zion Williamson",
    height: "6-7",
    weight: 275,
    position: "Center"
  },
  {
    jersey_number: 5,
    name: "RJ Barrett",
    height: "6-7",
    weight: 202,
    position: "Forward"
  },
  {
    jersey_number: 2,
    name: "Cam Reddish",
    height: "6-8",
    weight: 218.0,
    position: "Forward"
  },
  {
    jersey_number: 3,
    name: "Tre Jones",
    height: "6-2",
    weight: 183,
    position: "Guard"
  }
]

@state_players = [
  {
    jersey_number: 55,
    name: "Blake Harris",
    height: "6-3",
    weight: 190,
    position: "Guard"
  },
  {
    jersey_number: 4,
    name: "Jericole Hellems ",
    height: "6-7",
    weight: 198,
    position: "Forward"
  },
  {
    jersey_number: 11,
    name: "Markell Johnson",
    height: "6-1",
    weight: 175,
    position: "Guard"
  },
  {
    jersey_number: 1,
    name: "Sacha Killeya-Jones",
    height: "6-11",
    weight: 220,
    position: "Forward"
  }
]

@unc_players = [
  {
    jersey_number: 2,
    name: "Coby White",
    height: "6-5",
    weight: 185,
    position: "Guard"
  },
  {
    jersey_number: 32,
    name: "Luke Maye",
    height: "6-8",
    weight: 240,
    position: "Forward"
  },
  {
    jersey_number: 5,
    name: "Nassir Little",
    height: "6-6",
    weight: 220,
    position: "Forward"
  },
  {
    jersey_number: 13,
    name: "Cameron Johnson",
    height: "6-9",
    weight: 210,
    position: "Guard"
  }
]

create_teams
add_teams_players