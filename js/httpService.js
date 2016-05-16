(function () {
    'use strict';

    angular
        .module("selfieApp")
        .factory("httpService", httpService);

    httpService.$inject = [
        '$q',
        'httpHandler'
    ];

    function httpService($q, httpHandler) {
        var service = {
            getUsers: getUsers,
            addUser: addUser
        }

        function getUsers() {
            var deferred = $q.defer();
            httpHandler.sendRequest({
                verb: 'GET',
                url: '/users',
                successCallback: function (result) {
                    deferred.resolve(result.data);
                },
                errorCallback: function (status) {
                    console.log("Get users data error");
                    console.log(status);
                }
            });
            return deferred.promise;
        }

        function addUser(data) {
            if (!data.hasOwnProperty("lastname")) {
                data.lastname = null;
            }
            if (!data.hasOwnProperty("tel")) {
                data.tel = null;
            }
            if (!data.hasOwnProperty("skype")) {
                data.skype = null;
            }
            if (!data.hasOwnProperty("notes")) {
                data.notes = null;
            }

            var deferred = $q.defer();
            httpHandler.sendRequest({
                url: '/user',
                verb: 'POST',
                body: data,
                successCallback: function (result) {
                    deferred.resolve(result.data);
                },
                errorCallback: function (status) {
                    console.log("Add user data error");
                    console.log(status);
                }
            });
            return deferred.promise;
        }

        return service;
    }
})();