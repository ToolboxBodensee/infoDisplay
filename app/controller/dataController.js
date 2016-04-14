app.controller('DataController', function (
	  $http
	, $interval
    , $log
    , $q
    , $rootScope
    , $scope
)
{
	$scope.activeEntry   = null;
	$scope.entries       = [];
	$scope.scrollTimeout = {
		timeout: 1000 * 5,
		timer:   null
	};

	$scope.loadData = function()
	{
		return $q(function(resolve, reject)
		{
			$http.get('data/data.json').then(function(response) {
				$scope.entries     = response.data;

				for (var i = 0; i < $scope.entries.length; ++i)
				{
					var currentEntry = $scope.entries[i];
					currentEntry.id = 'YOLO' + ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
						var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
						return v.toString(16);
					}));
				}

				$scope.activeEntry = $scope.entries[0];

				resolve();
			}, function ()
			{
				reject();
			});
		});
	};

	$scope.scrollToEntry = function (entry)
	{
		var jEntry = $('#' + entry.id);

		$log.log('DataController: scrollToEntry', jEntry);

		if (jEntry.length > 0)
		{
			var offset = jEntry.offset();

			$log.log('DataController: offset', offset);

			$('html,body').animate({ scrollTop: offset.top - 420 }, 'slow');
		}
	};

	$scope.scrollToNextEntry = function ()
	{
		var index = $scope.entries.indexOf($scope.activeEntry);
		++index;

		if (index > $scope.entries.length - 1) {
			index = 0;
		}

		$log.log('DataController: scrollToNextEntry, index', index);

		$scope.activeEntry = $scope.entries[index];

		$scope.scrollToEntry($scope.activeEntry);
	};

	$scope.startScrolling = function ()
	{
		if (!$scope.scrollTimeout.timer)
		{
			$log.log('DataController: startScrolling');

			$scope.scrollTimeout.timer = $interval($scope.scrollToNextEntry, $scope.scrollTimeout.timeout);
		}
	};

	$scope.loadData().then($scope.startScrolling);
});