angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http) {
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

  // $scope.getLinks = function(code){
  //   return $http({
  //     method: 'GET',
  //     url: '/api/links'
  //   }).then(function (resp){
  //     $scope.data.links = resp.data;
  //     console.log($scope.data.links);
  //   });
  // }

  $scope.getLinks();

  $scope.goToLink = function(val){
    return $http({
      method: "GET",
      url: '/api/links/' + val.code
    }).then(function (resp){
      console.log(resp.data);
    });
  }

});
