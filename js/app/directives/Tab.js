function tab() {
  return {
// var tab = {
    restrict: 'E',
    scope: {
      label: '@'
    },
    require: '^tabs',
    transclude: true,
    controllerAs: 'tabs',
    template: [
      '<div class="tabs__content" ng-if="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    // can't find replacement for link in component
    link: function ($scope, $element, $attrs, $ctrl) {
      $scope.tab = {
        label: $scope.label,
        selected: false
      };
      $ctrl.addTab($scope.tab);
    }
  };
}
 
angular
  // only works if I make new `app` here
  .module('app', [])
  .directive('tab', tab)
  .directive('tabs', tabs);
