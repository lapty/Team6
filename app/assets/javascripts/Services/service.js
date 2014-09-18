angular.module("menuModule")
    .factory("menuSvc", function ( $rootScope, $log, $http) {

        var rests = [
        {

            title: "Husk",
            link: "husk",
            image: "http://tomostyle.files.wordpress.com/2011/08/img_12681.jpg"
        },
        {
            title: "McCrady's",
            link: "mccradys",
            image: "http://4.bp.blogspot.com/-6G8epA5qts0/T_zYoo0JFII/AAAAAAAAAUs/MJ7aOFVMovo/s1600/McCrady%2527s+Restaurant+Charleston+SC+Jason+Frye+Food+Writer.JPG"
        },
        {
            title: "Chicago's",
            link: "chicagos",
            image: "https://s3.amazonaws.com/uploads.hipchat.com/31349/1041630/8B4CqsAyT6TJG57/chicagos_logo.png"
        },
            {
            title: "Minero",
            link: "minero",
            image: "https://pbs.twimg.com/profile_images/507665219108499458/uVk7-ZQs_400x400.jpeg"

            }
        ];

        var getRests = function(){
          return rests;
        };

////////CRUD FOR HUSK MENUS

        var menus = "/menus";

        var getMenus = function(){
          return $http.get(menus);
        };

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

        ////////CRUD FOR HUSK MENUS

                var menus = "/menus";

                var getMenus = function(){
                  return $http.get(menus);
                };

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

////////CRUD FOR HUSK MENUS

        var menus = "/menus";

        var getMenus = function(){
          return $http.get(menus);
        };

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


////////CRUD FOR HUSK MENUS

        var menus = "/menus";

        var getMenus = function(){
          return $http.get(menus);
        };

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

////////CRUD FOR HUSK MENUS

        var menus = "/menus";

        var getMenus = function(){
          return $http.get(menus);
        };

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
///////////////////////////////


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
          getRests: getRests,
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
