angular.module("menuModule")
    .factory("huskSvc", function ( $rootScope, $log, $http) {

////////CRUD FOR MENUS

        var huskMenus = "/huskMenus";

        var getMenus = function(){
          return $http.get(huskMenus);
        };

        // var singleMenu = function(id) {
        //    return $http.get(huskMenus + "/" + id);
        // };

        var createMenu = function(menu) {
          $http.post(huskMenus, menu).then(function (response) {
                $rootScope.$broadcast("menu:added");
                $log.info("menu:added");
            })
        };

        var deleteMenu = function(menu) {
          return $http.delete(huskMenus + "/" + menu.id, menu).then(function (response) {
                console.log(response);
                $rootScope.$broadcast("menu:deleted");
                $log.info("menu:deleted");
            })
        };

        var editMenu = function(menu) {
          return $http.put(huskMenus + "/" + menu.id, menu).then(function (response) {
                $rootScope.$broadcast("menu:updated");
                $log.info("menu:updated");
            })
        };
//
// // CRUD FOR MENU ITEMS
//
//         var items = "/huskMenus/:menu_id/items";
//
//         var getItems = function(){
//           return $http.get(items);
//         };
//
//         var singleItem = function(id) {
//            return $http.get(items + "/" + id);
//         };
//
//         var createItem = function(item) {
//           return $http.post(items, item).then(function (response) {
//                 $rootScope.$broadcast("item:added");
//                 $log.info("item:added");
//             })
//         };
//
//         var deleteItem = function(item) {
//           return $http.delete(items + "/" + item._id, item).then(function (response) {
//                 console.log(response);
//                 $rootScope.$broadcast("item:deleted");
//                 $log.info("item:deleted");
//             })
//         };
//
//         var editItem = function(item) {
//           return $http.put(items + "/" + item._id, item).then(function (response) {
//                 $rootScope.$broadcast("item:updated");
//                 $log.info("item:updated");
//             })
//         };

        return {
          // Menus
          getMenus: getMenus,
          // singleMenu: singleMenu,
          addMenu: createMenu,
          deleteMenu: deleteMenu,
          editMenu: editMenu
          // // Menu Items
          // getItems: getItems,
          // singleItem: singleItem,
          // addItem: createItem,
          // deleteItem: deleteItem,
          // editItem: editItem,
        };
    });
