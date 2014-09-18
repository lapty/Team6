angular.module("menuModule")
    .factory("menuSvc", function ( $rootScope, $log, $http) {

// CRUD FOR RESTAURANTS
        //
        var rests = [
        {
            title: "Monza",
            link: "monza",
            image: "http://littleworksofheart.typepad.com/.a/6a00d83452dc8469e20120a9735f46970b-350wi"
        },
        {
            title: "Poes",
            link: "poes",
            image: "https://glutenfreegrrrrl.files.wordpress.com/2012/11/poes.jpg"
        },
        {
            title: "Closed for Business",
            link: "cfb",
            image: "http://hookworldwide.com/wp-content/uploads/2010/03/cfb_blog_background_color.jpg"
        },
            {
            title: "Tacoboy",
            link: "tacoboy",
            image: "https://pbs.twimg.com/profile_images/533007319/09-TBD-0005_taco_boy_downtown_logo_rgb.jpg"
            }
        ];

        var getRests = function(){
          return rests;
        };

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
