(function() {
  'use strict';

  angular
    .module('weed-starter')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
