Rails.application.routes.draw do
  resources :sub_areas
  resources :areas
  resources :students
  root 'students#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
