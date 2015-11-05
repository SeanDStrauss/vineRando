'use strict';

/**
 * @ngdoc function
 * @name vineProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vineProjectApp
 */
angular.module('vineProjectApp')
  .controller('MainCtrl', function ($scope, $http, $sce, $window) {
   var vines = {};
   $http.defaults.headers.common["X-Mashape-Authorization"] = "zEs3Gj1vuFmshm446Z3SmHLJBBadp11x51Kjsnj0lZfKUUlDkx";
	$http({
		method: 'GET',
		url: 'https://community-vineapp.p.mashape.com/timelines/popular'

	}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		vines = response.data.data.records;
		console.log(vines);

		var randomNum = Math.floor((Math.random() * 18) + 1);

		$scope.trustSrc = function(src){
			return $sce.trustAsResourceUrl(src);
		}

		$scope.randomVine = vines[randomNum];


		$scope.pageReload = function(){
			$window.location.reload();
		}

		//console.log(response);
	});
  });
