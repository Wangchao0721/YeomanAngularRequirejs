'use strict';
require.config({
	shim: {
		'angular': {'exports': 'angular'},
		'angular-cookies': {
			'deps': ['angular']
		},
		'angular-resource': {
			'deps': ['angular']
		},
		'angular-sanitize': {
			'deps': ['angular']
		}
	},

	paths: {
		'jquery': '../../bower_components/jquery/jquery',
		'angular': '../../bower_components/angular/angular',
		'angular-resource': '../../bower_components/angular-resource/angular-resource',
		'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
		'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
		'text': '../../bower_components/requirejs-text/text'
	}
});
require(['angular',
	'angular-cookies',
	'angular-resource',
	'angular-sanitize',
	'../controllers/main', 
	'../app',
	'text!../../views/main.html'
	], function(angular, ngCookies,ngResource,ngSanitize,main,app,main_view) {

		return app.config(function($routeProvider) {
			$routeProvider
			.when('/', {
				template: main_view,
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
		});
	});