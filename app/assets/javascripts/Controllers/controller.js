angular.module("menuModule")
    .controller("menuCtrl", function ($scope, $rootScope, $location, $routeParams, $log, menuSvc) {

        menuSvc.getMenus().then(function (menus) {
           $log.info(menus);
            $scope.menus = menus.data;
         });

         menuSvc.singleMenu($routeParams.id).then(function (response) {
             $scope.singleMenu = response.data;
         });

         $scope.addMenu = function (menu) {
             menuSvc.addMenu(menu);
             $location.path("/admin/tacoboy");
         };

         $scope.goToMonza = function () {
           $location.path("/admin/monza")
         };

         $scope.goToPoes = function () {
           $location.path("/admin/poes")
         };

         $scope.goToTacoBoy = function () {
           $location.path("/admin/tacoboy")
         };

         $scope.goToCfb = function () {
           $location.path("/admin/cfb")
         };

         $scope.editMenu = function (menu) {
             menuSvc.editMenu(menu);
         };

         $scope.deleteMenu = function (id) {
             menuSvc.deleteMenu(id);
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
             menuSvc.addItem(item);

         };

         $scope.editItem = function (item) {
             menuSvc.editItem(item);
         };

         $scope.deleteItem = function (id) {
             menuSvc.deleteItem(id);
         };
});
