angular.module("menuModule",["ngRoute"])

  .config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "../assets/user/main.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin", {
            templateUrl: "../assets/admin/restList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/:id", {
            templateUrl: "../assets/admin/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/:id/:id", {
            templateUrl: "../assets/admin/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/:id/new", {
            templateUrl: "../assets/admin/menuAdd.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/:id", {
            templateUrl: "../assets/user/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/:id/:id", {
            templateUrl: "../assets/user/menu.html.erb",
            controller: "menuCtrl"
        })

        .otherwise({
            redirectTo: "/"
        });
});
