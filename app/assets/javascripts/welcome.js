angular.module("menuModule",["ngRoute"])

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

        .when("/admin/tacoboy", {
            templateUrl: "../assets/tacoboy/admin/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/poes", {
            templateUrl: "../assets/poes/admin/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/monza", {
            templateUrl: "../assets/monza/admin/menuList.html.erb",
            controller: "menuCtrl"
        })
        .when("/admin/cfb", {
            templateUrl: "../assets/cfb/admin/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/tacoboy/new", {
            templateUrl: "../assets/tacoboy/admin/menuAdd.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/poes/new", {
            templateUrl: "../assets/poes/admin/menuAdd.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/monza/new", {
            templateUrl: "../assets/monza/admin/menuAdd.html.erb",
            controller: "menuCtrl"
        })
        .when("/admin/cfb/new", {
            templateUrl: "../assets/cfb/admin/menuAdd.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/tacoboy/:id", {
            templateUrl: "../assets/tacoboy/admin/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/poes/:id", {
            templateUrl: "../assets/poes/admin/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/monza/:id", {
            templateUrl: "../assets/monza/admin/menu.html.erb",
            controller: "menuCtrl"
        })
        .when("/admin/cfb/:id", {
            templateUrl: "../assets/cfb/admin/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/tacoboy", {
            templateUrl: "../assets/tacoboy/user/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/poes", {
            templateUrl: "../assets/poes/user/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/monza", {
            templateUrl: "../assets/monza/user/menuList.html.erb",
            controller: "menuCtrl"
        })
        .when("/user/cfb", {
            templateUrl: "../assets/cfb/user/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/tacoboy/:id", {
            templateUrl: "../assets/tacoboy/user/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/poes/:id", {
            templateUrl: "../assets/poes/user/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/monza/:id", {
            templateUrl: "../assets/monza/user/menu.html.erb",
            controller: "menuCtrl"
        })
        .when("/user/cfb/:id", {
            templateUrl: "../assets/cfb/user/menu.html.erb",
            controller: "menuCtrl"
        })

        .otherwise({
            redirectTo: "/"
        });
})
.config(["$httpProvider", function(provider) {
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
}]);
