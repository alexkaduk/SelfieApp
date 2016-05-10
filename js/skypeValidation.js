﻿; (function () {
    "use strict";

    angular
        .module("selfieApp")
        .directive("skypeValidation", skypeValidation);

    function skypeValidation() {
        
        return {
            require: "ngModel",
            link: function (scope, element, attributes, ctrl) {
                console.log(scope);

                ctrl.$validators.skype = function (modelValue, viewValue) {
                    var SKYPE_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@udelphi\.com$/i;

                    if (ctrl.$isEmpty(modelValue)) {
                        return true;
                    }
                    if (SKYPE_REGEXP.test(viewValue)) {
                        return true;
                    }

                    return false;


                    //return EMAIL_REGEXP.test(viewValue) ? true : false;
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