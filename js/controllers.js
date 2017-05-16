
myApp.controller('employeesCtrl', ['$scope', '$http' , function($scope, $http){

	$scope.message = "Employees Info Section";
	
	$http.get('http://localhost:8080/TEK/gulp-sass/js/employees.json').success(function(data){
    	$scope.employeesCtrlData= data;
  	});
		
}]);

myApp.controller('employeesIdCtrl', ['$scope', '$http', '$stateParams' , function($scope, $http, $stateParams){

	$scope.message = "Employees Individual Info Section";
	
	$http.get('http://localhost:8080/TEK/gulp-sass/js/employees.json').success(function(data){
    	$scope.employeesCtrlIDData= data;
  	});

  	$scope.empId = $stateParams.empId;
		
}]);





// myApp.config(["$translateProvider", function ($translateProvider) {
// 	$translateProvider.translations("en", myApp.translationsEN);
// 	$translateProvider.preferredLanguage("en");
// }]);	

