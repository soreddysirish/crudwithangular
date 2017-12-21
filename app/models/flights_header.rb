class FlightsHeader
  include Mongoid::Document
  include Mongoid::Timestamps
  field :dep_city_code,type: String
  field :arr_city_code,type: String
  field :dep_city_name,type: String
  field :arr_city_name,type: String
  field :page_type,type: String
  field :section,type: String
  field :language,type: String
  field :carrier_code,type: String
  field :dom_airlines,type: Array
  field :int_airlines,type: Array
  field :airport_details,type: Hash
  field :hotel_details,type: Hash
  field :train_details,type: Hash
  field :offers_details,type: Array
  field :tourism_details,type: Array
  field :content,type: Hash  
  field :route_type,type: String
end