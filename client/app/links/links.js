angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Auth) {
  $scope.data = {};

  // $scope.data.links = [ 'link1', 'link2' ];
  $scope.getLinks = function(){
    return $http({
      method: 'GET',
      url: '/api/links'
    }).then(function (resp){
      $scope.data.links = resp.data;
      console.log($scope.data.links);
    });
  }

  $scope.getLinks();

  $scope.signout = function () {
    Auth.signout()
      .then(function () {
        console.log('user is signedout!');
      })
      .catch(function (error) {
        console.error(error);
      });
  };



});
