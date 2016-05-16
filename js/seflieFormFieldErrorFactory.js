; (function () {
    "use strict";

    angular
        .module("selfieApp")
        .service("seflieFormFieldErrorFactory", seflieFormFieldErrorFactory);

    function seflieFormFieldErrorFactory() {
        var vm = this;

        return {
            getError: getError
        };

        function getError(error) {
            switch (angular.isDefined(error)) {
                case error.required:
                    return "This field is required";
                case error.email:
                    return "Input correct email in udelphi.com domain, e.g. my@udelphi.com";
                case error.minlength:
                    return "Minimal length 2 characters";
                case error.maxlength:
                    return "Maximal length 20 characters";
                case error.pattern:
                    return "Input correct telephone number, format: +38(999)999-99-99";
                case error.skype:
                    return "Input correct skype login, e.g. my.skype";
                default:
                    return "";
            }
        }
    }
})();