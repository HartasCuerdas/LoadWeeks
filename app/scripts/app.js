var weeks = angular.module("weeks", []);

weeks.controller("AppCtrl", function ($http) {

  var app = this;

  $http.get("http://localhost:3000/weeks").success(function (result){
    app.weeks = result;
  });

});