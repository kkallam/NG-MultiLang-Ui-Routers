

myApp.factory('empInfoService', function($http) { 
    return $http.get('js/employees.json').success(function(data){
    	$scope.employeesCtrlData= data.employees;
    	console.log($scope.employeesCtrlData);
  });
});