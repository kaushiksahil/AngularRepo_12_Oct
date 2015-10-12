var app=angular.module('myApp',[]);
app.controller('myController',function($scope){

$scope.firstName="";
$scope.lastName="";
$scope.fullName=function() {
return $scope.firstName +" "+ $scope.lastName;
}
});