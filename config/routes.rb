Rails.application.routes.draw do
  resources :conferences do
    resources :teams do
      resources :players, except: :update
    end
  end

  root 'conferences#show'
  put '/players/:id', to: 'players#update'
end
