app.controller('DataController', function (
	  $http
    , $log
    , $q
    , $rootScope
    , $scope
)
{
	$scope.entries = [];

	$scope.loadData = function()
	{
		return $q(function(resolve, reject)
		{
			$http.get('data/data.json').then(function(response) {
				$scope.entries = response.data;

				resolve();
			}, function ()
			{
				reject();
			});
		});
	};

	$scope.loadData().then(function()
	{
		initHeaders();
	});
});