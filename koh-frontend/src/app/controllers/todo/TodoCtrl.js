//var _ = require('lodash');

angular.module('koh').controller('TodoCtrl', ['$scope', 'helpers', 'Restangular', function($scope, helpers, Restangular) {	
	$scope.test = 'in browserified controller 2';
	$scope.userList = [];
	$scope.currentUser = null;
	$scope.errorMessage = null;

	var usersObject = Restangular.all('users');
	usersObject.getList().then(function(accounts) {
		$scope.userList = accounts;
	});	

	$scope.errorClass = function() {
		var hideDiv = { 'display' : 'none '};
		return ($scope.errorMessage ? {} : hideDiv);
	}

	$scope.findUser = function() {
		console.log('Searching for' + $scope.search);
		$scope.currentUser = null;
		_.each($scope.userList, function(row) {
			if (row.user == $scope.search) {
				$scope.errorMessage = null;
				$scope.currentUser = row;
			}
		});
		if ($scope.currentUser==null) {
			$scope.errorMessage = 'User not found!';
		}
	}
}]);


