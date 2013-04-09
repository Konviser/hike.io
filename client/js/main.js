"use strict";

angular.module("hikeio", ["ui"]).
  config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
  	$locationProvider.html5Mode(true);
    $routeProvider.
      when("/", {
        controller: IndexController,
        templateUrl: "templates/index.html",
        title: "hike.io" }).
      when("/discover", {
        controller: PhotoStreamController,
        templateUrl: "templates/photo_stream.html",
        title: "Discover - hike.io" }).
      when("/map", {
        controller: MapController,
        templateUrl: "templates/map.html",
        title: "Map - hike.io" });
  }]).

  // Handle title change
  run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      if (current) {
        $rootScope.title = current.$route.title;
      }
  	});
  }]);