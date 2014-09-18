angular.module("menuModule",["ngRoute"])

////mccradys husk minero chicagos

  .config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "../assets/main.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin", {
            templateUrl: "../assets/mainAdmin.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/mccradys", {
            templateUrl: "../assets/mccradys/admin/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/husk", {
            templateUrl: "../assets/husk/admin/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/minero", {
            templateUrl: "../assets/minero/admin/menuList.html.erb",
            controller: "menuCtrl"
        })
        .when("/admin/chicagos", {
            templateUrl: "../assets/chicagos/admin/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/mccradys/new", {
            templateUrl: "../assets/mccradys/admin/menuAdd.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/husk/new", {
            templateUrl: "../assets/husk/admin/menuAdd.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/minero/new", {
            templateUrl: "../assets/minero/admin/menuAdd.html.erb",
            controller: "menuCtrl"
        })
        .when("/admin/chicagos/new", {
            templateUrl: "../assets/chicagos/admin/menuAdd.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/mccradys/:id", {
            templateUrl: "../assets/mccradys/admin/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/husk/:id", {
            templateUrl: "../assets/husk/admin/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/minero/:id", {
            templateUrl: "../assets/minero/admin/menu.html.erb",
            controller: "menuCtrl"
        })
        .when("/admin/chicagos/:id", {
            templateUrl: "../assets/chicagos/admin/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/mccradys", {
            templateUrl: "../assets/mccradys/user/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/husk", {
            templateUrl: "../assets/husk/user/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/minero", {
            templateUrl: "../assets/minero/user/menuList.html.erb",
            controller: "menuCtrl"
        })
        .when("/user/chicagos", {
            templateUrl: "../assets/chicagos/user/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/mccradys/:id", {
            templateUrl: "../assets/mccradys/user/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/husk/:id", {
            templateUrl: "../assets/husk/user/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/minero/:id", {
            templateUrl: "../assets/minero/user/menu.html.erb",
            controller: "menuCtrl"
        })
        .when("/user/chicagos/:id", {
            templateUrl: "../assets/chicagos/user/menu.html.erb",
            controller: "menuCtrl"
        })

        .otherwise({
            redirectTo: "/"
        });
})
.config(["$httpProvider", function(provider) {
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
}]);
