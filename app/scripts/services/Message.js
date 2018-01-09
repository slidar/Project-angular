(function() {
  function Message($firebaseArray, $cookies, $filter) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.send = function(newMessage, activeRoom) {
      var date = new Date();
      messages.$add({
          content: newMessage,
          roomId: activeRoom.$id,
          sentAt: $filter('date')(date, '(M/d/yy)'),
          username: $cookies.get('blocChatCurrentUser')
      });
    };

    return Message;

  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', '$filter', Message]);
})();
