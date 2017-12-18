var app = angular.module('app', ['ngResource', 'ng-rails-csrf', 'ngFileUpload','cgNotify', 'validation', 'validation.rule', 'angularTrix']);

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
