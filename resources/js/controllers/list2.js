var mycity = angular.module('mycity', []);
mycity.controller('listCtrl', ['$scope',
  function($scope) {
    $scope.greeting = { text: 'Hello' };
}]);