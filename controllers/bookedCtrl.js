angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $state, mainSrv){

var id = $state.params.id;
   var idSearcher = function(id){
      var packages = mainSrv.getPackages();
      for(var i in packages){
          if(packages[i].id == id){
              $scope.currentPackage = packages[i];
              $scope.background = {
                  'background': "url(" + packages[i].image +") no-repeat center",
                  "background-size": "cover"
              }
          }
      }
   }

idSearcher(id)
})