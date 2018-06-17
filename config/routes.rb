Rails.application.routes.draw do

  resources :todos, defaults: { format: :json } do
    resources :comments, only: [:index, :create]
  end

  resources :comments, except: [:index, :create], defaults: { format: :json }

end
