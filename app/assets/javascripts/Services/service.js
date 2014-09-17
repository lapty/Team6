angular.module("menuModule")
    .factory("menuSvc", function ( $rootScope, $log, $http) {

// CRUD FOR RESTAURANTS
        //
        // var rests = [
        // {
        //     title: "Monza",
        //     link: "monza",
        //     image: "http://www.travelandleisure.com/sites/default/files/styles/image_300x300/public/field/image/local-experts-charleston-best-budget-restaurants.jpg?itok=HVZSEP8d"
        // },
        // {
        //     title: "Poes",
        //     link: "poes",
        //     image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9GMq6ZY2T_T0VUJuZjGIV-RDTszl3dTLbtngiaJPSl8nGNnXJ"
        // },
        // {
        //     title: "Closed for Business",
        //     link: "cfb",
        //     image: "https://s3.amazonaws.com/ah.cms/images/P1040351.jpg"
        // },
        //     {
        //     title: "Tacoboy",
        //     link: "tacoboy",
        //     image: "http://www.tacoboy.net/images/lrg_blockImageContact001.jpg"
        //     }
        // ];
        //
        // var getRests = function(){
        //   return rests;
        // };

////////CRUD FOR MENUS

        var menus = "/menus";

        var getMenus = function(){
          return $http.get(menus);
        };

        // var singleMenu = function(id) {
        //    return $http.get(menus + "/" + id);
        // };

        var createMenu = function(menu) {
          $http.post(menus, menu).then(function (response) {
                $rootScope.$broadcast("menu:added");
                $log.info("menu:added");
            })
        };

        var deleteMenu = function(menu) {
          return $http.delete(menus + "/" + menu.id, menu).then(function (response) {
                console.log(response);
                $rootScope.$broadcast("menu:deleted");
                $log.info("menu:deleted");
            })
        };

        var editMenu = function(menu) {
          return $http.put(menus + "/" + menu.id, menu).then(function (response) {
                $rootScope.$broadcast("menu:updated");
                $log.info("menu:updated");
            })
        };
//
// // CRUD FOR MENU ITEMS
//
//         var items = "/menus/:menu_id/items";
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
          // getRests: getRests,
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
