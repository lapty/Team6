# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

angular.module("menuModule",["ngRoute"])

  .config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "",
            controller: "menuCtrl"
        })

        .when("/admin", {
            templateUrl: "",
            controller: "menuCtrl"
        })

        .when("/admin/new", {
            templateUrl: "",
            controller: "menuCtrl"
        })

        .when("/admin/:id", {
            templateUrl: "",
            controller: "menuCtrl"
        })

        .when("/admin/:id/:id", {
            templateUrl: "",
            controller: "menuCtrl"
        })

        .when("/admin/:id/:id/edit", {
            templateUrl: "",
            controller: "menuCtrl"
        })

        .when("/admin/:id/new", {
            templateUrl: "",
            controller: "menuCtrl"
        })

        .when("/user/:id", {
            templateUrl: "",
            controller: "menuCtrl"
        })

        .when("/user/:id/:id", {
            templateUrl: "",
            controller: "menuCtrl"
        })

        .otherwise({
            redirectTo: "/"
        });
});
