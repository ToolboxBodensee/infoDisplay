app.config(['$translateProvider', function ($translateProvider)
{
    $translateProvider.translations('de', germanLanguage);

    $translateProvider.fallbackLanguage('de');
    $translateProvider.preferredLanguage('de');
}]);