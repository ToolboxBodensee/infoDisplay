app.controller('EntryController', function (
      $log
    , $rootScope
    , $scope
)
{
	$scope.entry = {};

	$scope.hasImages = function ()
	{
		if (!$scope.entry.hasOwnProperty('hasImages'))
		{
			$scope.entry.hasImages = $scope.entry.images  && $scope.entry.images.length  > 0;
		}

		return $scope.entry.hasImages;
	};

	$scope.hasLinks = function ()
	{
		if (!$scope.entry.hasOwnProperty('hasLinks'))
		{
			$scope.entry.hasLinks = $scope.entry.links  && $scope.entry.links.length  > 0;
		}

		return $scope.entry.hasLinks;
	};

	$scope.hasSidebar = function ()
	{
		if (!$scope.entry.hasOwnProperty('hasSidebar'))
		{
			$scope.entry.hasSidebar = $scope.hasImages() || $scope.hasLinks();
		}

		$log.log('EntryController: hasSidebar', $scope.entry.hasSidebar);

		return $scope.entry.hasSidebar;
	};

	$scope.setEntry = function (entry)
	{
		$log.log('EntryController: setEntry', entry);

		$scope.entry = entry;
	};
});