angular.module("menuModule")
    .factory("menuSvc", function ( $rootScope, $log, $http) {

########### CRUD FOR RESTAURANTS

        var rests = "______";

        var getRests = function(){
          return $http.get(rests);
        };

        var singleRest = function(id) {
           return $http.get(rests + "/" + id);
        };

        var createRest = function(rest) {
          return $http.post(rests, rest).then(function (response) {
                $rootScope.$broadcast("rest:added");
                $log.info("rest:added");
            })
        };

        var deleteRest = function(rest) {
          return $http.delete(rests + "/" + rest._id, rest).then(function (response) {
                console.log(response);
                $rootScope.$broadcast("rest:deleted");
                $log.info("rest:deleted");
            })
        };

        var editRest = function(rest) {
          return $http.put(rests + "/" + rest._id, rest).then(function (response) {
                $rootScope.$broadcast("rest:updated");
                $log.info("rest:updated");
            })
        };

############## CRUD FOR MENUS

        var menus = "______";

        var getMenus = function(){
          return $http.get(menus);
        };

        var singleMenu = function(id) {
           return $http.get(menus + "/" + id);
        };

        var createMenu = function(menu) {
          return $http.post(menus, menu).then(function (response) {
                $rootScope.$broadcast("menu:added");
                $log.info("menu:added");
            })
        };

        var deleteMenu = function(menu) {
          return $http.delete(menus + "/" + menu._id, menu).then(function (response) {
                console.log(response);
                $rootScope.$broadcast("menu:deleted");
                $log.info("menu:deleted");
            })
        };

        var editMenu = function(menu) {
          return $http.put(menus + "/" + menu._id, menu).then(function (response) {
                $rootScope.$broadcast("menu:updated");
                $log.info("menu:updated");
            })
        };

################ CRUD FOR MENU ITEMS

        var items = "______";

        var getMenus = function(){
          return $http.get(items);
        };

        var singleMenu = function(id) {
           return $http.get(items + "/" + id);
        };

        var createMenu = function(item) {
          return $http.post(items, item).then(function (response) {
                $rootScope.$broadcast("item:added");
                $log.info("item:added");
            })
        };

        var deleteMenu = function(item) {
          return $http.delete(items + "/" + item._id, item).then(function (response) {
                console.log(response);
                $rootScope.$broadcast("item:deleted");
                $log.info("item:deleted");
            })
        };

        var editMenu = function(item) {
          return $http.put(items + "/" + item._id, item).then(function (response) {
                $rootScope.$broadcast("item:updated");
                $log.info("item:updated");
            })
        };

        return {
          # Restaurants
          getRests: getRests,
          singleRest: singleRest,
          addRest: createRest,
          deleteRest: deleteRest,
          editRest: editRest,
          # Menus
          getMenus: getMenus,
          singleMenu: singleMenu,
          addMenu: createMenu,
          deleteMenu: deleteMenu,
          editMenu: editMenu,
          #Menu Items
          getItems: getItems,
          singleItem: singleItem,
          addItem: createItem,
          deleteItem: deleteItem,
          editItem: editItem,
        };
    });
