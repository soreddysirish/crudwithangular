app.controller("sampleForm",["$http","$window",function($http,$window){
	var user = this
	user.form_data = {
		name:"",
		email: "",
		mobile: "",
		hobbies: [{
			name: "",
			description: ""
		}]
	}
	
	if(typeof json != 'undefined') {
		angular.forEach(json, function(obj_value, obj_key) {
			user[obj_key] = angular.copy(obj_value);
		})
		if(json.form_data && (window.location.pathname != "/users" && window.location.pathname != "/")) {
			user.form_data.hobbies = JSON.parse(user.form_data.hobbies);
			if(user.form_data.hobbies.length >= 1){
			user.form_data.hobbies_present = true
			}
		}
	}
	user.saveData =function(){
		if(user.form_data.id){
			$http.put('/users/'+user.form_data.id,{user:user.form_data}).then(function(data){
				$window.location.href ="/users"
			},function(err){
			})
		}else{
			$http.post('/users',{user:user.form_data})
			.then(function(data){
				$window.location.href = "/users"
			},function(err){

			})
		}
	}
	user.deleteUser = function(id,index){
		$http.delete('/users/'+id).then(function(data){
			if(user.form_data[index].id === id){
				user.form_data.splice(index,1)
			}
		},function(err){
		})
	}
	user.addhobbies = function(){
		if (!user){
			var user = this
		}
		user.form_data.hobbies.push({name:"",description:""})
	}
	user.removehobbies = function(index){
		if (!user){var user = this}
		user.form_data.hobbies.splice(index,1)
	}
	user.hobbies_change = function(){
		if (!user){var user = this}
		if(!user.form_data.hobbies_present){
			user.form_data.hobbies =[]
		}else{
			user.form_data.hobbies.push({name:"",description:""})
		}
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