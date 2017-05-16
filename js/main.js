'use strict';

var myApp = angular.module('myApp', ['pascalprecht.translate', 'ui.router']);
	


myApp.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html'
		})
				.state('home.aboutus', {
					url: 'aboutus',
					templateUrl: 'templates/aboutus.html'
				})
				.state('home.team', {
					url: 'team',
					templateUrl: 'templates/team.html'
				})
				.state('home.growth', {
					url: 'growth',
					templateUrl: 'templates/growth.html'
				})
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html'
		})


		.state('usa', {
			url: '/usa',
			views: {
				'': {templateUrl: 'templates/usa.html'},
				'popular@usa': { 
					templateUrl: 'templates/view-popular.html', 
					controller: ['$scope', function($scope) {
                 				$scope.authors = [
				                    {name: 'John', surname: 'Benneth'},
				                    {name: 'Anthony', surname: 'Horner'},
				                    {name: 'James', surname: 'Blanch'},
				                    {name: 'Harrison', surname: 'Williams'},
                 				];
               		}]
				},
				'recent@usa': { 
					templateUrl: 'templates/view-recent.html' }

			}

		})


		.state('uk', {
			url: '/uk',
			templateUrl: 'templates/uk.html'
		})
				.state('uk.dashboard', {
					url: '/dashboard',
					templateUrl: 'templates/uk-dashboard.html'
				})
				.state('uk.volume', {
					url: '/volume/:month',
					templateUrl: 'templates/uk-volume.html',
					controller: function($scope, $state, $stateParams){
						$scope.m = $stateParams.month;
						$scope.state = $state.current
	    				$scope.params = $stateParams; 
					}
				})
				.state('uk.los', {
					url: '/los',
					templateUrl: 'templates/uk-los.html'
				})


		.state('australia', {
			url: '/australia',
			templateUrl: 'templates/australia.html'
		})


		.state('india', {
			url: '/india',
			templateUrl: 'templates/india.html',
			controller: 'employeesCtrl'
		})
				.state('india.employees', {
					url: '/employees',
					templateUrl: 'templates/ind-emp.html'
					
				})
						.state('india.employees.id', {
							url: '/employees/{empId}',
							templateUrl: 'templates/ind-emp-id.html',
							controller: 'employeesIdCtrl'
						})


		.state('southamerica', {
			url: '/southamerica',
			templateUrl: 'templates/southamerica.html'
	});

	$urlRouterProvider.otherwise('/');

	//$translateProvider.translations('sp', {
		// HOME: 'Casa',
		// CONTACT: 'CONTACTO!',
		// USA: 'USA',
		// UK: 'UK',
		// AUSTRALIA: 'Australia',
		// INDIA: 'India',
		// SOUTHAMERICA: 'South America',
		// WELCOME: 'Bienvenido a Tekzenit',
		// BUTTON_LANG_FR: 'FRENCH',
		// BUTTON_LANG_EN: 'English',
		// BUTTON_LANG_SP: 'ESPAÑOL',
		// HOME_PARA1: 'A veces las cosas más asombrosas suceden cuando menos lo esperas. Usted gana la lotería. Conoces el amor de tu vida. O, en el caso del proveedor de soluciones de extremo a extremo Tekzenit, usted se encuentra en la lista de Inc. 5000 de las compañías privadas de más rápido crecimiento de Estados Unidos. Por no mencionar la lista de Dallas 100 de las empresas privadas de más rápido crecimiento en el norte de Texas por dos años consecutivos.',
		// HOME_PARA2: 'Nunca hemos fijado metas de crecimiento, y el crecimiento nunca ha sido nuestra máxima prioridad, dice Sriman Chennareddy, fundador y CEO de Irving, Texas. Más bien, nuestro enfoque siempre ha sido ofrecer las mejores soluciones de la clase para nuestros clientes, a tiempo y dentro del presupuesto. Creemos en el desarrollo de relaciones a largo plazo con autenticidad y sinceridad.',
		// ABOUTUS: 'sobre nosotros',
		// TEAM: 'Equipo',
		// GROWTH: 'Crecimiento',
		// ABOUTUS_PARA1: 'A veces las cosas más asombrosas suceden cuando menos lo esperas. Usted gana la lotería. Conoces el amor de tu vida. O, en el caso del proveedor de soluciones de extremo a extremo Tekzenit, usted se encuentra en la lista de Inc. 5000 de las compañías privadas de más rápido crecimiento de Estados Unidos. Por no mencionar la lista de Dallas 100 de las compañías privadas de más rápido crecimiento en el norte de Texas por dos años consecutivos.',
		// TEAM_WELCOME: 'Aquí está nuestro increíble equipo ..',
		// TEAM_PARA1: 'Si el cliente es una pequeña empresa o una marca global, cada compromiso es una asociación. Nuestros clientes rápidamente se dan cuenta de que somos muy, muy serios acerca de hacer lo correcto para ellos y muy, muy serio acerca de hacer lo mejor ", dice Chennareddy. Él dice que él y su equipo toman tanto orgullo en un Web site que crearon para un restaurante pequeño, local como en sus compromisos en curso con las compañías de telecomunicaciones más grandes de los Estados Unidos y de la India. Sí, una de las mayores empresas de telecomunicaciones de la India. Chennareddy disfruta de la ironía de una empresa india que subcontrata trabajo de desarrollo a uno en los Estados Unidos y dice: "Calidad, compromiso e integridad siempre han sido nuestros principios rectores que nos han permitido atraer a tan grandes clientes".',
		// GROWTH_HOME: 'Pasión por encima del crecimiento',
		// GROWTH_PARA1: 'Pasa unos minutos hablando con Chennareddy sobre su negocio, y estás casi seguro de escuchar la palabra "apasionado". Él te dirá cómo todo el mundo en Tekzenit es "apasionado" sobre el trabajo que hacen. Y que la empresa hace un punto para contratar a personas "apasionadas" - que también resultan ser supersmart, altamente educados y tienen una "gran actitud".',
		// GROWTH_PARA2: 'Para Tekzenit y sus empleados, la lealtad es una calle de dos vías. "Tratamos a nuestros empleados muy bien, y tienden a quedarse con nosotros mucho tiempo", dice Chennareddy. "Les damos lo mejor de nosotros y esperamos lo mejor de ellos a cambio".',
		// GROWTH_PARA3: 'Por todo el éxito de su compañía y de su compañía, Chennareddy nunca ha olvidado sus raíces. Él vino a los E. en 1992 de la India para ganar una maestría en la informática en la universidad de Alabama A & M, se movió a Dallas en 1995 que miraba para comenzar una carrera, y encontró rápidamente el trabajo en una pequeña firma de consultoría de TI. El fallecimiento de esa compañía en 2000 fue el impulso que necesitó para iniciar su propia empresa. Dieciséis años más tarde, Tekzenit tiene 170 empleados en su sede de Irving y en lugares en Braga, Portugal, y Hyderabad, India. Y Chennareddy ha sido reconocido como uno de los principales líderes empresariales minoritarios en el norte de Texas por el Dallas Business Journal. La compañía también ha ganado docenas de otros prestigiosos diseños y premios creativos.',
		// GROWTH_PARA4: 'Tal vez habríamos crecido aún más y más rápido si hubiéramos fijado objetivos de crecimiento agresivos, dice Chennareddy, pero no creo que estaríamos tan contentos o contentos. Y, en última instancia, eso es lo más importante para Chennareddy, su equipo y, especialmente, sus clientes.',
		// 
		//FOOTERMSG: 'odos los derechos reservados por Tek Zen IT Enterprises @ 2017',
		//FOOTMSG1: 'Para Tekzenit y sus empleados, la lealtad es una calle de dos vías'

	//});
	//$translateProvider.translations('en', {
		// HOME: 'Home',
		// CONTACT: 'Contact!',
		// USA: 'USA',
		// UK: 'UK/ Europe',
		// AUSTRALIA: 'Australia/ NZ',
		// INDIA: 'India',
		// SOUTHAMERICA: 'South America',
		// WELCOME: 'Welcome to Tekzenit',
		// BUTTON_LANG_FR: 'FRENCH',
		// BUTTON_LANG_EN: 'English',
		// BUTTON_LANG_SP: 'SPANISH',
		// HOME_PARA1: 'Sometimes the most amazing things happen when you least expect them. You win the lottery. You meet the love of your life. Or, in the case of end-to-end solutions provider Tekzenit, you find yourself on the Inc. 5000 list of America’s fastest-growing private companies. Not to mention the Dallas 100 list of the fastest-growing privately held companies in North Texas for two years in a row.',
		// HOME_PARA2: 'We’ve never set any growth targets, and growth has never been our top priority,” says Sriman Chennareddy, founder and CEO of the Irving, Texas-based company. “Rather, our focus has always been on delivering best-in-class solutions for our clients, on time and on budget. We believe in developing long-term relationships with genuineness and sincerity.',
		// ABOUTUS: 'About Us',
		// TEAM: 'Team',
		// GROWTH: 'Growth',
		// ABOUTUS_PARA1: 'Soometimes the most amazing things happen when you least expect them. You win the lottery. You meet the love of your life. Or, in the case of end-to-end solutions provider Tekzenit, you find yourself on the Inc. 5000 list of America’s fastest-growing private companies. Not to mention the Dallas 100 list of the fastest-growing privately held companies in North Texas for two years in a row.',
		// TEAM_WELCOME: "Here's our incredible team..",
		// TEAM_PARA1: 'Whether the client is a small business or a global brand, every engagement is a partnership. “Our clients quickly realize we’re very, very serious about doing the right thing for them and very, very serious about doing our best,” Chennareddy says. He says he and his team take as much pride in a website they created for a small, local restaurant as in their ongoing engagements with the United States’ and India’s largest telecommunications companies. Yes, one of India’s largest telecommunications companies. Chennareddy enjoys the irony of an Indian company outsourcing development work to one in the U.S. and says, “Quality, commitment and integrity have always been our guiding principles that have allowed us to attract such great clients.”',
		// GROWTH_HOME: 'Passion Above Growth',
		// GROWTH_PARA1: 'Spend a few minutes talking to Chennareddy about his business, and you’re almost sure to hear the word “passionate.” He’ll tell you how everyone at Tekzenit is “passionate” about the work they do. And that the company makes it a point to hire “passionate” people – who also happen to be supersmart, highly educated and have a “great attitude.”',
		// GROWTH_PARA2: 'For Tekzenit and its employees, loyalty is a two-way street. “We treat our employees really well, and they tend to stay with us a long time,” Chennareddy says. “We give them our best, and we expect the best from them in return.”',
		// GROWTH_PARA3: 'For all his and his company’s success, Chennareddy has never forgotten his roots. He came to the U.S. in 1992 from India to earn a master’s in computer science at Alabama A&M University, moved to Dallas in 1995 looking to start a career, and quickly found work at a small IT consulting firm. That company’s demise in 2000 was the impetus he needed to start his own company. Sixteen years later, Tekzenit has 170 employees at its Irving headquarters and at locations in Braga, Portugal, and Hyderabad, India. And Chennareddy has been recognized as one of the top minority business leaders in North Texas by the Dallas Business Journal. The company has also won dozens of other prestigious design and creative awards.',
		// GROWTH_PARA4: '“Maybe we’d have grown even faster and bigger if we had set aggressive growth targets,” Chennareddy says, “but I don’t think we’d be as happy or as satisfied.” And, ultimately, that’s what’s most important to Chennareddy, his team and, especially, their clients.',
		//FOOTERMSG: 'All rights reserved by Tek Zen IT Enterprises @2017',
		//FOOTMSG1: 'Whether the client is a small business or a global brand, every engagement is a partnership'

	//});

	//$translateProvider.preferredLanguage('en');
	//$translateProvider.fallbackLanguage('en');

}]);


myApp.controller('langCtrl', ['$translate', '$scope', function ($translate, $scope) {
 
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };

}]);





