(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;

      this.addNewRoom = function () {
        // open the modal
        var modalInstance = $uibModal.open({
          templateUrl: '/templates/modal.html',
          controller: 'ModalCtrl',
          controllerAs: 'modal'
        });

        // when the user closes the modal, add the room

        modalInstance.result.then(function (roomName) {
          // when the user submits the form
          Room.add(roomName);
        }, function (error) {});
      };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
