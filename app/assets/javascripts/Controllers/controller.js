angular.module("menuModule")

    .controller("menuCtrl", function ($scope, $route, $rootScope, $location, $routeParams, $anchorScroll, $log, menuSvc) {


        // var findRest = function (routeId) {
        //         switch(routeId) {
        //             case 1
        //             return "husk";
        //                 break;
        //             case 2
        //             return "mccradys";
        //                 break;
        //             case 3
        //             return "chicagos";
        //                 break;
        //             case 4
        //             return "minero";
        //                 break;
        //         }
        // };


        // $scope.restContainer = findRest($routeParams.id);


        $scope.rests = menuSvc.getRests();
        ///SCROLLING DOWN
        $(function() {
        $(".welcomeWrap").on("click", "#scrollButt", function() {
        $('html, body').animate({
          scrollTop: $("#scroll").offset().top }, 750);  });
        });
});
