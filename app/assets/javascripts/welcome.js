
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
