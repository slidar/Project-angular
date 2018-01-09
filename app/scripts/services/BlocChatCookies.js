(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl:'/templates/username.html',
        controller: 'UsernameCtrl as username',
        size: 'sm',
        backdrop: 'static',
        keyboard: 'false',
      })
      // Do something to allow users to set their username
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
