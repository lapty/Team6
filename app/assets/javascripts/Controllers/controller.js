angular.module("menuModule")

    .controller("menuCtrl", function ($scope, $route, $rootScope, $location, $routeParams, $anchorScroll, $log, menuSvc) {

        $scope.rests = menuSvc.getRests();

        ///SCROLLING DOWN
        $(function() {
        $(".welcomeWrap").on("click", "#scrollButt", function() {
        $('html, body').animate({
          scrollTop: $("#scroll").offset().top }, 750);  });
        });
});

/menus
[
    {
        name: "McCrady's", items: [
            { name: "Some fancy shit", price: 100.00},
            { name: "Some more fancy shit", price: 100.00}
        ]
    }

]
