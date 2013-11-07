'use strict';
//15926464943    123456
require.config({
	paths: {
		'jquery': '../../bower_components/jquery/jquery',
	}
});

require(['jquery'], function() {

	$(document).ready(function() {
		console.log('Jquery loaded');
	});
});