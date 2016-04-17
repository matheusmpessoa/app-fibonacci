(function(){
	"use strict";

	angular.module("myApp").config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/menu/home");

		$stateProvider

		.state("menu", {
			url:"/menu",
			templateUrl:"views/menu.html",
			abstract: true,
			controller: "initCtrl"
		})


		.state("menu.home", {
			url:"/home",
			views:{
				'menuContent':{
					templateUrl:"views/home.html"
				}
			}
		})

		.state("menu.calculo", {
			url:"/calculo",
			views:{
				'menuContent':{
					templateUrl:"views/calculo.html"
				}
			}
		})

		.state("menu.sobre", {
			url:"/sobre",
			views:{
				'menuContent':{
					templateUrl:"views/sobre.html"
				}
			}
		})

		.state("menu.info", {
			url:"/info",
			views:{
				'menuContent':{
					templateUrl:"views/info.html"
				}
			}
		});

    });

})();
