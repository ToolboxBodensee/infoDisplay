/* global app */
angular.module('infoDisplay').controller('DataController', function (
      $log
    , $http
    , $rootScope
    , $scope
)
{
	$scope.entries = [];

	$scope.entries = [1, 2, 3];

	$scope.loadData = function()
	{
		$http.get('data.json').then(function(response) {
        	$scope.entries = response.data;                
        });
	};


	$scope.loadData();
});