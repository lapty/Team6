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

        .when("/admin/menus/1/items", {
            templateUrl: "../assets/husk/menuAdmin.html.erb",
            controller: "menuCtrl"
        })
        .when("/user/menus/1/items", {
            templateUrl: "../assets/husk/menu.html.erb",
            controller: "menuCtrl"
        })
        .when("/admin/menus/2/items", {
            templateUrl: "../assets/mccradys/menuAdmin.html.erb",
            controller: "menuCtrl"
        })
        .when("/user/menus/2/items", {
            templateUrl: "../assets/mccradys/menu.html.erb",
            controller: "menuCtrl"
        })
        .when("/admin/menus/3/items", {
            templateUrl: "../assets/chicagos/menuAdmin.html.erb",
            controller: "menuCtrl"
        })
        .when("/user/menus/3/items", {
            templateUrl: "../assets/chicagos/menu.html.erb",
            controller: "menuCtrl"
        })
        .when("/admin/menus/4/items", {
            templateUrl: "../assets/minero/menuAdmin.html.erb",
            controller: "menuCtrl"
        })
        .when("/user/menus/4/items", {
            templateUrl: "../assets/minero/menu.html.erb",
            controller: "menuCtrl"
        })
        // .when("/admin/:id", {
        //     templateUrl: "../assets/admin/menu.html.erb",
        //     controller: "menuCtrl"
        // })
        // .when("/user/:id", {
        //     templateUrl: "../assets/user/menu.html.erb",
        //     controller: "menuCtrl"
        // })
        // .when("/admin/:id", {
        //     templateUrl: "../assets/admin/menu.html.erb",
        //     controller: "menuCtrl"
        // })
        // .when("/user/:id", {
        //     templateUrl: "../assets/user/menu.html.erb",
        //     controller: "menuCtrl"
        // })

        .otherwise({
            redirectTo: "/"
        });
})
.config(["$httpProvider", function(provider) {
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
}]);
