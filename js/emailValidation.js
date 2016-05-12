; (function () {
    "use strict";

    angular
        .module("selfieApp")
        .directive("emailValidation", emailValidation);

    function emailValidation() {
        
        return {
            require: "ngModel",
            link: function (scope, element, attributes, ctrl) {
                ctrl.$validators.email = function (modelValue, viewValue) {
                    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@udelphi\.com$/i;

                    return EMAIL_REGEXP.test(viewValue) ? true : false;
                }
            },
            restrict: "A"
        }
    }
})();