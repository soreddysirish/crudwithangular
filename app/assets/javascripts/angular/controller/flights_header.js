app.controller("flights_header",["$http","$window",function($http,$window){
	var header = this;
	header.flights_header = {
		language_name:"",
		section: "",
		page_tyype: "",
		departurecity:"",
		arrivalCity:"",
		flights_about: [{
			menuname: "",
			menulink: ""
		}],
		reachCity: [{
			menuname: "",
			menulink: ""
		}],
		cityOffers: [{
			menuname: "",
			menulink: ""
		}]
	}

	if(typeof json != 'undefined') {
		angular.forEach(json, function(obj_value, obj_key) {
			header[obj_key] = angular.copy(obj_value);
		})
		if(json.flights_header && (window.location.pathname != "/users" && window.location.pathname != "/" && window.location.pathname != "/panel/flights_header/")) {
			header.flights_header.flights_about = header.flights_header.content.flights_about
			header.flights_header.reachCity = header.flights_header.content.reachCity
			header.flights_header.cityOffers = header.flights_header.content.cityOffers
			if(header.flights_header.flights_about.length >= 1){
				header.flights_header.about_city_present = true
			}if(header.flights_header.reachCity.length >= 1){
				header.flights_header.reach_city_present = true
			}if(header.flights_header.cityOffers.length >= 1){
				header.flights_header.offers_present = true
			}
		}

	}
	header.addAboutData= function(){
		header.flights_header.flights_about.push({menuname:"",menulink:""})
	}
	header.removeAboutData= function(index){
		header.flights_header.flights_about.splice(index,1)
	}
	header.addReachData= function(){
		header.flights_header.reachCity.push({menuname:"",menulink:""})
	}
	header.removeReachData= function(index){
		header.flights_header.reachCity.splice(index,1)
	}
	header.addOffersData= function(){
		header.flights_header.cityOffers.push({menuname:"",menulink:""})
	}
	header.removeOffersData= function(index){
		header.flights_header.cityOffers.splice(index,1)
	}
	header.about_change = function(){
		if (!header){var header = this}
			if(!header.flights_header.about_city_present){
				header.flights_header.flights_about =[]
			}else{
				header.flights_header.flights_about =[]
				header.flights_header.flights_about.push({menuname:"",menulink:""})
			}
		}
		header.reach_change = function(){
			if (!header){var header = this}
				if(!header.flights_header.reach_city_present){
					header.flights_header.reachCity =[]
				}else{
					header.flights_header.reachCity =[]
					header.flights_header.reachCity.push({menuname:"",menulink:""})
				}
			}
			header.offers_change = function(){
				if (!header){var header = this}
					if(!header.flights_header.offers_present){
						header.flights_header.cityOffers =[]
					}
					else{
						header.flights_header.cityOffers =[]
						header.flights_header.cityOffers.push({menuname:"",menulink:""})
					}
				}
				header.saveFlightheader = function(){
					if (!header){var header = this}
						if(header.flights_header._id){
							$http.put('/panel/flights_header/'+header.flights_header._id.$oid,{header:header.flights_header}).then(function(data){
								$window.location.href = "/panel/flights_header/"
							},function(err){
							})
						}else{
							$http.post('/panel/flights_header/',{header:header.flights_header})
							.then(function(data){
								$window.location.href = "/panel/flights_header/"
							},function(err){

							})
						}
					}
					header.editChoice = function(id){
						if (!header){var header = this}
							$http.get("/panel/flights_header/"+id+"/edit").then(function(data){
								$window.location.href = "/panel/flights_header/"+id+"/edit"
							},function(err){
							})

					}
					header.deleteChoice =function(id){
						$http.delete("/panel/flights_header/"+id).then(function(data){
							$window.location.href = "/panel/flights_header/"
						},function(err){

						})
					}
				}])
app.directive('adminCityFlightAutoComplete', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attr) {
			$("#city-flight-arrival").autocomplete({
				source: "/panel/admincity/autocomplete",
				minLength: 3,
				select: function(event, ui) {
				}
			});
		}
	}
});
app.directive('adminDepFlightAutoComplete', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attr) {
			$("#city-flight-departure").autocomplete({
				source: "/panel/admincity/autocomplete",
				minLength: 3,
				select: function(event, ui) {
				}
			});
		}
	}
});