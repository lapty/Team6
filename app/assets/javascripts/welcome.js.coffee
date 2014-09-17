# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

#= require_self
#= require_tree ./controllers
#= require_tree ./services

var restaurantgroup = angular.module("menuModule",["ngRoute"])

  .config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "../assets/restList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin", {
            templateUrl: "../assets/restList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/:id", {
            templateUrl: "../assets/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/:id/:id", {
            templateUrl: "../assets/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/:id/new", {
            templateUrl: "../assets/menuAdd.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/:id", {
            templateUrl: "../assets/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/:id/:id", {
            templateUrl: "../assets/menu.html.erb",
            controller: "menuCtrl"
        })

        .otherwise({
            redirectTo: "/"
        });
});
