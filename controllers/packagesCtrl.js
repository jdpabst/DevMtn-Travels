angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv){
 
   $scope.getPackageInfo = mainSrv.packageInfo;

})