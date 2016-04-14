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
		var p = new Promise(function(resolve, reject)
		{
			$http.get('data/data.json').then(function(response) {
				$scope.entries = response.data;
				resolve();
			});
		});
		return p;
	};


	$scope.loadData().then(function()
	{
		initHeaders();
	});
});