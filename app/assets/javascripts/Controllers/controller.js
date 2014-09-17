angular.module("menuModule")
    .controller("menuCtrl", function ($scope, $rootScope, $location, $routeParams, $log, menuSvc) {

// CRUD FOR MENU

        menuSvc.getMenus().then(function (menus) {
           $log.info(menus);
            $scope.menus = menus.data;

         });

         menuSvc.singleMenu($routeParams.id).then(function (response) {
             $scope.singleMenu = response.data;

         });

         $scope.addMenu = function (menu) {
             menuSvc.createMenu(menu).then(function () {
                 $location.path("/admin/:id");
             });

         };

         $scope.editMenu = function (menu) {
             menuSvc.editMenu(menu).then(function () {
                 $location.path("/admin/:id");
             });
         };

         $scope.deleteMenu = function (id) {
             menuSvc.deleteMenu(id).then(function () {
                 $location.path("/admin/:id");
             });
         };


// CRUD FOR MENU ITEMS

        menuSvc.getItems().then(function (items) {
           $log.info(items);
            $scope.items = items.data;

         });

         menuSvc.singleItem($routeParams.id).then(function (response) {
             $scope.singleItem = response.data;

         });

         $scope.addItem = function (item) {
             menuSvc.addItem(item).then(function () {
                 $location.path("/admin/:id/:id");
             });

         };

         $scope.editItem = function (item) {
             menuSvc.editItem(item).then(function () {
                 $location.path("/admin/:id/:id");
             });
         };

         $scope.deleteItem = function (id) {
             menuSvc.deleteItem(id).then(function () {
                 $location.path("/admin/:id/:id");
             });
         };
});
