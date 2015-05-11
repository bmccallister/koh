(function(module) {
try {
  module = angular.module('koh');
} catch (e) {
  module = angular.module('koh', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/koh/controllers/todo/todo.html',
    '<h2>Todo:</h2>\n' +
    '<ul>\n' +
    '	<li>Fix html5mode 404\n' +
    '	<li>Implement testing for nodeJS\n' +
    '	<li>Create global header\n' +
    '	<li>Add user login\n' +
    '	<li>Add library basic access\n' +
    '	<li>Move css lint after bootstrap to stop warnings\n' +
    '	<li> ...\n' +
    '</ul>\n' +
    '<br>\n' +
    '<div class="container"><em>This is a sample Protractor test</em>\n' +
    '	<div class="row">Find User:<input ng-model="search"></div>\n' +
    '	<div class="row"><button ng-click="findUser()" id="searchUser">Search</button></div>\n' +
    '			<div class="row successMessage" ng-if="currentUser">\n' +
    '			<div class="col-md-4">{{currentUser.user}}</div>\n' +
    '			<div class="col-md-4">{{currentUser.firstname}}</div>\n' +
    '			<div class="col-md-4">{{currentUser.lastname}}</div>\n' +
    '		</div>\n' +
    '		<div class="row errorMessage" ng-style="errorClass()">\n' +
    '			<h3>Error:</h3>{{errorMessage}}\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('koh');
} catch (e) {
  module = angular.module('koh', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/koh/controllers/users/users.html',
    '<div class="container dataTable">\n' +
    '	<div class="row" ng-repeat="user in userList">\n' +
    '		<div class="col-md-12" ng-if="isEditingUser(user)">\n' +
    '			<div class="col-md-2">{{$index}}</div>\n' +
    '			<div class="col-md-3"><input ng-model="user.user"></div>\n' +
    '			<div class="col-md-3"><input ng-model="user.firstname"></div>\n' +
    '			<div class="col-md-3"><input ng-model="user.lastname"></div>\n' +
    '			<div class="col-md-1"><button ng-click="saveUser(user)">Save</button></div>\n' +
    '		</div>\n' +
    '		<div class="col-md-12" ng-if="!isEditingUser(user)">\n' +
    '			<div class="col-md-2">{{$index}}</div>\n' +
    '			<div class="col-md-3">{{user.user}}</div>\n' +
    '			<div class="col-md-3">{{user.firstname}}</div>\n' +
    '			<div class="col-md-3">{{user.lastname}}</div>\n' +
    '			<div class="col-md-1"><button ng-click="editUser(user)">Edit</button></div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '<hr size=1>\n' +
    '<div class="container createData" ng-if="createNew">\n' +
    '	<div class="row">\n' +
    '		<div class="col-md-6">Username</div>\n' +
    '		<div class="col-md-6"><input ng-model="newUser.user"></div>\n' +
    '	</div>\n' +
    '	<div class="row">\n' +
    '		<div class="col-md-6">First Name</div>\n' +
    '		<div class="col-md-6"><input ng-model="newUser.firstname"></div>\n' +
    '	</div>\n' +
    '	<div class="row">\n' +
    '		<div class="col-md-6">Last Name</div>\n' +
    '		<div class="col-md-6"><input ng-model="newUser.lastname"></div>\n' +
    '	</div>\n' +
    '	<div class="row">\n' +
    '		<div class="col-md-6"><button ng-click="saveNewUser()">Save</div>\n' +
    '		<div class="col-md-6"><button ng-click="cancelCreate()">Cancel</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '<div class="container errorMessage" ng-if="errorMessage">{{errorMessage}}</div>\n' +
    '<div class="container successMessage" ng-if="successMessage">{{successMessage}}</div>\n' +
    '<button ng-click="doCreate();" ng-if="!createNew">Create</button>');
}]);
})();
