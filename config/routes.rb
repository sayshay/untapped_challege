Rails.application.routes.draw do

  resources :divisions do
    resources :conferences do
      resources :teams
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
