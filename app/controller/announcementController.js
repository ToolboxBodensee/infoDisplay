app.controller('AnnouncementsController', function (
      $http
    , $q
    , $log
    , $rootScope
    , $scope
)
{
    $scope.activeAnnouncement = {};
    $scope.announcements      = [];

    $scope.hasAnnouncement = function ()
    {
        return !$.isEmptyObject($scope.activeAnnouncement);
    };

    $scope.loadData = function()
    {
        return $q(function(resolve, reject)
        {
            $http.get('data/announcements.json').then(function(response) {
                $log.log('AnnouncementsController: Loaded data', response);

                $scope.announcements = response.data;

                for (var i = 0; i < $scope.announcements.length; ++i)
                {
                    var currentAnnouncement = $scope.announcements[i];

                    if (!currentAnnouncement.hidden)
                    {
                        $scope.activeAnnouncement = currentAnnouncement;

                        break;
                    }
                }

                resolve();
            }, function ()
            {
                reject();
            });
        });
    };

    $scope.loadData();
});