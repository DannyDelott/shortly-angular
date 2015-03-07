angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  if (!Auth.isAuth()) {
    $location.path('/signin');
  } else {
    $scope.data = {};
    $scope.getLinks = function(){};
  }
});
