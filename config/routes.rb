Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :edit, :show]
    resource :session, only: [:create,  :destroy, :show]
    resources :messages, only: [:create, :edit, :show, :index]
  end

  root "static_pages#root"
end
