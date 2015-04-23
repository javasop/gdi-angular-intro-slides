/**
 * Created by osama on 4/4/2015.
 */
var app = angular.module('turing', [ ]);

app.controller('UserController', function($scope){

    $scope.cohorts =[

    {
        "name":"1410",
        "students": [
            "jane",
            "john",
            "jimmy",
            "jones"
        ],
        "color":"blue"
    },
    {
        "name":"1412",
        "students": [
            "a",
            "b",
            "c",
            "d"
        ],
        "color":"red"
    }
]

});
