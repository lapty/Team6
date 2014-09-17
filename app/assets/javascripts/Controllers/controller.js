angular.module("menuModule")
    .controller("menuCtrl", function ($scope, $rootScope, $location, $routeParams, $log, menuSvc) {

//  CRUD FOR RESTAURANTS

        $scope.rests = menuSvc.getRests();

    //    menuSvc.getRests().then(function (rests) {
    //       $log.info(rests);
    //        $scope.rests = rests.data;
    //
    //     });

        // menuSvc.singleRest($routeParams.id).then(function (response) {
        //     $scope.singleRest = response.data;
        //
        // });

        $scope.addRest = function (rest) {
            menuSvc.createRest(rest).then(function () {
                $location.path("/admin");
            });

        };

        $scope.editRest = function (rest) {
            menuSvc.editRest(rest).then(function () {
                $location.path("/admin");
            });
        };

        $scope.deleteRest = function (id) {
            menuSvc.deleteRest(id).then(function () {
                $location.path("/admin");
            });
        };

// CRUD FOR MENU

        menuSvc.getMenus().then(function (menus) {
           $log.info(menus);
            $scope.menus = menus.data;

         });

         menuSvc.singleMenu($routeParams.id).then(function (response) {
             $scope.singleMenu = response.data;
         });

         $scope.addMenu = function (menu) {
             menuSvc.createMenu(menu);
         };

         $scope.goToMonza = function () {
           $location.path("#/admin/monza")
         };

         $scope.goToPoes = function () {
           $location.path("#/admin/poes")
         };

         $scope.goToTacoBoy = function () {
           $location.path("#/admin/tacoboy")
         };

         $scope.goToCfb = function () {
           $location.path("#/admin/cfb")
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
