'use strict';

require(['../app'], function(app) {
	return app.controller('MainCtrl', ['$scope', function($scope) {
		$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma',
		'AngularUI'
		];
	}]);
});