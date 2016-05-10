; (function() {
    "use strict";

    angular
        .module("selfieApp")
        .directive("skypeValidation", skypeValidation);

    function skypeValidation() {
        //var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com$/i;
        var INTEGER_REGEXP = /^\-?\d+$/;
        return {
            require: "ngModel",
            link: function (scope, element, attributes, ctrl) {
                console.log(scope);
                
                ctrl.$validators.skype = function(modelValue, viewValue) {
                    if (ctrl.$isEmpty(modelValue)) {
                        // consider empty models to be valid
                        return false;
                    }
                    if (INTEGER_REGEXP.test(viewValue)) {
                        // it is valid
                        return false;
                    }

                    
                    // it is invalid
                    return false;
                }
            }

        }
    }
})();

//scope.data = scope[attributes["orderedList"]];

//if (ctrl && ctrl.$validators.text) {

//    // this will overwrite the default Angular email validator
//    ctrl.$validators.skype = function (modelValue) {
//        //console.log(ctrl);
//        return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
//    };
//}