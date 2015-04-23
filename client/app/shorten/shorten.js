angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http) {

  $scope.link = {};

  $scope.success = false;

  $scope.addLink = function(){
    $scope.link.url = $scope.url;
    JSON.stringify($scope.link);
    console.log('scope', $scope.link);

    return $http({
      method: 'POST',
      url: '/api/links',
      data: $scope.link
    }).then(function (resp){
      // $scope.data.links = resp.data;
     console.log('resp data is:', resp.data);
     $scope.success = true;
    });
  }
});
