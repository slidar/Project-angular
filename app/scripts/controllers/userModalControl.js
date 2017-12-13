(function() {
    function ModalCtrl($uibModalInstance) {
        this.cancel = function () {
            $uibModalInstance.dismiss();
        };

        this.ok = function () {
            $uibModalInstance.close(this.roomName);
        };
    }

    angular
      .module('blocChat')
      .controller('userModalControl', ['$uibModalInstance', ModalCtrl]);
})();
