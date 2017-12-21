Rails.application.routes.draw do
  get 'flights_header/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources "users"
  root "users#index"
  scope :panel do
  resources "flights_header"
	get "/admincity/autocomplete" => "flights_header#city_autocomplete"
  end
end
