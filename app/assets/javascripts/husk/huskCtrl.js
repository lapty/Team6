angular.module("menuModule")

    .controller("huskCtrl", function ($scope, $route, $rootScope, $location, $routeParams, $anchorScroll, $log, huskSvc) {

// CRUD FOR MENU

        menuSvc.getMenus().then(function (huskMenus) {
           $log.info(huskMenus);
            $scope.huskMenus = huskMenus.data;
         });

        //  menuSvc.singleMenu($routeParams.id).then(function (response) {
        //      $scope.singleMenu = response.data;
        //  });

         $scope.addMenu = function (menu) {
             huskSvc.addMenu(menu);
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
             huskSvc.editMenu(menu);
         };

         $scope.deleteMenu = function (id) {
             huskSvc.deleteMenu(id);
         };


// // CRUD FOR MENU ITEMS
//
//         huskSvc.getItems().then(function (items) {
//            $log.info(items);
//             $scope.items = items.data;
//
//          });
//
//          huskSvc.singleItem($routeParams.id).then(function (response) {
//              $scope.singleItem = response.data;
//          });
//
//          $scope.addItem = function (item) {
//              huskSvc.addItem(item);
//
//          };
//
//          $scope.editItem = function (item) {
//              huskSvc.editItem(item);
//          };
//
//          $scope.deleteItem = function (id) {
//              huskSvc.deleteItem(id);
//          };


    $rootScope.$on("menu:deleted", function () {
      huskSvc.getMenus().then(function (huskMenus) {
        $scope.huskMenus = huskMenus.data;
        $route.reload();
      });
  });

    $rootScope.$on("menu:added", function () {
      huskSvc.getMenus().then(function (huskMenus) {
        $scope.huskMenus = huskMenus.data;
      });
  });

    $rootScope.$on("item:added", function () {
      huskSvc.getMsgs().then(function (items) {
        $scope.msgs = msgs.data.reverse();
    });
  });
});
