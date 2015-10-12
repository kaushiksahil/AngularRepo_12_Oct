var app1=angular.module('myApp2',[])
app1.controller('myCtrl2',function($scope){
	$scope.fNumber="";
	$scope.sNumber="";
	$scope.sum=fuction(){
		return $scope.fNumber+$scope.sNumber;
	}
});