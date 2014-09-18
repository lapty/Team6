angular.module("menuModule")

    .controller("mccradysCtrl", function ($scope, $route, $rootScope, $location, $routeParams, $anchorScroll, $log, mccradysSvc) {
// CRUD FOR MENU

        menuSvc.getMenus().then(function (mccradysMenus) {
           $log.info(mccradysMenus);
            $scope.mccradysMenus = mccradysMenus.data;
         });

        //  menuSvc.singleMenu($routeParams.id).then(function (response) {
        //      $scope.singleMenu = response.data;
        //  });

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


// // CRUD FOR MENU ITEMS
//
//         menuSvc.getItems().then(function (items) {
//            $log.info(items);
//             $scope.items = items.data;
//
//          });
//
//          menuSvc.singleItem($routeParams.id).then(function (response) {
//              $scope.singleItem = response.data;
//          });
//
//          $scope.addItem = function (item) {
//              menuSvc.addItem(item);
//
//          };
//
//          $scope.editItem = function (item) {
//              menuSvc.editItem(item);
//          };
//
//          $scope.deleteItem = function (id) {
//              menuSvc.deleteItem(id);
//          };


    $rootScope.$on("menu:deleted", function () {
      menuSvc.getMenus().then(function (mccradysMenus) {
        $scope.mccradysMenus = mccradysMenus.data;
        $route.reload();
      });
  });

    $rootScope.$on("menu:added", function () {
      menuSvc.getMenus().then(function (mccradysMenus) {
        $scope.mccradysMenus = mccradysMenus.data;
      });
  });

    $rootScope.$on("item:added", function () {
      menuSvc.getMsgs().then(function (items) {
        $scope.msgs = msgs.data.reverse();
    });
  });
});
