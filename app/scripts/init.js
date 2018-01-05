(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    console.log("user name found?", currentUser);
    if (!currentUser || currentUser === '') {
      var modalInstance = $uibModal.open({
        // Modal configuration object properties
        templateUrl: '/templates/usermodal.html',
        controller: 'userModalControl',
        controllerAs: 'modal'
      });

      modalInstance.result.then(function (username) {
        console.log("The user name is ", username);
        $cookies.put('blocChatCurrentUser', username);
      }, function (error) {});
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
