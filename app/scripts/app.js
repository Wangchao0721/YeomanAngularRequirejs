/*global define*/
'use strict';

define(['angular'], function(angular) {
    return angular.module('YeomanAngularApp', ['ngCookies',
        'ngResource',
        'ngSanitize'
    ]);
});