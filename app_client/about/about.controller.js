(function() {
  angular.module('loc8rApp').controller('aboutCtrl', aboutCtrl);

  function aboutCtrl() {
    var vm = this;

    vm.pageHeader = {title: 'About Loc8r'};
    vm.main = {
      content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLoc8r se giup ban tim dia diem lam viec thuan tien co ho tro wifi.'
    };
  }
})();
