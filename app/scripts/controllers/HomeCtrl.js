(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
      this.rooms = Room.all;
      this.selectedRoom = null;
      this.selectedRoomMessages = [];
      home.currentUser = $cookies.get('blocChatCurrentUser');

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

      this.selectRoom = function (room) {
        this.selectedRoom = room;

        this.selectedRoomMessages = Message.getByRoomId(room.$id);
      };
    }



    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
