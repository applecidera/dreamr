Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts do
      member do
        delete :delete_attachment
      end
    end
    resources :likes, only: [:index, :show, :create, :destroy]
    resources :follows, only: [:index, :show, :create, :destroy]
  end
  
end
