Rails.application.routes.draw do
  resources :conferences do
    resources :teams do
      resources :players
    end
  end

  root 'conferences#show'
end
