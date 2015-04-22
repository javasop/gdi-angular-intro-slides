/**
 * Created by osama on 4/4/2015.
 */
var app = angular.module('turing', [ ]);

app.controller('UserController', function($scope){

    $scope.students =

        {
            "cohort":"1410",
            "students": [
                "jane",
                "john",
                "jimmy",
                "jones"
            ],
            "color":"blue"
        }


});
