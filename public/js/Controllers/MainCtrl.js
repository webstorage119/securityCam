var app = angular.module('securityCam')
  .controller('MainCtrl', ['$scope', '$timeout', '$mdSidenav', '$mdUtil', '$log', function($scope, $timeout, $mdSidenav, $mdUtil, $log) {
  
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      $log.debug(navID + "clicked")
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },300);
      return debounceFn;
    }
  
    $scope.closeLeft = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  
    $scope.closeRight = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };


}]) // End MainCtrl //