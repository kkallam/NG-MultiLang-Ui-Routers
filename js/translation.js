(function(){
	var myApp = angular.module("myApp");
	myApp.config(["$translateProvider", function ($translateProvider) {
		  $translateProvider.translations("en", myApp.ltranslationsEN);
		  $translateProvider.preferredLanguage("en");
		  $translateProvider.translations("sq", myApp.ltranslationsSP);
		}]);	
}());