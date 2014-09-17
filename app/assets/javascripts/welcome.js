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

        .when("/admin/tacoboy", {
            templateUrl: "../assets/admin/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/poes", {
            templateUrl: "../assets/admin/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/monza", {
            templateUrl: "../assets/admin/menuList.html.erb",
            controller: "menuCtrl"
        })
        .when("/admin/cfb", {
            templateUrl: "../assets/admin/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/tacoboy/new", {
            templateUrl: "../assets/admin/menuAdd.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/poes/new", {
            templateUrl: "../assets/admin/menuAdd.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/monza/new", {
            templateUrl: "../assets/admin/menuAdd.html.erb",
            controller: "menuCtrl"
        })
        .when("/admin/cfb/new", {
            templateUrl: "../assets/admin/menuAdd.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/tacoboy/:id", {
            templateUrl: "../assets/admin/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/poes/:id", {
            templateUrl: "../assets/admin/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/admin/monza/:id", {
            templateUrl: "../assets/admin/menu.html.erb",
            controller: "menuCtrl"
        })
        .when("/admin/cfb/:id", {
            templateUrl: "../assets/admin/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/tacoboy", {
            templateUrl: "../assets/user/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/poes", {
            templateUrl: "../assets/user/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/monza", {
            templateUrl: "../assets/user/menuList.html.erb",
            controller: "menuCtrl"
        })
        .when("/user/cfb", {
            templateUrl: "../assets/user/menuList.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/tacoboy/:id", {
            templateUrl: "../assets/user/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/poes/:id", {
            templateUrl: "../assets/user/menu.html.erb",
            controller: "menuCtrl"
        })

        .when("/user/monza/:id", {
            templateUrl: "../assets/user/menu.html.erb",
            controller: "menuCtrl"
        })
        .when("/user/cfb/:id", {
            templateUrl: "../assets/user/menu.html.erb",
            controller: "menuCtrl"
        })

        .otherwise({
            redirectTo: "/"
        });
});
