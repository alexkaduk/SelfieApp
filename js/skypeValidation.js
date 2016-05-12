; (function () {
    "use strict";

    angular
        .module("selfieApp")
        .directive("skypeValidation", skypeValidation);

    function skypeValidation() {
        
        return {
            require: "ngModel",
            link: function (scope, element, attributes, ctrl) {
                ctrl.$validators.skype = function (modelValue, viewValue) {
                    var SKYPE_REGEXP = /^[a-z][a-z0-9/\.,/\-_]{5,31}$/i;

                    if (ctrl.$isEmpty(modelValue)) {
                        return true;
                    }
                    if (SKYPE_REGEXP.test(viewValue)) {
                        return true;
                    }

                    return false;
                }
            },
            restrict: "A"
        }
    }
})();