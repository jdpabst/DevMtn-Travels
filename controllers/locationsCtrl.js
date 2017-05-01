angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){

   $scope.getTravelInfo = mainSrv.travelInfo;
   

})