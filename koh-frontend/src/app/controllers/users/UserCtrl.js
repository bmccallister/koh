angular.module('koh').controller('UserCtrl', ['$scope', 'helpers', 'Restangular', function($scope, helpers, Restangular) {	
	var usersObject = Restangular.all('users');
	$scope.currentUser = null;
	$scope.createNew = false;
	$scope.newUser = null;
	$scope.errorMessage = null;
	$scope.successMessage = null;

	$scope.loadUserList = function() {
		usersObject.getList().then(function(accounts) {
			$scope.userList = accounts;
		});	
	}

	$scope.loadUserList();


	$scope.editUser = function(user) {
		console.log('Setting new edit user');
		$scope.currentUser = user;
	};

	$scope.doCreate = function() {
		$scope.createNew = true;
		$scope.newUser = { "user":"", "firstname":"", "lastname":"" }
	};

	$scope.isEditingUser = function(user) {
		if (_.isUndefined($scope.currentUser)||$scope.currentUser==null) {
			return false;
		}
		return (user._id==$scope.currentUser._id);
	};

	$scope.cancelCreateNew = function() {
		$scope.createNew = false;
		$scope.newUser = null;
	};

	$scope.saveNewUser = function () {
		console.log('Saving user');
		if ($scope.newUser.user.length > 1 && 
			$scope.newUser.firstname.length > 1 &&
			$scope.newUser.lastname.length > 1) {
			$scope.errorMessage = null;
			usersObject.post($scope.newUser).then(function(newObj) {
				if (!_.isUndefined(newObj.error)) {
					$scope.errorMessage = newObj.error;
					$scope.successMessage = null;
				}
				else {
					$scope.successMessage = 'User: ' + $scope.newUser.user + ' Created!';
					$scope.newUser = null;
					$scope.createNew = false;
					$scope.loadUserList();
				}
			});	 
		}
		else {
			$scope.errorMessage = 'Not all fields filled out';
		}
	};
	
}]);


