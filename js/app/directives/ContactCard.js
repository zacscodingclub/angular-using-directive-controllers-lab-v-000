function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		templateUrl: 'js/app/directives/contact_card.html',
		controller: function($scope) {
			$scope.username = $scope.username.toLowerCase()
		},
		controllerAs: 'ctrl',
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
