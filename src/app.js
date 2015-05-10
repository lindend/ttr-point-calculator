
var App = angular.module('ttrcalculator', []);

App.controller('ttrPointCalculator', ['$scope', function($scope) {
	$scope.points = 0;
	$scope.undoStack = [];

	var euroScoreTable = {
		1: 1,
		2: 2,
		3: 4,
		4: 7,
		6: 15,
		8: 21
	};

	$scope.scoreTable = euroScoreTable;

	$scope.clear = function() {
		$scope.undoStack.push($scope.points);
		$scope.points = 0;
	};

	$scope.undo = function() {
		if ($scope.undoStack.length > 0)
			$scope.points = $scope.undoStack.pop();
	}

	$scope.addPoints = function(trackLength) {
		$scope.undoStack.push($scope.points);
		$scope.points += $scope.scoreTable[trackLength] || 0;
	};
}]);