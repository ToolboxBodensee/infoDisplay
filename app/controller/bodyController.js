app.controller('BodyController', function (
      $log
    , $rootScope
    , $scope
    , $timeout
)
{
	$scope.reloadTimeout = {
		timeout: 1000 * 60 * 60,
		timer:   null
	};

	$scope.init = function ()
	{
		$scope.reloadTimeout.timer = $timeout($scope.reloadPage, $scope.reloadTimeout.timeout);
	};

	$scope.reloadPage = function ()
	{
		$log.log('BodyController: reloadPage: reloading page');

		location.reload();
	};

	$scope.init();
});