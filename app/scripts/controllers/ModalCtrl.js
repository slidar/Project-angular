(function() {
  function ModalCtrl($uibModal, Room) {

    this.open = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalInstanceCtrl as modal',
        size: 'sm'
      });
