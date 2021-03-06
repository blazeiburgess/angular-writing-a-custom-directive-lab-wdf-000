function tabs() {
  return {
// var tabs = {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function () {
      this.tabs = [];
 
      this.addTab = function (tab) {
        this.tabs.push(tab);
      };

      this.select = function (index) {
        this.tabs.forEach(function(tab) {
          tab.selected = false;
        });

        this.tabs[index].selected = true;
      };
    },
    controllerAs: 'tabs',
    link: function ($scope, $element, $attrs, $ctrl) {
      $ctrl.select($attrs.active || 0);
    },
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in tabs.tabs">',
              '<a href="" ng-bind="tab.label" ng-click="tabs.select($index);"></a>',
          '</li>',
        '</ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}
 
angular
  .module('app')
  .directive('tabs', tabs);
