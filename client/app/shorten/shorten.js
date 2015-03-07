angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  if (!Auth.isAuth()) {
    $location.path('/signin');
    return;
  }

  $scope.link = {};
  $scope.addLink = function(){
    Links.addLink($scope.link, function(data) {
      console.log(data);
      $location.path('/links');
    });
  };

});
