; (function () {
    "use strict";

    angular
        .module("selfieApp")
        .controller("SelfieController", SelfieController);

    function SelfieController() {
        var vm = this;

        vm.tooltilAlert = {
            firstName: "Min length 2, max length 20",
            lastName: "Min length 2, max length 20",
            email: "Email on domain @udelphi.com",
            tel: "Telephone number, format +38(999)999-99-99",
            skype: "Beginning with latin letter. Length between 6 and 32 characters. Only letters and numbers. Spaces and special characters are not allowed",
            notes: "User notes. Max length 100"
        };

        vm.newUser = {};

        vm.addUserSelfie = function (newUser, isValid) {
            if (isValid) {
                vm.message = newUser.firstName + " " + newUser.lastName + " (" + newUser.email + " " + newUser.agreed + ")";
            } else {
                vm.showError = true;
            }

            //$scope.message = newUser.firstName + " " + newUser.lastName + " (" + newUser.email + " " + newUser.agreed + ")";
        }

        vm.getError = function (error) {
            if (angular.isDefined(error)) {
                //console.log(error);
                if (error.required) {
                    return "This field is required.";
                }
                if (error.email) {
                    return "Input correct email.";
                }
                if (error.minlength) {
                    return "Minimal length 2 characters.";
                }
                if (error.maxlength) {
                    return "Maximal length 20 characters.";
                }
                if (error.pattern) {
                    return "Input correct telephone number, format: +38(999)999-99-99.";
                }
                if (error.skype) {
                    return "Input correct skype login.";
                }
            }
            return "";
        }

        vm.message = "Ready";
        //vm.imagesResource = galleryFactory.getData();
        //vm.imagesHttp = galleryService.getData();

        // Validation TEST part
        vm.requireValue = true;
        //vm.matchPattern = new RegExp("[a-z]");
        //vm.patternLetters = new RegExp("[a-z]");
        //vm.patternUdelphiCom = new RegExp("");
        vm.patternTel = new RegExp('\\+\\d{2}\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}');


    }
})();