class CityName
  include Mongoid::Document
  field :city_code, type: String
  field :city_name, type: String
end
