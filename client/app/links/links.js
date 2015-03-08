angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {

  if (!Auth.isAuth()) {
    $location.path('/signin');
    return;
  }

  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinks(function(data) {
      console.log(data);
      $scope.data.results = data;
    });
  };
  $scope.getLinks();
});
