FactoryBot.define do
  factory :player do
    name { 'Coby White' }
    position { 'Guard' }
    height { 150 }
    weight { 160 }
    jersey_number { 10 }
    team
  end
end
