class FlightsHeaderController < ApplicationController
	def city_autocomplete
		cname = params[:term].titleize.to_s
		cities =  CityName.any_of({ :city_name => /.*#{cname}.*/ }).all.order(:city_name => 'asc').limit(20)
		render :json=> cities.map{|h| {:value=>(h.city_name)}}
	end

	def index
		@flight_headers  = FlightsHeader.where(:content.nin => ["",nil])
	end

	def new
	end

	def destroy
		@header = FlightsHeader.find(params[:id])
		@header.update(content:nil)
	end

	def update
		@flight_header  = FlightsHeader.find(params[:header][:_id][:$oid])
		content = ["flights_about":eval(params[:header][:flights_about].to_json).map{|b| b if b[:menuname].present? && b[:menulink].present?}.compact,"reachCity":eval(params[:header][:reachCity].to_json).map{|b| b if b[:menuname].present? && b[:menulink].present?}.compact,"cityOffers":eval(params[:header][:cityOffers].to_json).map{|b| b if b[:menuname].present? && b[:menulink].present?}.compact]
		@flight_header.update(content:content[0])
	end

	def edit
		@flight_header  = FlightsHeader.find(params[:id])
		@flight_header["departurecity"] = CityName.find_by(city_code:@flight_header[:dep_city_code]).city_name rescue nil
		@flight_header["arrivalCity"] = CityName.find_by(city_code:@flight_header[:arr_city_code]).city_name rescue nil
		@flight_header["language_name"] = @flight_header.language == "en" ? "English" : "Arabic"
	end

	def create 
		dep_city_code =  CityName.find_by(city_name: params[:header][:departurecity]).city_code
		arr_city_code =  CityName.find_by(city_name: params[:header][:arrivalCity]).city_code
		if params[:header][:language_name] == "English"
			language = "en"
		else
			language ="ar"
		end
		if arr_city_code.present? && dep_city_code.present?
			@header = FlightsHeader.where(section:params[:header][:section],dep_city_code:dep_city_code,arr_city_code: arr_city_code,language:language,page_type:params[:header][:page_type])
			content = ["flights_about":eval(params[:header][:flights_about].to_json).map{|b| b if b[:menuname].present? && b[:menulink].present?}.compact,"reachCity":eval(params[:header][:reachCity].to_json).map{|b| b if b[:menuname].present? && b[:menulink].present?}.compact,"cityOffers":eval(params[:header][:cityOffers].to_json).map{|b| b if b[:menuname].present? && b[:menulink].present?}.compact]
			if @header.present?			
				@header.update(content:content[0])
			else
				@header = FlightsHeader.where(section:params[:header][:section],dep_city_code:dep_city_code,arr_city_code: arr_city_code,language:language,page_type:params[:header][:page_type],content:content)
			end
		end
	end
end
