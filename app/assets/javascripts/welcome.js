angular.module("menuModule",["ngRoute"])


  .config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "../assets/main.html.erb",
            controller: "menuCtrl"
        })

        .when("/user", {
            templateUrl: "../assets/user/menu.html.erb",
            controller: "menuCtrl"
        })


        .when("/admin", {
            templateUrl: "../assets/mainAdmin.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/:id", {
            templateUrl: "../assets/admin/menu.html.erb",
            controller: "menuCtrl"
        })
        .when("/user/:id", {
            templateUrl: "../assets/user/menu.html.erb",
            controller: "menuCtrl"
        })

        .otherwise({
            redirectTo: "/"
        });
})
.config(["$httpProvider", function(provider) {
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
}]);
